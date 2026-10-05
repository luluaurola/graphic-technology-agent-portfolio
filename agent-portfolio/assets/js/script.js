/**
 * Portfolio Navigation Script
 * Handles smooth active state transitions and scroll synchronization
 */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Click interaction: smoothly update active state and scroll
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Update state directly on click
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // --- Setup Typing Animation for About Heading ---
  const aboutHeading = document.querySelector('.about-heading');
  let aboutText = '';
  let isTypingStarted = false;

  if (aboutHeading) {
    aboutText = aboutHeading.textContent.trim();
    // Gunakan minHeight agar layout tidak bergeser saat text dikosongkan
    const originalHeight = aboutHeading.getBoundingClientRect().height;
    if (originalHeight > 0) {
      aboutHeading.style.minHeight = `${originalHeight}px`;
    }
    aboutHeading.innerHTML = '<span class="typed-text"></span><span class="typing-cursor">|</span>';
  }

  function startTypingAnimation() {
    const typedSpan = document.querySelector('.typed-text');
    if (!typedSpan) return;
    
    let index = 0;
    const speed = 80; // 70-90ms
    
    function typeChar() {
      if (index < aboutText.length) {
        typedSpan.textContent += aboutText.charAt(index);
        index++;
        setTimeout(typeChar, speed);
      }
    }
    
    // Mulai animasi setelah jeda singkat
    setTimeout(typeChar, 300);
  }

  // IntersectionObserver: highlight active menu when section is visible
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Memicu ketika section 50% terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);
          
          if (targetLink) {
            navLinks.forEach((link) => link.classList.remove('active'));
            targetLink.classList.add('active');
          }

          // Trigger typing animation jika section about terlihat
          if (id === 'about' && !isTypingStarted && aboutHeading) {
            isTypingStarted = true;
            startTypingAnimation();
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  // --- Character Eye Tracking Logic ---
  const charImg = document.querySelector('.home-character');
  if (charImg) {
    const basePath = 'assets/image/';
    // Menggunakan nama file aktual yang ada di folder
    const images = {
      center: 'char-center.png',
      up: 'char-up.png',
      down: 'char-down.png',
      left: 'char-left.png',
      right: 'char-right.png',
      upLeft: 'char-up-left.png',
      upRight: 'char-up-right.png',
      downLeft: 'char-down-left.png',
      downRight: 'char-down-right.png'
    };

    // Preload semua 9 gambar agar tidak berkedip
    const preloadedImages = {};
    for (const key in images) {
      preloadedImages[key] = new Image();
      preloadedImages[key].src = basePath + images[key];
    }

    let currentSrc = images.center;
    const thresholdX = 60; 
    const thresholdY = 60; 

    document.addEventListener('mousemove', (e) => {
      // Karena karakter selalu ada di tengah-bawah layar, kita bisa pakai patokan layar
      // Titik tengah X = tengah layar
      const charCenterX = window.innerWidth / 2;
      // Titik tengah Y = tengah layar agar lebih akurat dengan gerakan mouse umum
      const charCenterY = window.innerHeight / 2;

      const dx = e.clientX - charCenterX;
      const dy = e.clientY - charCenterY;

      let directionX = '';
      let directionY = '';

      if (Math.abs(dx) > thresholdX) {
        // dx > 0 berarti kursor di kanan. Karakter melihat ke kanan (right).
        // dx < 0 berarti kursor di kiri. Karakter melihat ke kiri (left).
        directionX = dx > 0 ? 'right' : 'left'; 
      }
      
      if (Math.abs(dy) > thresholdY) {
        directionY = dy > 0 ? 'down' : 'up';
      }

      let newSrcKey = 'center';

      if (directionY === 'up' && directionX === 'left') newSrcKey = 'upLeft';
      else if (directionY === 'up' && directionX === 'right') newSrcKey = 'upRight';
      else if (directionY === 'down' && directionX === 'left') newSrcKey = 'downLeft';
      else if (directionY === 'down' && directionX === 'right') newSrcKey = 'downRight';
      else if (directionY === 'up') newSrcKey = 'up';
      else if (directionY === 'down') newSrcKey = 'down';
      else if (directionX === 'left') newSrcKey = 'left';
      else if (directionX === 'right') newSrcKey = 'right';
      
      const newSrc = images[newSrcKey];

      if (currentSrc !== newSrc) {
        charImg.src = basePath + newSrc;
        currentSrc = newSrc;
      }
    });
  }

  // --- Lanyard Drag & Physics Interaction ---
  const lanyardImg = document.querySelector('.lanyard-img');

  if (lanyardImg) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    
    // Posisi kumulatif
    let currentTranslateX = 0;
    let currentTranslateY = 0;
    
    // Untuk perhitungan velocity rotasi
    let lastMouseX = 0;
    let currentRotate = 0;

    // Cegah native ghost drag pada browser
    lanyardImg.addEventListener('dragstart', (e) => e.preventDefault());

    function onDragStart(e) {
      isDragging = true;
      lanyardImg.classList.add('dragging');
      lanyardImg.classList.remove('spring-back');

      // Deteksi posisi dari touch atau mouse
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

      startX = clientX;
      startY = clientY;
      lastMouseX = clientX;
    }

    function onDragMove(e) {
      if (!isDragging) return;
      
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

      // Delta pendekatan membuat gambar tidak loncat karena kita hitung perbedaan sejak frame terakhir
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      currentTranslateX += deltaX;
      currentTranslateY += deltaY;

      // Hitung kecepatan horizontal untuk kemiringan (rotasi)
      const velocityX = clientX - lastMouseX;
      
      // Mapping kecepatan ke rotasi (dikali rasio agar terasa berat)
      let targetRotate = velocityX * 1.5;
      
      // Batasi rotasi maksimum -30 sampai 30 derajat
      targetRotate = Math.max(-30, Math.min(30, targetRotate));
      
      // Lerp (Linear Interpolation) agar rotasi lebih halus
      currentRotate += (targetRotate - currentRotate) * 0.4;

      lanyardImg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg)`;

      // Simpan koordinat saat ini untuk iterasi selanjutnya
      startX = clientX;
      startY = clientY;
      lastMouseX = clientX;
    }

    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      
      lanyardImg.classList.remove('dragging');
      lanyardImg.classList.add('spring-back');
      
      // Biarkan posisi Translate menetap (tidak di-reset)
      // Namun rotasi kembali ke 0 dengan animasi spring-back
      currentRotate = 0;
      lanyardImg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(0deg)`;
    }

    // Mouse Events
    lanyardImg.addEventListener('mousedown', onDragStart);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);

    // Touch Events
    // touch-action: none pada CSS akan mengurus blokir scroll native di mobile saat kita drag gambar
    lanyardImg.addEventListener('touchstart', onDragStart, { passive: true });
    window.addEventListener('touchmove', onDragMove, { passive: true });
    window.addEventListener('touchend', onDragEnd);
  }

  // --- Project Slider Interaction ---
  const projectSlider = document.getElementById('projectSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (projectSlider && prevBtn && nextBtn) {
    // Fungsi untuk menghitung seberapa jauh slider harus bergeser (1 card + gap)
    const getScrollAmount = () => {
      const card = projectSlider.querySelector('.project-card');
      // Ambil nilai gap dari CSS, default ke 30px jika gagal
      const gap = parseInt(window.getComputedStyle(projectSlider).gap) || 30;
      return card.offsetWidth + gap;
    };

    prevBtn.addEventListener('click', () => {
      projectSlider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      projectSlider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }

  // --- Project Modal ---
  const projectModal = document.getElementById('projectModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');

  function openModal(card) {
    if (!projectModal) return;

    // Clone konten dari card-image-placeholder ke dalam modal
    const placeholder = card.querySelector('.card-image-placeholder');
    const title = card.querySelector('.project-title');

    if (placeholder) {
      modalBody.innerHTML = placeholder.innerHTML;
    }
    if (title) {
      modalTitle.textContent = title.textContent;
    }

    // Tampilkan modal
    projectModal.classList.add('is-open');
    projectModal.removeAttribute('inert'); // Aktifkan fokus & aksesibilitas
    document.body.style.overflow = 'hidden'; // Cegah scroll body di belakang
    
    // Focus Trapping: Nonaktifkan elemen di belakang modal
    const mainEl = document.querySelector('main');
    const headerEl = document.querySelector('header');
    if (mainEl) mainEl.setAttribute('inert', '');
    if (headerEl) headerEl.setAttribute('inert', '');

    // Fokus ke tombol close untuk aksesibilitas
    modalClose.focus();
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('inert', ''); // Nonaktifkan fokus & sembunyikan dari AT
    document.body.style.overflow = ''; // Kembalikan scroll body
    
    // Hapus Focus Trapping: Kembalikan akses elemen di belakang modal
    const mainEl = document.querySelector('main');
    const headerEl = document.querySelector('header');
    if (mainEl) mainEl.removeAttribute('inert');
    if (headerEl) headerEl.removeAttribute('inert');
  }

  if (projectModal) {
    // Klik area gambar pada setiap card untuk buka modal
    document.querySelectorAll('.project-card .card-image-placeholder').forEach((placeholder) => {
      // Buka via klik mouse (dan keyboard via native button)
      placeholder.addEventListener('click', () => {
        const card = placeholder.closest('.project-card');
        openModal(card);
      });
    });

    // Tutup via tombol X
    modalClose.addEventListener('click', closeModal);

    // Tutup via klik overlay
    modalOverlay.addEventListener('click', closeModal);

    // Tutup via tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // --- Matrix Rain Animation ---
  const matrixCanvases = document.querySelectorAll('.matrix-canvas');
  
  matrixCanvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = '0123456789'.split(''); 
    const fontSize = 16; /* Sedikit diperbesar sesuai permintaan */
    let columns = Math.floor(canvas.width / fontSize);
    let drops = [];
    
    // Inisialisasi posisi vertikal di 0 agar semua angka mulai jatuh serempak dari atas
    for (let x = 0; x < columns; x++) {
      drops[x] = 0; 
    }
    
    window.addEventListener('resize', () => {
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * (canvas.height / fontSize); // Saat di-resize, kita kembalikan ke acak agar tidak mengulang curtain effect
      }
    });

    function drawMatrix() {
      // Efek jejak/pudar. Opacity dikecilkan (0.08) agar jejak angkanya lebih panjang (terasa lebih banyak)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Warna angka samar
      ctx.fillStyle = '#b3c9c4'; 
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0; // Reset ke atas
        }
        drops[i] += 1.2; // Kecepatan jatuh dinaikkan lagi sesuai permintaan
      }
    }
    
    // Gunakan requestAnimationFrame untuk performa lebih baik alih-alih setInterval
    let lastTime = 0;
    const fps = 20; // setara dengan setInterval 50ms (1000/50 = 20)
    const interval = 1000 / fps;

    function renderMatrix(currentTime) {
      requestAnimationFrame(renderMatrix);
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > interval) {
        drawMatrix();
        lastTime = currentTime - (deltaTime % interval);
      }
    }
    
    requestAnimationFrame(renderMatrix);
  });
});
