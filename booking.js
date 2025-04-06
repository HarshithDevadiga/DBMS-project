document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Optionally you can add form validation here
  
    // Redirect to confirmation page
    window.location.href = `confirm.html`;
  });
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // force login first
  }
  
  