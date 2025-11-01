function goToPage(page) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

function goBack() {
    goToPage('../index.html');
}
