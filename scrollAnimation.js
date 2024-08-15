document.addEventListener('scroll', function() {
    const title = document.getElementById('title');
    const menu = document.getElementById('menu');
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight * 0.75;

    if (scrollPosition > triggerPoint) {
        title.style.transform = 'translateY(-100vh)';
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(0)';
        menu.style.height = '100vh';
    } else {
        title.style.transform = 'translateY(0)';
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(100vh)';
        menu.style.height = '0'; 
    }
});
