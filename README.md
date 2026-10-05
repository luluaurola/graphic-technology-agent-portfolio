# 🌟 Interactive Developer Portfolio

Welcome to my personal developer portfolio! This project is a highly interactive, modern, and playful web portfolio built entirely from scratch using **Vanilla Web Technologies** (HTML, CSS, JavaScript). No bulky frameworks—just pure, optimized frontend code.

The design philosophy revolves around **Claymorphism** and fluid interactions, ensuring that every hover, scroll, and drag feels satisfying and alive.

## ✨ Key Features

- 💧 **Claymorphism UI:** Soft, extruded, 3D-like aesthetic with carefully crafted multiple inner and drop shadows.
- 🌧️ **Matrix Rain Animation:** A dynamic, randomized digital rain effect running on the HTML5 Canvas in the background.
- 🪪 **Draggable Physics Lanyard:** An interactive ID card lanyard in the About section that you can grab, pull, and toss around using custom JavaScript physics.
- ✉️ **Interactive Contact Envelope:** A delightful CSS-driven animation where a letter dynamically pops out of an envelope when you interact with it.
- 📱 **Fluid Responsiveness:** Uses modern CSS features like `clamp()` and CSS Variables to ensure seamless scaling from ultra-wide desktops down to small mobile screens.
- 👆 **Snap-Scrolling Project Carousel:** A smooth horizontal project slider leveraging native CSS `scroll-snap` for a native-app feel without third-party plugins.
- 👀 **Eye-Tracking Character:** The main character illustration subtly follows your cursor movements.

## 🛠️ Technology Stack

This project is intentionally built without heavy frameworks to maximize performance and demonstrate core frontend mastery:
- **HTML5:** Semantic structuring and accessibility best practices (including Modal Focus Trapping).
- **CSS3:** Custom properties (Variables), advanced transitions, flexbox layouts, media queries, and `clamp()` for fluid typography.
- **JavaScript (Vanilla):** DOM manipulation, HTML5 Canvas rendering (Matrix effect), custom drag-and-drop mechanics, and event listeners.

## 📁 Project Structure

```text
├── index.html           # Main HTML structure
├── assets/
│   ├── css/
│   │   └── style.css    # Core styles, animations, and responsive layout
│   ├── js/
│   │   └── script.js    # Interactive logic (Matrix, Lanyard physics, Modals)
│   └── image/           # Illustration assets (Character, Lanyard, Icons)
```

## 🚀 How to Run Locally

Since this is a purely static website, you don't need any complex build tools (no Webpack, no npm installations required)!

1. **Clone or Download** this repository.
2. Navigate to the project folder.
3. Simply double-click and open `index.html` in your favorite modern web browser.
   - *(Optional)* If you prefer using a local development server, you can run `npx serve` or use the **Live Server** extension in VS Code.

## 🎨 Design & Interaction Highlights

- **Performance First:** The Matrix Rain utilizes `requestAnimationFrame` for buttery-smooth rendering, and the matrix columns adjust dynamically when the window is resized.
- **No-Javascript Animations:** The Envelope relies purely on CSS `transform: translateY` and custom `cubic-bezier` transition curves for its bouncy, realistic reveal.
- **Touch Friendly:** The draggable lanyard and carousel are fully optimized for mobile touch events (`touchstart`, `touchmove`, `touchend`).

---
*Built with ❤️ and a passion for interactive frontend development.*
