const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove(entry.target.dataset.animationOut);
            entry.target.classList.add('animate__animated', entry.target.dataset.animationIn);
        } else {
            entry.target.classList.remove(entry.target.dataset.animationIn);
            entry.target.classList.add('animate__animated', entry.target.dataset.animationOut);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px"
});

document.querySelectorAll('.scroll-animate').forEach((element) => {
    observer.observe(element);
});

function typeWriter() {
    const rotatingTextElement = document.getElementById('rotating-text');
    rotatingTextElement.textContent = titles[currentIndex];
    rotatingTextElement.style.animation = 'none';
    rotatingTextElement.offsetHeight; // Trigger reflow
    rotatingTextElement.style.animation = `typing ${titles[currentIndex].length / 10}s steps(${titles[currentIndex].length}, end), blink-caret .75s step-end infinite`;
    currentIndex = (currentIndex + 1) % titles.length;
    setTimeout(() => {
        rotatingTextElement.style.animation = 'none';
        rotatingTextElement.offsetHeight; // Trigger reflow
        rotatingTextElement.style.animation = null;
    }, (titles[currentIndex].length / 10 + 0.5) * 1000); // Adjust delay based on title length and pause
}

setInterval(typeWriter, 4000); // Change text every 4 seconds
