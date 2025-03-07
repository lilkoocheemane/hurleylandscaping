document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Clear previous messages
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');

    // Validate form fields
    if (!name) {
        formMessage.textContent = 'Name is required.';
        formMessage.classList.add('error');
        return;
    }

    if (!email) {
        formMessage.textContent = 'Email is required.';
        formMessage.classList.add('error');
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
    }

    if (phone && !validatePhone(phone)) {
        formMessage.textContent = 'Please enter a valid phone number (e.g., 123-456-7890).';
        formMessage.classList.add('error');
        return;
    }

    if (!message) {
        formMessage.textContent = 'Message is required.';
        formMessage.classList.add('error');
        return;
    }

    // Log data to the console (for now)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
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

// Helper function to validate phone number
function validatePhone(phone) {
    const regex = /^\d{3}-\d{3}-\d{4}$/; // Matches 123-456-7890
    return regex.test(phone);
}
