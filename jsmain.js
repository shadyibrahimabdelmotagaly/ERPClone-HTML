function LoadView(viewName) {
    const content = document.getElementById('page-content');
    
    // محاكاة تحميل الشاشة
    const views = {
        'Customers': 'views/Customers.html',
        'MStores': '<h3>شاشة المخازن</h3><p>سيتم تطويرها لاحقًا...</p>',
        'P_SalesInvoice': '<h3>فاتورة المبيعات</h3><p>جاري التطوير...</p>',
        'Employees': '<h3>الموظفين</h3><p>قريبًا...</p>'
    };

    if (views[viewName].startsWith('views/')) {
        fetch(views[viewName])
            .then(r => r.text())
            .then(html => content.innerHTML = html)
            .catch(() => content.innerHTML = '<h3>الشاشة غير موجودة</h3>');
    } else {
        content.innerHTML = views[viewName];
    }
}

// إظهار/إخفاء القوائم الفرعية
document.querySelectorAll('.sidebar > ul > li > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('submenu')) {
            e.preventDefault();
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        }
    });
});