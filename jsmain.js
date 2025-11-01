// تأثير الخروج قبل الانتقال
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && !href.startsWith('#')) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 300);
    }
  });
});

// تأثير الدخول عند تحميل الصفحة
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
