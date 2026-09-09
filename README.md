# Architectural Blueprint Portfolio
**AUTHOR . . . . . . .** Shahar Ankonina                                                                                
**DESCRIPTION. . .** An interactive, blueprint-themed software engineering portfolio built from scratch using vanilla web standards and an HTML5 interactive canvas

---
## About
This repository contains the source code for my personal software engineering portfolio website, designed around an architectural engineering blueprint theme. Built entirely with vanilla HTML, CSS, and JavaScript, the interface mimics technical drafting schematics—complete with a custom blueprint stamp, layered pencil-stroke borders, and a coordinate drafting frame.

The portfolio features a custom HTML5 canvas cursor engine that draws live drafting lines as the user moves across the page, a responsive dossier grid layout, and a mechanical scroll-reveal observer. The entire site was engineered without external web frameworks or CSS libraries to prioritize fast load times, zero bundle overhead, and direct manipulation of native browser APIs.

---
## Features
- *Interactive Blueprint Canvas:* Custom HTML5 canvas engine rendering active drafting lines in real-time following cursor trajectory.
- *Precision Blueprint Stamp & Dossier:* CSS Grid-based technical specification headers and sketched dossier cards for project highlights.
- *Mechanical Scroll Reveal:* High-performance `IntersectionObserver` implementation driving smooth reveal transitions on scroll.
- *Hand-Sketched Aesthetic:* Multilayered CSS borders, rotated vector frames, and custom typography (`Patrick Hand`, `Share Tech`) creating a authentic draft-table look.
- *Zero-Dependency Stack:* Engineered 100% with native web standards—no React, Tailwind, or bundled runtime dependencies.

### Future Planned Additions
- Blueprint mode toggle (Traditional Blue vs. Dark Graphite Grid)
- Dynamic GitHub API integration to fetch live repository commit statistics
- Interactive logic gate simulation embedded in the technical skills section

---
## Tech Stack
- *Programming Languages:* JavaScript (ES6+), HTML5, CSS3
- *Libraries & Frameworks:* None — zero dependencies
- *Fonts & Icons:* Devicon, Google Fonts (`Patrick Hand`, `Share Tech`)
- *Tools & Platforms:* Git/GitHub, VS Code, GitHub Pages

### Why Vanilla Web Stack (not React / Frameworks)
Building the portfolio using raw browser standards ensures direct control over render loops and performance:
- *Performance:* Zero bundle size, zero virtual DOM overhead, and instantaneous page load times.
- *Direct Canvas Integration:* Direct access to the native HTML5 `<canvas>` 2D rendering context without framework lifecycle hooks.
- *First-Principles Demonstration:* Showcases mastery over fundamental CSS Grid/Flexbox layouts, DOM manipulation, keyframe physics, and event loop listeners.

---
## Usage
- This is a static web application with no build steps or package installations required.
- Clone the repository and open `index.html` in any modern web browser.
- Alternatively, launch a local server (e.g., VS Code Live Server) to preview changes in real time.

### Build & Run
1. Clone the repository:
```bash
git clone [https://github.com/AnkoninaShahar/AnkoninaShahar.github.io.git](https://github.com/AnkoninaShahar/AnkoninaShahar.github.io.git)
cd AnkoninaShahar.github.io
```

2. Open in browser (macOS/Linux/Windows):
```bash
# macOS
open index.html

# Windows (CMD)
start index.html
```
### Preview
<img width="1905" height="955" alt="image" src="https://github.com/user-attachments/assets/945380a5-1c4b-463d-8f6a-270eec16d412" />
