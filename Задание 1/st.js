document.addEventListener("click", function(event) {
    var popup = document.getElementById("popup");
  
    if (!radio.contains(event.target) && !popup.contains(event.target)) {
      popup.style.display = "none";
    }
  });