
document.querySelector('.about-section').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease-in-out';
});

document.querySelector('.about-section').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
