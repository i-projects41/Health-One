// Placeholder for chart data
const ctx = document.getElementById('growthChart').getContext('2d');

// Sample bar chart using Chart.js for "This Year Growth"
const growthChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: '2022',
            data: [12500, 13900, 15000, 16000, 18000, 20000, 22000, 25000],
            backgroundColor: 'rgba(26, 188, 156, 0.8)',
            borderColor: 'rgba(26, 188, 156, 1)',
            borderWidth: 1
        },
        {
            label: '2023',
            data: [15000, 14900, 16500, 17000, 22000, 25000, 24000, 27000],
            backgroundColor: 'rgba(52, 152, 219, 0.8)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Sidebar Navigation Active Class Handling
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// You can add more interactivity functions for updating sections dynamically.
