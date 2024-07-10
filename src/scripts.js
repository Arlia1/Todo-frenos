document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const offset = target.offsetTop - 64;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu-container');
    menu.classList.toggle('hidden');

    if (!menu.classList.contains('hidden')) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
}

function handleClickOutside(event) {
    const menu = document.getElementById('menu-container');
    const button = document.querySelector('button[onclick="toggleMenu()"]');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.add('hidden');
        document.removeEventListener('click', handleClickOutside);
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const mediaQuery = window.matchMedia('(max-width: 950px)');
    const elements = document.querySelectorAll('.w-1\\/4');

    function handleMediaQuery(mediaQuery) {
        if (mediaQuery.matches) {
            elements.forEach(element => {
                element.classList.remove('w-1/4');
                element.classList.add('w-1/2');
            });
        } else if (!mediaQuery.matches) {
            elements.forEach(element => {
                element.classList.remove('w-1/2');
                element.classList.add('w-1/4');
            });
        }
    }

    handleMediaQuery(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQuery);
});