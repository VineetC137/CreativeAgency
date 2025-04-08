/**
 * Theme Toggle JavaScript
 * Handles switching between light and dark themes
 */

document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
});

/**
 * Initialize Theme Toggle Functionality
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        // Check for saved theme preference or respect OS preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const storedTheme = localStorage.getItem('theme');
        
        // Set initial theme based on stored preference or OS preference
        if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        
        // Toggle theme when button is clicked
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme attribute
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Store preference
            localStorage.setItem('theme', newTheme);
            
            // Announce theme change for screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.classList.add('sr-only');
            announcement.textContent = `Theme changed to ${newTheme} mode`;
            document.body.appendChild(announcement);
            
            // Remove announcement after it's read
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 3000);
        });
        
        // Listen for OS theme preference changes
        prefersDarkScheme.addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        });
    }
}