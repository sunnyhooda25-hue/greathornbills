// ========== HEADER SCROLL EFFECT ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== SERVICE CATEGORY TABS ==========
const svcTabs = document.querySelectorAll('.svc-tab');
const svcPanels = document.querySelectorAll('.svc-panel');

svcTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all
        svcTabs.forEach(t => t.classList.remove('active'));
        svcPanels.forEach(p => p.classList.remove('active'));

        // Add active to clicked
        tab.classList.add('active');
        const targetId = 'svc-' + tab.getAttribute('data-svc');
        document.getElementById(targetId).classList.add('active');
    });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('section > .container, .hero-content, .cta-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Skip if this is a modal trigger or has href="#" only
        if (this.classList.contains('open-modal') || this.getAttribute('href') === '#') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== CHART BAR ANIMATION ==========
const chartSection = document.querySelector('.dash-chart');
if (chartSection) {
    const bars = chartSection.querySelectorAll('.bar');

    // Initially set bars to 0 height
    bars.forEach(bar => {
        bar.style.height = '0%';
    });

    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Restore original heights with animation
                const heights = [40, 65, 45, 80, 55, 90, 70, 95];
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.height = heights[index] + '%';
                    }, index * 100);
                });
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    chartObserver.observe(chartSection);
}

// ========== PHONE HOVER PARALLAX ==========
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const phones = document.querySelectorAll('.phone-mockup');
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        phones.forEach((phone, index) => {
            const factor = (index + 1) * 0.3;
            phone.style.transform = phone.style.transform.replace(/translate\([^)]+\)/, '') +
                ` translate(${x * factor}px, ${y * factor}px)`;
        });
    });
}

// ===== CONTACT MODAL =====
const modal = document.getElementById('contactModal');
const modalCloseBtn = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const openModalBtns = document.querySelectorAll('.open-modal');

// Open modal
openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Form submission → Google Sheets + Calendly redirect
// REPLACE THIS URL with your Google Apps Script Web App URL after setup
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwoPUpRI7v7NiGFF7AwH3ISARdu1n9LhKeh8_V0O_LxgeJLaAiZvB8BZL3-f9QRzRlh/exec';

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };

    // Show success immediately (don't make user wait)
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';

    // Send to Google Sheets in background
    if (GOOGLE_SHEET_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).catch(err => console.log('Sheet submit error:', err));
    }

    // Add Calendly booking button dynamically
    if (!document.getElementById('calendlyBtn')) {
        const calendlyBtn = document.createElement('a');
        calendlyBtn.id = 'calendlyBtn';
        calendlyBtn.href = 'https://calendly.com/admin-greathornbills/30min';
        calendlyBtn.target = '_blank';
        calendlyBtn.className = 'calendly-btn';
        calendlyBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Book a Meeting';
        formSuccess.appendChild(calendlyBtn);
    }
});

console.log('Great Hornbills website loaded successfully!');
