document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");
  const video = document.getElementById("heroVideo");
  const fallback = document.getElementById("videoFallback");
  const container = document.querySelector(".video-container");

  if (isInstagram && video && fallback) {
    video.style.display = "none";
    fallback.style.display = "block";
  }

  // Lock height to initial viewport height
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  if (container) {
    container.style.height = `calc(var(--vh, 1vh) * 100)`;
  }
});
