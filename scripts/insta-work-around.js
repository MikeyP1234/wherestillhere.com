window.addEventListener("load", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");

  if (isInstagram) {
    // Clear all content
    document.documentElement.innerHTML = `
      <body style="background-color: black; margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; color: white; font-family: sans-serif; text-align: center;">
        <div>
          <p>This site works better in Safari.</p>
          <a href="https://wherestillhere.com" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline; font-size: 20px;">
            👉 Tap here to open in Safari
          </a>
        </div>
      </body>
    `;
  }
});
