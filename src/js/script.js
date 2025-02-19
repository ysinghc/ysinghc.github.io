document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.querySelector('.starfield');
    const linksContainer = document.querySelector('.links-container');
    const container = document.querySelector('.container');
    const textContainer = document.querySelector('.text-container');

    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        starfield.appendChild(star);
    }

    setTimeout(() => {
        linksContainer.style.opacity = '1';

        container.animate([
            { transform: `translateY(0px)` },
            { transform: `translateY(-${(container.offsetHeight - textContainer.offsetHeight) / 4}px)` }
        ], {
            duration: 500,
            iterations: 1,
            easing: "ease-in-out",
            fill: "forwards"
        });
    }, 2000);
});