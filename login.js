document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      // Save login status in localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to rooms page
      window.location.href = "rooms.html";
    } else {
      alert("Please enter both email and password!");
    }
  });
});
   