"use strict";

document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let navbarCollapse = document.getElementById('navbarNavAltMarkup');
    let bsCollapse = new bootstrap.Collapse(navbarCollapse);

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            bsCollapse.hide();
        });
    });
});

function scrollWithOffset(event, offset) {
    event.preventDefault();
    let linkElement = event.target.closest('[href^="#"]');

    if (!linkElement) {
        console.error('No link element with a hash found in the event target or its ancestors');
        return;
    }

    let targetId = linkElement.hash.substring(1);
    let target = document.getElementById(targetId);

    if (!target) {
        console.error(`Element with ID "${targetId}" not found`);
        return;
    }

    let newPosition = target.getBoundingClientRect().top + window.scrollY + offset * 16;
    window.scrollTo({ top: newPosition, behavior: 'smooth' });
}

function attachScrollListeners() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (event) => scrollWithOffset(event, -5));
    });
}

document.addEventListener('DOMContentLoaded', attachScrollListeners);
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("navbar-toggler").addEventListener("click", function () {
    let navbarCollapse = document.getElementById("navbarNavAltMarkup");
    if (navbarCollapse.classList.contains("d-none")) {
        navbarCollapse.classList.remove("d-none");
        navbarCollapse.classList.add("d-flex");
    } else {
        navbarCollapse.classList.add("d-none");
        navbarCollapse.classList.remove("d-flex");
    }
});
