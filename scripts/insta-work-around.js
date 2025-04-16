document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");
  const video = document.getElementById("heroVideo");
  const fallback = document.getElementById("videoFallback");
  const viddiv = document.querySelector(".video-container");

  if (isInstagram && video && fallback) {
    video.style.display = "none";
    fallback.style.display = "block";
    viddiv.style.height = window.innerHeight * 0.874 + "px";
  } 
  
}
);
