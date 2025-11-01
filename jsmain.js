/* js/main.js - ERPClone GPT TEST 8 */

/* انتقال الصفحة مع Fade-out */
function goToPage(page) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

/* Go back helper for inner pages */
function goBack() {
    goToPage('../index.html');
}

/* عند التحميل */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    attachIconInteractions();
});

/* وصل الحركات للأيقونات: click, keyboard (enter/space), tilt على الماوس */
function attachIconInteractions() {
    const cards = document.querySelectorAll('.icon-card');

    cards.forEach(card => {
        // Navigation من data-page
        const page = card.getAttribute('data-page');

        // Click ينتقل
        card.addEventListener('click', () => {
            if (page) goToPage(page);
        });

        // Keyboard accessibility: Enter or Space
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (page) goToPage(page);
            }
        });

        // Simple tilt effect on mousemove inside the card
        const inner = card.querySelector('.icon-inner') || card;

        card.addEventListener('mousemove', (ev) => {
            const rect = card.getBoundingClientRect();
            const x = ev.clientX - rect.left; // x داخل العنصر
            const y = ev.clientY - rect.top;  // y داخل العنصر
            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const maxTilt = 12; // درجات الميل القصوى
            const rotY = ((x - midX) / midX) * maxTilt; // يمين/يسار
            const rotX = ((midY - y) / midY) * maxTilt; // أعلى/أسفل

            // تطبيق الميل على البطاقة (3D)
            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`;
            inner.style.transform = `translateZ(20px)`;
            // إضافة خفيف لتوهج الظل
            card.style.boxShadow = `0 28px 60px rgba(0,0,0,0.28)`;
        });

        // إرجاع للوضع الطبيعي عند الخروج
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            inner.style.transform = '';
            card.style.boxShadow = '';
        });

        // لدعم اللمس: ننفذ effect بسيط عند اللمس
        card.addEventListener('touchstart', () => {
            card.classList.add('touch-active');
            setTimeout(() => card.classList.remove('touch-active'), 250);
        });
    });
}
