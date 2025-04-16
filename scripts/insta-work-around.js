document.addEventListener("DOMContentLoaded", function () {
  const isInstagram = navigator.userAgent.toLowerCase().includes("instagram");

  if (isInstagram) {
    // Clear body content safely
    document.body.innerHTML = '';
    
    // Set background to black
    document.body.style.backgroundColor = 'black';

    // Optional: add a message or link to open in Safari
    const msg = document.createElement('div');
    msg.style.color = 'white';
    msg.style.fontSize = '20px';
    msg.style.textAlign = 'center';
    msg.style.padding = '20px';
    msg.innerHTML = `<a href="https://yourwebsite.com" style="color: white; text-decoration: underline;" target="_blank">Tap here to open in Safari</a>`;

    document.body.appendChild(msg);
  }
});
