document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenuBtn && mobileMenu && hamburger) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'subject', 'message'];
            
            requiredFields.forEach(field => {
                const input = contactForm.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    input.style.borderColor = 'var(--danger)';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailInput = contactForm.querySelector('[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.style.borderColor = 'var(--danger)';
                alert('Please enter a valid email address.');
                return;
            } else {
                emailInput.style.borderColor = '';
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <div style="background: rgba(0, 184, 148, 0.2); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--success); margin-top: 1rem;">
                    <p style="color: var(--success);">Thank you for your message! I will get back to you soon.</p>
                </div>
            `;
            
            const existingSuccess = contactForm.querySelector('.form-success');
            if (existingSuccess) {
                existingSuccess.remove();
            }
            
            contactForm.appendChild(successMessage);
            contactForm.reset();
            
            // Scroll to show success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailInput.style.borderColor = 'var(--danger)';
                alert('Please enter a valid email address.');
                return;
            } else {
                emailInput.style.borderColor = '';
            }
            
            // Here you would typically send the email to a server
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Course card hover effect
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.course-card-inner').style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.course-card-inner').style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to hero image on scroll
    const heroImage = document.querySelector('.hero-img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            heroImage.style.transform = `perspective(1000px) rotateY(${-10 + scrollPosition * 0.05}deg)`;
        });
    }
    
    // Add glow effect to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(74, 107, 255, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});