// Smooth scroll to Contact section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Star rating functionality
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating .star');
    const feedback = document.getElementById('review-feedback');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            clearStars();
            this.classList.add('selected');
            let previous = this.previousElementSibling;

            // Add the "selected" class to all previous stars
            while (previous) {
                previous.classList.add('selected');
                previous = previous.previousElementSibling;
            }

            // Update feedback text
            const rating = this.dataset.rating;
            feedback.innerText = `Thank you! You rated us ${rating} star${rating > 1 ? 's' : ''}.`;
        });
    });

    // Clear all selected stars
    function clearStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    // Modal functionality for the Contact Us button
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.querySelector('.contact-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Show the modal when the Contact Us button is clicked
    contactBtn.addEventListener('click', function () {
        contactModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        contactModal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});
