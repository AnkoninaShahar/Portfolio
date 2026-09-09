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

  function addPoint(x, y) {
    if (lastX === null) {
      lastX = x;
      lastY = y;
      return;
    }

    paths.push({
      x1: lastX,
      y1: lastY,
      x2: x,
      y2: y,
      time: 15.0,
    });

    lastX = x;
    lastY = y;
  }

  /* Mouse Drawing Events */
  window.addEventListener("mousemove", (e) => {
    addPoint(e.clientX, e.clientY);
  });

  document.addEventListener("mouseleave", () => {
    lastX = null;
    lastY = null;
  });

  /* Touch / Mobile Finger Drawing Events */
  window.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length > 0) {
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length > 0) {
        addPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true },
  );

  window.addEventListener("touchend", () => {
    lastX = null;
    lastY = null;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = paths.length - 1; i >= 0; i--) {
      const p = paths[i];
      ctx.beginPath();
      ctx.moveTo(p.x1, p.y1);
      ctx.lineTo(p.x2, p.y2);
      ctx.strokeStyle = "rgb(255, 255, 255)";
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

  /* IntersectionObserver Scroll Reveal */
  const animatedElements = document.querySelectorAll(
    ".section-title, .project-card, .blueprint-dossier, .blueprint-specs, .revision-log, .transmission-node, .contributions-container",
  );

  animatedElements.forEach((el) => el.classList.add("reveal"));

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => revealObserver.observe(el));
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
