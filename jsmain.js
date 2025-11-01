function loadPage(url) {
    const container = document.getElementById('page-container');
    const dashboard = document.getElementById('dashboard');

    // إخفاء الداشبورد
    dashboard.classList.add('animate__animated', 'animate__fadeOut');
    
    setTimeout(() => {
        dashboard.classList.add('d-none');
        container.classList.remove('d-none');
        container.innerHTML = '<div class="text-center mt-5"><div class="spinner-border text-primary" style="width:3rem;height:3rem;"></div></div>';

        fetch(url)
            .then(r => r.text())
            .then(html => {
                container.innerHTML = html;
                container.classList.add('page-transition');
            })
            .catch(() => {
                container.innerHTML = '<div class="alert alert-danger">فشل تحميل الصفحة</div>';
            });
    }, 500);
}

// رجوع للداشبورد
function goBack() {
    const container = document.getElementById('page-container');
    const dashboard = document.getElementById('dashboard');

    container.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        container.classList.add('d-none');
        container.classList.remove('page-transition');
        dashboard.classList.remove('d-none');
        dashboard.classList.add('animate__animated', 'animate__fadeIn');
    }, 500);
}