document.getElementById('open').addEventListener('click', () => {
    document.getElementById('mobile').classList.remove('mobile-nav-links-closed');
    document.getElementById('mobile').classList.add('mobile-nav-links-open');
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('mobile').classList.remove('mobile-nav-links-open');
    document.getElementById('mobile').classList.add('mobile-nav-links-closed');
});
