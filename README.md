<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Custom Claymorphism Styles -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <header class="portfolio-header">
        <nav class="clay-sidebar" aria-label="Sidebar Navigation">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#home" class="nav-link active" id="nav-home">
                        <i class="fa-solid fa-house nav-icon" aria-hidden="true"></i>
                        <span class="nav-text">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link" id="nav-about">
                        <i class="fa-solid fa-user nav-icon" aria-hidden="true"></i>
                        <span class="nav-text">About</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#project" class="nav-link" id="nav-project">
                        <i class="fa-solid fa-folder nav-icon" aria-hidden="true"></i>
                        <span class="nav-text">Project</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link" id="nav-contact">
                        <i class="fa-solid fa-share-nodes nav-icon" aria-hidden="true"></i>
                        <span class="nav-text">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="home-section">
            <!-- Matrix Rain Canvas -->
            <canvas class="matrix-canvas left"></canvas>
            <canvas class="matrix-canvas right"></canvas>

            <!-- Background Layer -->
            <div class="home-layer bg-layer"></div>

            <!-- Character Layer -->
            <div class="home-layer char-layer">
                <img src="assets/image/char-center.png" alt="Lulu Aurola Virginia" class="home-character">
            </div>

            <!-- Title Layer -->
            <div class="home-layer title-layer">
                <h1 class="portfolio-name">Lulu Aurola Virginia</h1>
            </div>
        </section>
        <section id="about" class="about-section portfolio-section">
            <div class="about-container">
                <div class="about-left">
                    <img src="assets/image/lanyard.png" alt="Lanyard" class="lanyard-img">
                </div>
                <div class="about-right">
                    <h2 class="about-heading">Hi, I'm Lulu Aurola Virginia</h2>
                    <p class="about-intro">
                        A passionate Web Developer and IT Educator dedicated to crafting clean, minimal, and
                        user-centered digital experiences. I love bridging the gap between complex technical problems
                        and elegant, accessible solutions.
                    </p>

                    <div class="about-grid">
                        <!-- Experience -->
                        <div class="about-block">
                            <h3 class="block-title">EXPERIENCE</h3>
                            <ul class="block-list">
                                <li>Dosen IT</li>
                                <li>Lead Developer</li>
                                <li>Senior Web Developer</li>
                            </ul>
                        </div>

                        <!-- Education -->
                        <div class="about-block">
                            <h3 class="block-title">EDUCATION</h3>
                            <ul class="block-list">
                                <li>S1 - Universitas Pelita Harapan</li>
                                <li>S2 - Universitas Indonesia</li>
                                <li>S3 - Asia Pacific University</li>
                            </ul>
                        </div>

                        <!-- Contact -->
                        <div class="about-block">
                            <h3 class="block-title">CONTACT</h3>
                            <ul class="block-list">
                                <li>hello@lulu.id</li>
                                <li>+62 812 3456 7890</li>
                                <li>Jakarta, Indonesia</li>
                            </ul>
                        </div>

                        <!-- Tools -->
                        <div class="about-block">
                            <h3 class="block-title">TOOLS</h3>
                            <ul class="block-list tools-list">
                                <li>Figma &amp; UI/UX</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Premiere Pro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="project" class="project-section portfolio-section">
            <div class="project-container">
                <div class="project-header">
                    <h2 class="project-heading">PROJECTS</h2>
                </div>

                <div class="slider-wrapper">
                    <button type="button" class="slider-btn prev-btn" id="prevBtn" aria-label="Previous">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>

                    <div class="project-slider" id="projectSlider">
                        <!-- Card 01 -->
                        <div class="project-card">
                            <div class="card-number">01</div>
                            <button type="button" class="card-image-placeholder" aria-label="View Project 1">
                                <i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>
                            </button>
                            <h3 class="project-title">Project 1</h3>
                        </div>
                        <!-- Card 02 -->
                        <div class="project-card">
                            <div class="card-number">02</div>
                            <button type="button" class="card-image-placeholder" aria-label="View Project 2">
                                <i class="fa-solid fa-tablet-screen-button" aria-hidden="true"></i>
                            </button>
                            <h3 class="project-title">Project 2</h3>
                        </div>
                        <!-- Card 03 -->
                        <div class="project-card">
                            <div class="card-number">03</div>
                            <button type="button" class="card-image-placeholder" aria-label="View Project 3">
                                <i class="fa-solid fa-laptop" aria-hidden="true"></i>
                            </button>
                            <h3 class="project-title">Project 3</h3>
                        </div>
                        <!-- Card 04 -->
                        <div class="project-card">
                            <div class="card-number">04</div>
                            <button type="button" class="card-image-placeholder" aria-label="View Project 4">
                                <i class="fa-solid fa-desktop" aria-hidden="true"></i>
                            </button>
                            <h3 class="project-title">Project 4</h3>
                        </div>
                        <!-- Card 05 -->
                        <div class="project-card">
                            <div class="card-number">05</div>
                            <button type="button" class="card-image-placeholder" aria-label="View Project 5">
                                <i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>
                            </button>
                            <h3 class="project-title">Project 5</h3>
                        </div>
                    </div>

                    <button type="button" class="slider-btn next-btn" id="nextBtn" aria-label="Next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
        <section id="contact" class="portfolio-section contact-section">
            <div class="contact-container">
                <div class="envelope-wrapper">
                    <!-- Bagian Belakang Amplop -->
                    <div class="envelope-back"></div>

                    <!-- Surat (Naik saat di-hover) -->
                    <div class="letter">
                        <h2 class="letter-title">Let's Work Together!</h2>
                        <p class="letter-desc">
                            Have a project in mind, need a developer, or just want to discuss some cool ideas? I'm always open to new opportunities.
                        </p>
                        <a href="mailto:hello@lulu.id" class="letter-btn">Send Me an Email</a>
                    </div>

                    <!-- Bagian Depan Amplop (Pocket) -->
                    <div class="envelope-front-wrapper">
                        <div class="envelope-front"></div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Project Modal -->
    <div id="projectModal" class="project-modal" inert role="dialog" aria-modal="true" aria-label="Project detail">
        <div class="modal-overlay" id="modalOverlay"></div>
        <!-- Tombol X di luar kartu modal, pojok kanan atas layar -->
        <button type="button" class="modal-close" id="modalClose" aria-label="Close modal">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="modal-content">
            <div class="modal-body" id="modalBody"></div>
            <p class="modal-title" id="modalTitle"></p>
        </div>
    </div>

    <footer></footer>

    <!-- Interactive Navigation Script -->
    <script src="assets/js/script.js"></script>
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/6281234567890"
       target="_blank"
       rel="noopener noreferrer"
       class="whatsapp-fab"
       aria-label="Chat via WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
</body>

</html>
