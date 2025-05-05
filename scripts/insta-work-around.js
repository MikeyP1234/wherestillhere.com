window.addEventListener("load", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");

  if (isInstagram) {
    // Clear all content
    document.documentElement.innerHTML = `
      <body style="background-color: black; margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; color: white; font-family: system; text-align: center;">
    <div>
      <p>I refuse to accommodate this web browser </p>
      <a href="https://wherestillhere.com" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: none; font-size: 16px; 
        background-color:white; border-radius: 12px; padding:5px 5px;">
        Hold Here.
      </a>
      <p>Or just go to wherestillhere.com</p>
    </div>
  </body>
    `;
  }
});
