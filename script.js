document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // For demonstration purposes, log the form data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can add further processing here, like sending the form data to a server
        

    });
});

window.addEventListener('scroll', function() {
    var experienceDiv = document.getElementById('experience');
    var position = experienceDiv.getBoundingClientRect();
  
    // Check if the top of the experience section is within the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        setTimeout(function() {
            experienceDiv.style.display = 'block'; // Reveal the experience section
        }, 1000);
      console.log("block");
    } else {
      experienceDiv.style.display = 'none'; // Hide the experience section if it's not in the viewport
      console.log("none");
    }
  });