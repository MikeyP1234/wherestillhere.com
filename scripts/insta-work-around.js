document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");
  const video = document.getElementById("heroVideo");
  const fallback = document.getElementById("videoFallback");
  const container = document.querySelector(".video-container");

  if (isInstagram && video && fallback) {
    video.style.display = "none";
    fallback.style.display = "block";
  }
});
