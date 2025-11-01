function goToPage(page) {
    // أنيميشن خروج
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s';

    setTimeout(() => {
        // الانتقال للصفحة
        window.location.href = page;
    }, 300);
}

// عند تحميل أي صفحة
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s';
});