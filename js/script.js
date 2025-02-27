document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.querySelector('.links-container');
    const container = document.querySelector('.container');
    const textContainer = document.querySelector('.text-container');
    const solDaysSpan = document.getElementById('sol-days');

    function calculateSolDays(birthDate) {
        const birthDateTime = new Date(birthDate).getTime();
        const now = new Date().getTime();
        const differenceMs = now - birthDateTime;
        const solDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24.62));
        const solActual = Math.floor(solDifference * (73 / 75));
        return solActual;
    }

    solDaysSpan.textContent = calculateSolDays('2005-09-29');

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
