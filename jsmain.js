function LoadView(viewName) {
    const content = document.getElementById('page-content');
    
    const views = {
        'Customers': 'views/Customers.html',
        'MStores': '<div class="alert alert-info"><h4><i class="fas fa-warehouse"></i> شاشة المخازن</h4><p>سيتم تطويرها لاحقًا...</p></div>',
        'P_SalesInvoice': '<div class="alert alert-success"><h4><i class="fas fa-file-invoice"></i> فاتورة المبيعات</h4><p>جاري التطوير...</p></div>',
        'Employees': '<div class="alert alert-warning"><h4><i class="fas fa-user-tie"></i> الموظفين</h4><p>قريبًا...</p></div>'
    };

    if (views[viewName].startsWith('views/')) {
        fetch(views[viewName])
            .then(r => r.text())
            .then(html => content.innerHTML = html)
            .catch(() => content.innerHTML = '<div class="alert alert-danger">الشاشة غير موجودة</div>');
    } else {
        content.innerHTML = views[viewName];
    }
}