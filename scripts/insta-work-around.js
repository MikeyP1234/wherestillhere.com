document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");
  const video = document.getElementById("heroVideo");
  const fallback = document.getElementById("videoFallback");
  const container = document.querySelector(".video-container");

  if (isInstagram && video && fallback) {
    video.style.display = "none";
    fallback.style.display = "block";
    const viddiv=document.querySelector(".video-container");
    viddiv.style.height = window.innerHeight * .874;
  }
  console.log(document.querySelector(".video-container"));

  
});
