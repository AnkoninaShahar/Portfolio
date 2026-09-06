document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("blueprint-canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let lastX = null;
  let lastY = null;
  const paths = [];

  // Draw continuously on mouse movement without requiring a click
  window.addEventListener("mousemove", (e) => {
    if (lastX === null) {
      lastX = e.clientX;
      lastY = e.clientY;
      return;
    }

    paths.push({
      x1: lastX,
      y1: lastY,
      x2: e.clientX,
      y2: e.clientY,
      time: 15.0,
    });

    [lastX, lastY] = [e.clientX, e.clientY];
  });

  // Reset coordinates when the mouse leaves the window to prevent drawing a straight line across the screen upon return
  document.addEventListener("mouseleave", () => {
    lastX = null;
    lastY = null;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = paths.length - 1; i >= 0; i--) {
      let p = paths[i];
      ctx.beginPath();
      ctx.moveTo(p.x1, p.y1);
      ctx.lineTo(p.x2, p.y2);
      ctx.strokeStyle = `rgb(255, 255, 255)`;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.stroke();

      p.time--;
      if (p.time <= 0) {
        paths.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  // --- Scroll Reveal Observer ---

  // 1. Select all the major structural elements on the page
  const animatedElements = document.querySelectorAll(
    ".section-title, .project-card, .blueprint-dossier, .blueprint-specs, .revision-log, .transmission-node",
  );

  // 2. Apply the starting hidden state to all of them
  animatedElements.forEach((el) => el.classList.add("reveal"));

  // 3. Configure the observer (triggers when 15% of the element enters the screen)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is on screen, trigger the animation
        entry.target.classList.add("visible");
      } else if (entry.boundingClientRect.top > 0) {
        // Element has left the screen, reset the state
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => revealObserver.observe(el));
});

// Reset to top of page when reloaded
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
