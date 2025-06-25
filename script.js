// Mobile toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click (mobile only)
const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Send message on WhatsApp
function sendWhatsAppMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/9130359818?text=${fullMessage}`;

  window.open(whatsappURL, "_blank");
}
