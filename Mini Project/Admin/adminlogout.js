// ----------------------
  // LOGOUT LOGIC (admin.html)
  // ----------------------

  const logoutBtn = document.querySelector("button[onclick='logout()']");
  if (logoutBtn) {
    // Check login state
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "../index.html"; // Not logged in
    }
  }


// Logout function for admin page
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../index.html";
}

// Show/hide password toggle (for login page)
function togglePassword() {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}



  