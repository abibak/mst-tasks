const header = document.querySelector('.header');
const links = document.querySelectorAll('.nav-link');
const btnOpen = document.querySelector('.header-open-btn');
const btnClose = document.querySelector('.btn-close-header');

subscribeEvents();

function subscribeEvents() {
    window.addEventListener('scroll', toggleClass);
    window.addEventListener('resize', toggleClass);

    links.forEach(link => link.addEventListener('click', navigationScroll));
    btnOpen.addEventListener('click', showHeader);
    btnClose.addEventListener('click', closeHeader);
}

function navigationScroll(e) {
    e.preventDefault();

    const attr = e.target.getAttribute('data-link-id');
    const elementScroll = document.getElementById(attr);

    if (attr && elementScroll) {
        elementScroll.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

function toggleClass(e) {
    e.preventDefault();

    if (window.innerWidth > 1400) {
        if (header.classList.contains('header-close')) {
            header.classList.remove('header-close');
        } else if (header.classList.contains('header-show')) {
            header.classList.remove('header-show');
        }

        if (window.scrollY >= header.getBoundingClientRect().height) {
            header.classList.add('header-fixed');
            return;
        }
    }

    header.classList.remove('header-fixed');
}

function showHeader(e) {
    if (header.classList.contains('header-close')) {
        header.classList.remove('header-close');
    }

    header.classList.add('header-show');
}

function closeHeader(e) {
    if (header.classList.contains('header-show')) {
        header.classList.remove('header-show');
    }

    header.classList.add('header-close');
}