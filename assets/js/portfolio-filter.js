/**
 * Portfolio Filter JavaScript
 * Handles filtering portfolio items by category and modal functionality
 * Includes accessibility features and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    initPortfolioFilter();
    initPortfolioModal();
    initPortfolioAccessibility();
    initPortfolioAnimations();
});

/**
 * Initialize Portfolio Filter Functionality
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        // Add animation class
                        setTimeout(() => {
                            item.classList.add('show');
                        }, 50);
                    } else {
                        item.classList.remove('show');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300); // Match transition duration
                    }
                });
            });
        });
        
        // Set all items visible initially
        portfolioItems.forEach(item => {
            item.classList.add('show');
        });
    }
}

/**
 * Initialize Portfolio Modal Functionality
 */
function initPortfolioModal() {
    const modal = document.getElementById('portfolio-modal');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    const modalPrev = modal ? modal.querySelector('.modal-prev') : null;
    const modalNext = modal ? modal.querySelector('.modal-next') : null;
    const portfolioBtns = document.querySelectorAll('.portfolio-btn');
    
    // Portfolio project data
    const portfolioData = [
        {
            id: 1,
            title: 'E-commerce Website',
            category: 'Web Development',
            client: 'Fashion Brand',
            date: 'January 2023',
            description: 'A fully responsive e-commerce website for a fashion brand with product catalog, shopping cart, and secure checkout functionality. Built with modern web technologies to ensure optimal performance and user experience.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
            image: 'assets/images/portfolio-1.svg',
            link: '#'
        },
        {
            id: 2,
            title: 'Banking App UI Design',
            category: 'UI/UX Design',
            client: 'Financial Tech Company',
            date: 'March 2023',
            description: 'A modern and intuitive user interface design for a mobile banking application. The design focuses on simplicity, security, and ease of use, with a clean and professional aesthetic that inspires trust.',
            technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
            image: 'assets/images/portfolio-2.svg',
            link: '#'
        },
        {
            id: 3,
            title: 'Fitness Tracker App',
            category: 'Mobile Development',
            client: 'Health & Wellness Startup',
            date: 'April 2023',
            description: 'A comprehensive fitness tracking mobile application that allows users to monitor workouts, set goals, track progress, and connect with friends. Features include workout plans, nutrition tracking, and integration with wearable devices.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Native APIs'],
            image: 'assets/images/portfolio-3.svg',
            link: '#'
        },
        {
            id: 4,
            title: 'Coffee Shop Branding',
            category: 'Brand Identity',
            client: 'Artisan Coffee Shop',
            date: 'February 2023',
            description: 'Complete brand identity design for an artisan coffee shop, including logo, color palette, typography, packaging, and marketing materials. The design captures the warm, inviting atmosphere of the shop and its commitment to quality.',
            technologies: ['Illustrator', 'Photoshop', 'InDesign'],
            image: 'assets/images/portfolio-4.svg',
            link: '#'
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            category: 'Web Development',
            client: 'Property Management Company',
            date: 'May 2023',
            description: 'A comprehensive real estate platform that allows users to search, filter, and view property listings. Features include interactive maps, virtual tours, appointment scheduling, and a secure messaging system for agents and clients.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Express', 'PostgreSQL'],
            image: 'assets/images/portfolio-5.svg',
            link: '#'
        },
        {
            id: 6,
            title: 'Analytics Dashboard',
            category: 'UI/UX Design',
            client: 'Data Analytics Company',
            date: 'June 2023',
            description: 'A clean and intuitive dashboard design for a data analytics platform. The design presents complex data in a visually appealing and easy-to-understand format, with customizable widgets, interactive charts, and real-time updates.',
            technologies: ['Figma', 'Sketch', 'Illustrator'],
            image: 'assets/images/portfolio-6.svg',
            link: '#'
        },
        {
            id: 7,
            title: 'Food Delivery App',
            category: 'Mobile Development',
            client: 'Restaurant Chain',
            date: 'July 2023',
            description: 'A user-friendly food delivery application that allows customers to browse menus, place orders, track delivery, and make payments. The app includes features like favorite restaurants, order history, and special promotions.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
            image: 'assets/images/portfolio-7.svg',
            link: '#'
        },
        {
            id: 8,
            title: 'Tech Startup Branding',
            category: 'Brand Identity',
            client: 'AI Technology Startup',
            date: 'August 2023',
            description: 'Complete brand identity for a technology startup specializing in artificial intelligence. The design reflects the company\'s innovative approach and cutting-edge technology, with a modern and dynamic visual language.',
            technologies: ['Illustrator', 'Photoshop', 'After Effects'],
            image: 'assets/images/portfolio-8.svg',
            link: '#'
        },
        {
            id: 9,
            title: 'Learning Platform',
            category: 'Web Development',
            client: 'Educational Institution',
            date: 'September 2023',
            description: 'An interactive online learning platform with course management, video lectures, quizzes, and progress tracking. The platform supports multiple user roles (students, instructors, administrators) and includes features like discussion forums and certificate generation.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
            image: 'assets/images/portfolio-9.svg',
            link: '#'
        }
    ];
    
    let currentProjectId = 0;
    
    if (modal && modalBody && portfolioBtns.length > 0) {
        // Open modal when portfolio item is clicked
        portfolioBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = parseInt(this.getAttribute('data-id'));
                openModal(projectId);
            });
        });
        
        // Close modal when close button is clicked
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }
        
        // Close modal when clicking outside of modal content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal when ESC key is pressed
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        // Navigate to previous project
        if (modalPrev) {
            modalPrev.addEventListener('click', function() {
                navigateProject(-1);
            });
        }
        
        // Navigate to next project
        if (modalNext) {
            modalNext.addEventListener('click', function() {
                navigateProject(1);
            });
        }
        
        // Function to open modal with project details
        function openModal(projectId) {
            const project = portfolioData.find(item => item.id === projectId);
            
            if (project) {
                currentProjectId = projectId;
                
                // Create modal content
                const modalContent = `
                    <div class="modal-header">
                        <h2>${project.title}</h2>
                        <p class="modal-category">${project.category}</p>
                    </div>
                    <div class="modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="modal-details">
                        <div class="modal-info">
                            <p><strong>Client:</strong> ${project.client}</p>
                            <p><strong>Date:</strong> ${project.date}</p>
                            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        </div>
                        <div class="modal-description">
                            <h3>Project Description</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                        </div>
                    </div>
                `;
                
                // Set modal content
                modalBody.innerHTML = modalContent;
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        }
        
        // Function to close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        // Function to navigate between projects
        function navigateProject(direction) {
            const currentIndex = portfolioData.findIndex(item => item.id === currentProjectId);
            let newIndex = currentIndex + direction;
            
            // Handle wrap-around
            if (newIndex < 0) {
                newIndex = portfolioData.length - 1;
            } else if (newIndex >= portfolioData.length) {
                newIndex = 0;
            }
            
            openModal(portfolioData[newIndex].id);
        }
    }
}

/**
 * Initialize Portfolio Accessibility Features
 */
function initPortfolioAccessibility() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioBtns = document.querySelectorAll('.portfolio-btn');
    const modal = document.getElementById('portfolio-modal');
    const modalPrev = modal ? modal.querySelector('.modal-prev') : null;
    const modalNext = modal ? modal.querySelector('.modal-next') : null;
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    
    // Add appropriate ARIA attributes to filter buttons
    if (filterButtons.length > 0) {
        const filterContainer = document.querySelector('.portfolio-filter');
        if (filterContainer) {
            filterContainer.setAttribute('role', 'tablist');
            filterContainer.setAttribute('aria-label', 'Portfolio categories');
        }
        
        filterButtons.forEach(button => {
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-selected', button.classList.contains('active') ? 'true' : 'false');
            
            // Update ARIA attributes when filter changes
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.setAttribute('aria-selected', 'false'));
                this.setAttribute('aria-selected', 'true');
                
                // Announce filter change for screen readers
                const filterValue = this.getAttribute('data-filter');
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.classList.add('sr-only');
                announcement.textContent = `Filtered by ${filterValue === 'all' ? 'all categories' : filterValue}`;
                document.body.appendChild(announcement);
                
                setTimeout(() => {
                    document.body.removeChild(announcement);
                }, 3000);
            });
        });
    }
    
    // Add appropriate ARIA attributes to portfolio items
    if (portfolioItems.length > 0) {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (portfolioGrid) {
            portfolioGrid.setAttribute('role', 'region');
            portfolioGrid.setAttribute('aria-label', 'Portfolio projects');
        }
        
        portfolioItems.forEach((item, index) => {
            item.setAttribute('role', 'article');
            item.setAttribute('aria-label', `Portfolio project ${index + 1}`);
        });
    }
    
    // Add keyboard navigation for portfolio modal
    if (modal) {
        // Make modal focusable
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Project details');
        
        // Add keyboard navigation for modal buttons
        if (modalPrev) {
            modalPrev.setAttribute('aria-label', 'Previous project');
            modalPrev.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
        
        if (modalNext) {
            modalNext.setAttribute('aria-label', 'Next project');
            modalNext.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
        
        if (modalClose) {
            modalClose.setAttribute('aria-label', 'Close modal');
            modalClose.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
        
        // Trap focus within modal when open
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab' && modal.classList.contains('active')) {
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                // If shift+tab and on first element, move to last element
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
                // If tab and on last element, move to first element
                else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }
    
    // Make portfolio buttons accessible via keyboard
    if (portfolioBtns.length > 0) {
        portfolioBtns.forEach(btn => {
            btn.setAttribute('role', 'button');
            btn.setAttribute('tabindex', '0');
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }
}

/**
 * Initialize Portfolio Animations
 */
function initPortfolioAnimations() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Add entrance animations for portfolio items
    if (portfolioItems.length > 0) {
        // Add staggered animation on page load
        portfolioItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        
        // Add animation when filtering
        if (filterButtons.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    
                    portfolioItems.forEach((item, index) => {
                        const category = item.getAttribute('data-category');
                        
                        // Reset styles for animation
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        
                        if (filterValue === 'all' || category === filterValue) {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50 * index);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                        }
                    });
                });
            });
        }
    }
    
    // Add animation for modal
    const modal = document.getElementById('portfolio-modal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        
        if (modalContent) {
            // Add entrance animation for modal
            modal.addEventListener('transitionend', function() {
                if (modal.classList.contains('active')) {
                    modalContent.style.opacity = '1';
                    modalContent.style.transform = 'translateY(0)';
                }
            });
            
            // Set initial state for animation
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modalContent.style.opacity = '0';
                    modalContent.style.transform = 'translateY(-20px)';
                }
            });
            
            // Reset animation state when modal is closed
            modal.addEventListener('transitionstart', function() {
                if (!modal.classList.contains('active')) {
                    modalContent.style.opacity = '0';
                    modalContent.style.transform = 'translateY(-20px)';
                }
            });
            
            // Set initial styles
            modalContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'translateY(-20px)';
        }
    }
}