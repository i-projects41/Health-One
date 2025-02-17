document.addEventListener('DOMContentLoaded', function() {
    // Button functionality
    document.querySelectorAll('.explore-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.id;
            alert(`You clicked on ${id}`);
            // Implement the specific action or redirect here if needed
        });
    });

    // Example interactive feature for "Coming Soon"
    const comingSoon = document.getElementById('coming-soon');
    
    function fadeInComingSoon() {
        comingSoon.style.opacity = 0;
        comingSoon.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            comingSoon.style.opacity = 1;
        }, 100);
    }
    
    fadeInComingSoon();
});
document.getElementById('mode-switch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
