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
