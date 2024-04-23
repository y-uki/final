// Modal
document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.getElementById("overlay");
    var closeButton = document.querySelector(".close");
    var okButton = document.getElementById("okBtn");
  
    function hideModal() {
      document.getElementById("rotateModal").style.display = "none";
      overlay.style.display = "none";
    }
  
    closeButton.onclick = hideModal;
    okButton.onclick = hideModal;
});