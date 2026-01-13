function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'light mode';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = 'dark mode';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-btn');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btn.textContent = 'light mode';
    } else {
        btn.textContent = 'dark mode';
    }
});