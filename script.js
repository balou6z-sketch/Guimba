console.log("script charger !");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth'});

    });
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + window.innerHeight * 0.8;
    sections.forEach(section => {
        if (scrollY > section.offsetTop) {
            section.classList.add('visible');
        }
    })
})
