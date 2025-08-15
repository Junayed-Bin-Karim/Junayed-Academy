document.addEventListener('DOMContentLoaded', function() {
    // Course curriculum data
    const curriculum = [
        {
            week: 1,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Introduction to Web Development", "HTML Structure", "Tags"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Intro to CSS", "Inline & Internal Styling"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Intro to JS", "Console", "Variables"]
                }
            ],
            accessCode: "WEEK1CODE"
        },
        {
            week: 2,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Text Formatting", "Headings", "Paragraphs", "Links"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Selectors", "Color Styling"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Data Types", "Operators"]
                }
            ],
            accessCode: "WEEK2CODE"
        },
        {
            week: 3,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Images", "Lists (ul, ol)", "Tables"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Box Model (margin, padding, border)"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Functions", "Events"]
                }
            ],
            accessCode: "WEEK3CODE"
        },
        {
            week: 4,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Forms (input, textarea, select)"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Backgrounds", "Borders"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["If-Else Conditions"]
                }
            ],
            accessCode: "WEEK4CODE"
        },
        {
            week: 5,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Semantic HTML (header, nav, main, footer)"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Display", "Position"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Loops (for, while)"]
                }
            ],
            accessCode: "WEEK5CODE"
        },
        {
            week: 6,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML5 Multimedia (audio, video)"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Flexbox Basics"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Arrays", "Objects"]
                }
            ],
            accessCode: "WEEK6CODE"
        },
        {
            week: 7,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Meta Tags", "Favicons"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Flexbox Advanced"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["DOM Selection", "Manipulation"]
                }
            ],
            accessCode: "WEEK7CODE"
        },
        {
            week: 8,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Structure for Projects"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Grid Basics"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["DOM Events", "Event Listeners"]
                }
            ],
            accessCode: "WEEK8CODE"
        },
        {
            week: 9,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Accessibility Basics"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Grid Advanced"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Form Validation with JS"]
                }
            ],
            accessCode: "WEEK9CODE"
        },
        {
            week: 10,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Mini Project 1: HTML Resume"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Mini Project 1: Styled Resume"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Mini Project 1: Interactive Resume"]
                }
            ],
            accessCode: "WEEK10CODE"
        },
        {
            week: 11,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Tables Advanced"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Styling Tables"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Timers", "Simple Animation with JS"]
                }
            ],
            accessCode: "WEEK11CODE"
        },
        {
            week: 12,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Best Practices"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Transitions"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["JS Functions Advanced (arrow functions, scope)"]
                }
            ],
            accessCode: "WEEK12CODE"
        },
        {
            week: 13,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Project Setup"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Project Setup"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["JS Loops Advanced", "Array Methods"]
                }
            ],
            accessCode: "WEEK13CODE"
        },
        {
            week: 14,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML for Landing Page"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Responsive Design (Media Queries)"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["DOM Project: Image Slider"]
                }
            ],
            accessCode: "WEEK14CODE"
        },
        {
            week: 15,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Forms with Validation Attributes"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Pseudo-classes", "Pseudo-elements"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["String", "Number Methods"]
                }
            ],
            accessCode: "WEEK15CODE"
        },
        {
            week: 16,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML for Portfolio Page"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Shadows", "Gradients"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Local Storage Basics"]
                }
            ],
            accessCode: "WEEK16CODE"
        },
        {
            week: 17,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Project: Portfolio Structure"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Project: Portfolio Styling"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Portfolio JS Interactivity"]
                }
            ],
            accessCode: "WEEK17CODE"
        },
        {
            week: 18,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML for Blog Page"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Typography", "Layout"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["JSON Basics", "Data Handling (Local Data)"]
                }
            ],
            accessCode: "WEEK18CODE"
        },
        {
            week: 19,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["HTML Review", "Advanced Tags"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["CSS Review", "Advanced Styling"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["JS Error Handling", "Debugging"]
                }
            ],
            accessCode: "WEEK19CODE"
        },
        {
            week: 20,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Git & GitHub (HTML Files Commit)"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Git & GitHub (CSS Files Commit)"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Git & GitHub (JS Files Commit)"]
                }
            ],
            accessCode: "WEEK20CODE"
        },
        {
            week: 21,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Hosting Basics: Preparing HTML for Netlify"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Hosting Basics: Preparing CSS for Netlify"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Hosting Basics: Deploying Site to Netlify"]
                }
            ],
            accessCode: "WEEK21CODE"
        },
        {
            week: 22,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Final Project HTML Structure"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Final Project CSS Styling"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Final Project JS Interactivity"]
                }
            ],
            accessCode: "WEEK22CODE"
        },
        {
            week: 23,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Final Project Work Day"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Final Project Work Day"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Final Project Debugging"]
                }
            ],
            accessCode: "WEEK23CODE"
        },
        {
            week: 24,
            days: [
                {
                    day: "Day 1 (HTML)",
                    topics: ["Final Project Completion"]
                },
                {
                    day: "Day 2 (CSS)",
                    topics: ["Project Presentation"]
                },
                {
                    day: "Day 3 (JavaScript)",
                    topics: ["Course Wrap-Up", "Career Tips"]
                }
            ],
            accessCode: "WEEK24CODE"
        }
    ];

    // DOM Elements
    const weekContainer = document.querySelector('.week-container');
    const accessModal = document.getElementById('accessModal');
    const closeModal = document.querySelector('.close-modal');
    const accessCodeInput = document.getElementById('accessCodeInput');
    const submitCodeBtn = document.getElementById('submitCode');
    const errorMessage = document.getElementById('errorMessage');

    // Current week being accessed (stored when clicking on a locked week)
    let currentWeekIndex = null;

    // Generate curriculum
    function generateCurriculum() {
        weekContainer.innerHTML = '';
        
        curriculum.forEach((weekData, index) => {
            const isUnlocked = localStorage.getItem(`week_${weekData.week}_unlocked`) === 'true';
            
            const weekCard = document.createElement('div');
            weekCard.className = 'week-card';
            
            const weekHeader = document.createElement('div');
            weekHeader.className = 'week-header';
            weekHeader.innerHTML = `<h3>Week ${weekData.week}</h3>`;
            
            const weekContent = document.createElement('div');
            weekContent.className = `week-content ${isUnlocked ? 'unlocked' : ''}`;
            
            if (isUnlocked) {
                weekData.days.forEach(day => {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'class-day';
                    
                    const dayTitle = document.createElement('h4');
                    dayTitle.textContent = day.day;
                    
                    const topicsList = document.createElement('ul');
                    day.topics.forEach(topic => {
                        const topicItem = document.createElement('li');
                        topicItem.textContent = topic;
                        topicsList.appendChild(topicItem);
                    });
                    
                    dayElement.appendChild(dayTitle);
                    dayElement.appendChild(topicsList);
                    weekContent.appendChild(dayElement);
                });
            } else {
                const accessForm = document.createElement('div');
                accessForm.className = 'access-form';
                accessForm.innerHTML = `
                    <p>This content is locked. Please enter the access code to view Week ${weekData.week} materials.</p>
                    <button class="unlock-btn" data-week="${index}">Unlock Week ${weekData.week}</button>
                `;
                weekContent.appendChild(accessForm);
            }
            
            weekCard.appendChild(weekHeader);
            weekCard.appendChild(weekContent);
            weekContainer.appendChild(weekCard);
            
            // Add click event to week header to toggle content
            weekHeader.addEventListener('click', function() {
                weekContent.style.display = weekContent.style.display === 'block' ? 'none' : 'block';
            });
        });
        
        // Add event listeners to unlock buttons
        document.querySelectorAll('.unlock-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentWeekIndex = parseInt(this.getAttribute('data-week'));
                accessModal.style.display = 'flex';
            });
        });
    }

    // Check access code
    function checkAccessCode() {
        const enteredCode = accessCodeInput.value.trim();
        const correctCode = curriculum[currentWeekIndex].accessCode;
        
        if (enteredCode === correctCode) {
            // Correct code - unlock the week
            localStorage.setItem(`week_${curriculum[currentWeekIndex].week}_unlocked`, 'true');
            accessModal.style.display = 'none';
            accessCodeInput.value = '';
            errorMessage.style.display = 'none';
            generateCurriculum();
        } else {
            // Incorrect code - show error
            errorMessage.textContent = 'Incorrect access code. Please try again.';
            errorMessage.style.display = 'block';
        }
    }

    // Event Listeners
    closeModal.addEventListener('click', function() {
        accessModal.style.display = 'none';
        accessCodeInput.value = '';
        errorMessage.style.display = 'none';
    });

    submitCodeBtn.addEventListener('click', checkAccessCode);

    accessCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAccessCode();
        }
    });

    window.addEventListener('click', function(e) {
        if (e.target === accessModal) {
            accessModal.style.display = 'none';
            accessCodeInput.value = '';
            errorMessage.style.display = 'none';
        }
    });

    // Initialize the page
    generateCurriculum();
});









// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const body = document.body;

mobileMenuBtn.addEventListener('click', function() {
    // Toggle mobile menu and overlay
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    // Toggle hamburger animation
    this.classList.toggle('active');
});

mobileMenuOverlay.addEventListener('click', function() {
    // Close mobile menu when overlay is clicked
    mobileMenu.classList.remove('active');
    this.classList.remove('active');
    body.classList.remove('no-scroll');
    mobileMenuBtn.classList.remove('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        mobileMenuBtn.classList.remove('active');
    });
});




const form = document.getElementById('demoClassForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  if (name && email && phone) {
    const submissions = JSON.parse(localStorage.getItem('demoClassSubmissions') || '[]');
    submissions.push({ name, email, phone, date: new Date().toISOString() });
    localStorage.setItem('demoClassSubmissions', JSON.stringify(submissions));

    alert('Thank you for booking a demo class!');

    form.reset();
  } else {
    alert('Please fill all fields');
  }
});










