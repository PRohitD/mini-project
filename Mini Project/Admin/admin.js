function logout() {
    //window.location.href = "/miniproject/index.html";
    window.location.href = "../index.html";
  }



// Auto-set the toggle state on page load
document.addEventListener("DOMContentLoaded", () => {
const shutdownToggle = document.getElementById("shutdownToggle");

if (shutdownToggle) {
  const isShutdown = localStorage.getItem("shutdown") === "true";
  shutdownToggle.checked = isShutdown;
}
});

function toggleShutdown() {
const shutdownToggle = document.getElementById("shutdownToggle");
const isShutdown = shutdownToggle.checked;

localStorage.setItem("shutdown", isShutdown ? "true" : "false");

alert(isShutdown
  ? "🚫 Website is now in shutdown mode. Users will not be able to log in or register."
  : "✅ Website is live again.");
}

//Room add to user page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("roomForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const number = document.getElementById("roomNumber").value.trim();
      const type = document.getElementById("roomType").value.trim();
      const floor = document.getElementById("floorNumber").value.trim
      const price = document.getElementById("roomPrice").value.trim();
      

      if (!number || !type ||!floor|| !price) {
        alert("Please fill all fields.");
        return;
      }

      const room = {
        number,
        type,
        floor,
        price,
        booked: false
      };

      // Get rooms from localStorage or initialize empty array
      const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
      rooms.push(room);
      localStorage.setItem("rooms", JSON.stringify(rooms));

      alert("✅ Room added successfully!");

      // Clear form
      form.reset();
    });
  }
});

