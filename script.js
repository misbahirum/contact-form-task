function validateForm() {
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMessage = document.getElementById("success-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Show the success message
  successMessage.style.display = "block";

  // Optional: Hide it after 4 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 4000);

  // Clear the form
  document.querySelector(".contact-form").reset();

  return false; // prevent page refresh
}
