document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create an object to represent the form data
        const formData = {
            name: name,
            email: email,
            message: message,
        };

        try {
            // Send a POST request using Axios with async/await
            const response = await axios.post('https://port-backend-w6h2.onrender.com/addContact', formData);
            responseDiv.innerHTML = "Message sent successfully!";
            contactForm.reset(); // Clear the form
        } catch (error) {
            responseDiv.innerHTML = "Error: " + error.response.data;
        }
    });
});
