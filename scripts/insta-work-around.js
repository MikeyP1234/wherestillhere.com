document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");
  if (isInstagram && video && fallback) {
    document.body='';
    document.body.style.backgroundColor = 'black';
  } 
  
}
);
