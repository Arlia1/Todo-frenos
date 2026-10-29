document.addEventListener('DOMContentLoaded', function () {
    // Current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle with accessibility
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    function openMobileMenu() {
        if (!mobileMenu || !mobileMenuBtn) return;
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', handleMenuClickOutside);
        document.addEventListener('keydown', handleMenuKeyDown);
    }

    function closeMobileMenu() {
        if (!mobileMenu || !mobileMenuBtn) return;
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', handleMenuClickOutside);
        document.removeEventListener('keydown', handleMenuKeyDown);
    }

    function handleMenuClickOutside(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            closeMobileMenu();
        }
    }

    function handleMenuKeyDown(event) {
        if (event.key === 'Escape') {
            closeMobileMenu();
            mobileMenuBtn.focus();
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Smooth scroll offset adjustment for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id], div[id="inicio"]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-brand-red-light', 'font-bold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-brand-red-light', 'font-bold');
            }
        });
    }, { passive: true });

    // Interactive WhatsApp Quote / Consultation Generator
    const quoteForm = document.getElementById('quote-form');
    const vehicleSelect = document.getElementById('quote-vehicle');
    const serviceSelect = document.getElementById('quote-service');
    const vehicleModelInput = document.getElementById('quote-model');
    const noteInput = document.getElementById('quote-notes');
    const previewText = document.getElementById('quote-preview-text');
    const sendBtn = document.getElementById('quote-send-btn');

    function buildQuoteMessage() {
        const vehicle = vehicleSelect ? vehicleSelect.value : '';
        const service = serviceSelect ? serviceSelect.value : '';
        const model = vehicleModelInput ? vehicleModelInput.value.trim() : '';
        const notes = noteInput ? noteInput.value.trim() : '';

        let msg = `Hola Todo Frenos! Quisiera consultar por un turno / presupuesto:\n`;
        if (vehicle) msg += `• Tipo de vehículo: ${vehicle}\n`;
        if (model) msg += `• Modelo / Año: ${model}\n`;
        if (service) msg += `• Servicio / Síntoma: ${service}\n`;
        if (notes) msg += `• Detalle: ${notes}\n`;
        msg += `\n¿Tienen disponibilidad para revisarlo en el taller? Gracias.`;

        return msg;
    }

    function updatePreview() {
        if (!previewText) return;
        const msg = buildQuoteMessage();
        previewText.textContent = msg;
    }

    if (vehicleSelect) vehicleSelect.addEventListener('change', updatePreview);
    if (serviceSelect) serviceSelect.addEventListener('change', updatePreview);
    if (vehicleModelInput) vehicleModelInput.addEventListener('input', updatePreview);
    if (noteInput) noteInput.addEventListener('input', updatePreview);

    if (sendBtn) {
        sendBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const msg = buildQuoteMessage();
            const phone = "5491165385555";
            const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    }

    // Initialize preview
    updatePreview();
});
