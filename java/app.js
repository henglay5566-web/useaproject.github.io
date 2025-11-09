const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Revenue ($)',
        data: [150, 550, 400, 250, 300, 180, 50], // Example data points
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

// Configuration options for the chart
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sale This Week'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Revenue ($)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '$';
                    }
                }
            }
        }
    }
};

// Create the chart instance
window.onload = function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, config);
};
