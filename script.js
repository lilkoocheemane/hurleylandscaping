document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Log data to the console (for now)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);

    // Show a confirmation message
    alert('Thank you for your request! We will contact you soon.');
});