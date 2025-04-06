console.log("Rooms page loaded!");
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // force login first
  }
  