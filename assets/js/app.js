const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

// Проверяем сохраненное состояние в localStorage при загрузке страницы
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});

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

function applyDarkTheme() {
    body.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

function applyLightTheme() {
    body.classList.remove('dark');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
}
