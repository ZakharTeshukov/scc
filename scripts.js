// Scroll animation for smooth transitions
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    });
});

// Dynamic navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(to right, #6a74f7, #8f94fb)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #4e54c8, #8f94fb)';
    }
});

// Animating the sign-up button when hovering
const signUpButton = document.querySelector('.cta-button');
signUpButton.addEventListener('mouseover', () => {
    signUpButton.style.transform = 'scale(1.1)';
});

signUpButton.addEventListener('mouseout', () => {
    signUpButton.style.transform = 'scale(1)';
});
