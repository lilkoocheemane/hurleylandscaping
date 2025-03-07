document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Clear previous messages
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');

    // Validate form fields
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.classList.add('error');
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
    }

    // Log data to the console (for now)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);

    // Simulate sending data to a server
    formMessage.textContent = 'Sending your request...';
    formMessage.classList.add('success');

    setTimeout(() => {
        formMessage.textContent = 'Thank you for your request! We will contact you soon.';
        formMessage.classList.add('success');

        // Clear the form
        document.getElementById('contactForm').reset();
    }, 2000); // Simulate a 2-second delay
});

// Helper function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
