function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");
  
    // Dummy validation: replace this with real authentication
    if (username === "admin" && password === "admin123") {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Login successful!";
      // Redirect or do something
      // window.location.href = "/dashboard.html";
      window.location.href = "admin.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });


  