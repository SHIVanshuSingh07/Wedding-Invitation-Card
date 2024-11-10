const cover = document.querySelector('.cover');
const pulley = document.querySelector('.pulley');
const backButton = document.querySelector('.back-button');

// Create floating hearts
function createHearts() {
    const hearts = ['❤️', '🌺', '✨'];
    const container = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

// Initialize animations
createHearts();

// Handle pulley interaction
pulley.addEventListener('click', () => {
    cover.classList.add('open');
    backButton.classList.add('visible');
});

// Handle back button
backButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    cover.classList.remove('open');
    backButton.classList.remove('visible');
});

// GSAP animations for smooth text reveals
gsap.from('.names', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5
});

gsap.from('.details', {
    opacity: 0,
    y: 30,
    duration: 1.5,
    delay: 1
});

