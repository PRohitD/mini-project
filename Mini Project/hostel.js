document.addEventListener("DOMContentLoaded", function () {
    function bookRoom() {
        alert("Your booking request has been received. We will contact you soon!");
    }
     
    window.bookRoom = bookRoom;
});

 //Only allow access if logged in
//  const isLoggedIn = localStorage.getItem("isLoggedIn");
//  const blocker = document.getElementById("blocker");

//  if (isLoggedIn === "true") {
//    // Remove blocker if user is logged in
//    blocker.style.display = "none";
//  }




  
