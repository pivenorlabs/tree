(function() {
    'use strict';

    // Theme toggle
    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        const body = document.body;

        // Check saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }

        // Toggle handler
        toggle.addEventListener('click', function() {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            }
            // Re-render feather icons after theme change
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        });
    }

    // Set copyright year
    function setCopyright() {
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = '© ' + new Date().getFullYear() + ' Pivenor Labs';
        }
    }

    // Tap feedback
    function initTapFeedback() {
        const elements = document.querySelectorAll('.link-card, .social-card, .service-tag');

        elements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.opacity = '0.9';
            }, { passive: true });

            el.addEventListener('touchend', function() {
                this.style.opacity = '';
            }, { passive: true });
        });
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initThemeToggle();
            setCopyright();
            initTapFeedback();
        });
    } else {
        initThemeToggle();
        setCopyright();
        initTapFeedback();
    }

})();
