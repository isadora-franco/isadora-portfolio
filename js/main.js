function marcarNavAtiva() {
    const pagina = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.navigation a, .nav-mobile a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pagina) {
            link.classList.add('ativo');
        }
    });
}

function iniciarHamburger() {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-mobile');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const aberto = btn.classList.toggle('aberto');
        menu.style.display = aberto ? 'flex' : 'none';
        btn.setAttribute('aria-expanded', aberto);
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('aberto');
            menu.style.display = 'none';
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            btn.classList.remove('aberto');
            menu.style.display = 'none';
        }
    });
}


function iniciarAnimacoesScroll() {
    const elementos = document.querySelectorAll('.fade-in');

    if (!elementos.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elementos.forEach(el => observer.observe(el));
}


document.addEventListener('DOMContentLoaded', () => {
    marcarNavAtiva();
    iniciarHamburger();
    iniciarAnimacoesScroll();
});
