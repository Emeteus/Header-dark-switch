document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    const footer = document.querySelector('footer');

    // Check saved theme in localStorage on page load
    window.addEventListener('load', () => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    });

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply dark theme styles
    function applyDarkTheme() {
        body.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        footer.style.background = '#111';
        footer.style.color = '#fff';
    }

    // Apply light theme styles
    function applyLightTheme() {
        body.classList.remove('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        footer.style.background = ''; // Reset to default or specify the light theme background color
        footer.style.color = ''; // Reset to default or specify the light theme text color
    }
});
