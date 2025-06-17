//mobile toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//sendMessage on Whatsapp
function sendWhatsAppMessage(event) {
  event.preventDefault(); // prevent form from reloading the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/9130359818?text=${fullMessage}`;

  window.open(whatsappURL, "_blank"); // open WhatsApp in new tab
}
