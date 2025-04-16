var str = navigator.userAgent;
var i = str.indexOf("Instagram");
if (i != -1) {
  document.body.innerHTML='';
  window.stop();
}
