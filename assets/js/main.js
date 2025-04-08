/**
 * Main JavaScript file for Creative Agency Website
 * Handles general functionality like navigation, scroll effects, etc.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollToTop();
    initTestimonialSlider();
    initFaqAccordion();
    initAnimations();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        // Scroll to top when button is clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    if (slider && dotsContainer && prevBtn && nextBtn) {
        const testimonials = slider.querySelectorAll('.testimonial-item');
        let currentIndex = 0;

        // Create dots
        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('testimonial-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.testimonial-dot');

        // Show only the current testimonial
        function updateSlider() {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = index === currentIndex ? 'block' : 'none';
            });

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSlider();
        }

        function goToPrevSlide() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateSlider();
        }

        // Event listeners for next and previous buttons
        nextBtn.addEventListener('click', goToNextSlide);
        prevBtn.addEventListener('click', goToPrevSlide);

        // Auto slide every 5 seconds
        let interval = setInterval(goToNextSlide, 5000);

        // Pause auto slide on hover
        slider.addEventListener('mouseenter', () => clearInterval(interval));
        slider.addEventListener('mouseleave', () => {
            clearInterval(interval);
            interval = setInterval(goToNextSlide, 5000);
        });

        // Initialize slider
        updateSlider();
    }
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

/**
 * Animations on Scroll
 */
function initAnimations() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length > 0) {
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (barTop < windowHeight * 0.8) {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                }
            });
        };
        
        // Initial check
        animateSkillBars();
        
        // Check on scroll
        window.addEventListener('scroll', animateSkillBars);
    }
    
    // Fade in elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const fadeIn = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('visible');
                }
            });
        };
        
        // Initial check
        fadeIn();
        
        // Check on scroll
        window.addEventListener('scroll', fadeIn);
    }
}