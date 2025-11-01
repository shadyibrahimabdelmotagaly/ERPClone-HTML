// أنيميشن عند الخروج
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// أنيميشن عند الدخول
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s';
});