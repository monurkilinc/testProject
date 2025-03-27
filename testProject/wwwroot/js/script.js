document.addEventListener('DOMContentLoaded', function () {
    // ---------- Navigation Toggle for Mobile ----------
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    function toggleMenu() {
        mainNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    }

    // Add click event to hamburger menu
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }

    // ---------- Smooth Scrolling for Navigation Links ----------
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Close the mobile menu if it's open
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smooth scroll to the section
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---------- Project Filtering ----------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects(category) {
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter projects
            const category = this.dataset.category;
            filterProjects(category);
        });
    });

    // ---------- Lightbox / Modal for Project Images ----------
    const projectImages = document.querySelectorAll('.project-image');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');

    // Open modal when clicking on an image
    projectImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;

            // Get the figcaption text
            const figcaption = this.closest('figure').querySelector('figcaption');
            modalCaption.textContent = figcaption ? figcaption.textContent : '';
        });
    });

    // Close modal when clicking on the close button
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside the image
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // ---------- Form Validation ----------
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    // Validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Real-time validation for name
    nameInput.addEventListener('input', function () {
        if (this.value.trim() === '') {
            nameError.textContent = 'Name is required';
        } else if (this.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
        } else {
            nameError.textContent = '';
        }
    });

    // Real-time validation for email
    emailInput.addEventListener('input', function () {
        if (this.value.trim() === '') {
            emailError.textContent = 'Email is required';
        } else if (!isValidEmail(this.value)) {
            emailError.textContent = 'Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    // Real-time validation for message
    messageInput.addEventListener('input', function () {
        if (this.value.trim() === '') {
            messageError.textContent = 'Message is required';
        } else if (this.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
        } else {
            messageError.textContent = '';
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;

        if (nameInput.value.trim() === '' || nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name is required and must be at least 2 characters';
            isValid = false;
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            emailError.textContent = 'A valid email address is required';
            isValid = false;
        }

        if (messageInput.value.trim() === '' || messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message is required and must be at least 10 characters';
            isValid = false;
        }

        // If form is valid, display success message and reset form
        if (isValid) {
            formSuccess.textContent = 'Thank you for your message! We will get back to you soon.';
            contactForm.reset();

            // Clear success message after 5 seconds
            setTimeout(function () {
                formSuccess.textContent = '';
            }, 5000);
        }
    });
});