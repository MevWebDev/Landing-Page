document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    
    if (logo) {
        logo.addEventListener("mouseover", mainAlert);
    }

    function mainAlert() {
        alert("IS THE TOP G!");
    }
});