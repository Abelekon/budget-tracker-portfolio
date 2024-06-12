document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
