document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function autoChangeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(autoChangeSlide, 3000); // Change image every 3 seconds
});
function handleBookNowClick() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (isLoggedIn === "true") {
      window.location.href = "rooms.html"; // user is logged in
    } else {
      window.location.href = "login.html"; // redirect to login
    }
  }
  