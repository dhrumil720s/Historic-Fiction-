// Function to display a full blog post
function readMore(post) {
    if (post === 'renaissance') {
        alert('The Renaissance Era is an exciting period that shaped the world of art and culture...');
    } else if (post === 'victorian') {
        alert('Victorian Secrets uncover the mysteries behind London’s aristocracy...');
    }
}

// Form submission functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // You could also add logic to send the form data to a server here
    } else {
        alert('Please fill in all fields.');
    }
});
