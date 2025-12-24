// Contact button - copy email to clipboard
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const notification = document.getElementById('copyNotification');

    contactBtn.addEventListener('click', function() {
        const email = this.getAttribute('data-email');

        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(function() {
            // Show notification
            notification.classList.add('show');

            // Hide notification after 2 seconds
            setTimeout(function() {
                notification.classList.remove('show');
            }, 2000);
        }).catch(function(err) {
            // Fallback for older browsers
            console.error('Failed to copy email: ', err);
            alert('Email: ' + email);
        });
    });
});
