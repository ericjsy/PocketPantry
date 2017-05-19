var overlayElement = null;
var modalWindowElement = null;
window.addEventListener('load', initApp, false);

function initApp() {
  setTimeout(function() { window.scrollTo(0, 1); }, 10);
  document.getElementById("popUpBtn").addEventListener("click", function() {
    showPopUpMessage('<div id="calendar_container"><table id="calendar"></table></div><p id="calendar_instructions">Tap the first and last dates to shop for!</p>');
  }, false);
}
//show the modal overlay and popup window
function showPopUpMessage(msg) {
  overlayElement = document.createElement("div");
  overlayElement.className = 'modalOverlay';
  modalWindowElement = document.createElement("div");
  modalWindowElement.className = 'modalWindow';
  modalWindowElement.innerHTML = msg;
  document.body.appendChild(overlayElement);
  document.body.appendChild(modalWindowElement);
  setTimeout(function() {
    modalWindowElement.style.opacity = 1;
    overlayElement.style.opacity = 0.8;
    overlayElement.addEventListener("click", hidePopUpMessage, false);
  }, 300);
  currentMonth();
}
//hide the modal overlay and popup window
function hidePopUpMessage() {
  modalWindowElement.style.opacity = 0;
  overlayElement.style.opacity = 0;
  overlayElement.removeEventListener("click", hidePopUpMessage, false);
  setTimeout(function() {
    document.body.removeChild(overlayElement);
    document.body.removeChild(modalWindowElement);
  }, 400);
}