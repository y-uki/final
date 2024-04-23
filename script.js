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


  
  


  
  
  
  function checkPassword() {
    var password = document.getElementById("password").value;
    // Replace "your_password" with your desired password
    if (password === "55609") {
        document.getElementById("protected").style.display = "none";
        document.getElementById("content").style.display = "block";
  
        // Open the link in a new tab
        var link = "https://medium.com/@yukic/revamping-post-order-ratings-experience-for-ubereats-new-verticals-orders-008550c3af44";
        window.open(link, "_blank");
    } else {
        alert("Incorrect password. Please try again.");
    }
  }