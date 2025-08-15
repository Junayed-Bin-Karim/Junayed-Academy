document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Week Accordion Functionality
    const weekAccordion = document.getElementById('weekAccordion');
    
    













// Machine Learning Course Curriculum Data
const courseData = {
    weeks: [
        {
            weekNumber: 1,
            title: "Week 1: Python and Data Preprocessing",
            accessCode: "PYTHON1",
            days: [
                {
                    dayNumber: "Day 1",
                    title: "Python Basics",
                    topics: [
                        "Data types",
                        "Variables",
                        "Basic operations",
                        "Input/output"
                    ]
                },
                {
                    dayNumber: "Day 2",
                    title: "Loops and Functions",
                    topics: [
                        "For and while loops",
                        "Function definition",
                        "Parameters and return values",
                        "Scope of variables"
                    ]
                },
                {
                    dayNumber: "Day 3",
                    title: "Introduction to Libraries",
                    topics: [
                        "NumPy basics",
                        "Pandas basics",
                        "Importing libraries",
                        "Basic data structures"
                    ]
                }
            ]
        },
        {
            weekNumber: 2,
            title: "Week 2: Data Handling and Cleaning",
            accessCode: "DATA2",
            days: [
                {
                    dayNumber: "Day 4",
                    title: "NumPy Arrays and Operations",
                    topics: [
                        "Creating arrays",
                        "Array operations",
                        "Indexing and slicing",
                        "Broadcasting"
                    ]
                },
                {
                    dayNumber: "Day 5",
                    title: "Pandas DataFrame",
                    topics: [
                        "Data loading",
                        "Data exploration",
                        "Basic DataFrame operations",
                        "Descriptive statistics"
                    ]
                },
                {
                    dayNumber: "Day 6",
                    title: "Data Cleaning",
                    topics: [
                        "Handling missing values",
                        "Data imputation",
                        "Outlier detection",
                        "Data normalization"
                    ]
                }
            ]
        },
        {
            weekNumber: 3,
            title: "Week 3: Data Visualization and EDA",
            accessCode: "VIZ3",
            days: [
                {
                    dayNumber: "Day 7",
                    title: "Data Visualization Basics",
                    topics: [
                        "Matplotlib basics",
                        "Seaborn basics",
                        "Creating plots",
                        "Customizing visualizations"
                    ]
                },
                {
                    dayNumber: "Day 8",
                    title: "Exploratory Data Analysis",
                    topics: [
                        "Understanding distributions",
                        "Correlation analysis",
                        "Feature relationships",
                        "Statistical summaries"
                    ]
                },
                {
                    dayNumber: "Day 9",
                    title: "Practical EDA Project",
                    topics: [
                        "Dataset exploration",
                        "Visualization techniques",
                        "Insight generation",
                        "Findings presentation"
                    ]
                }
            ]
        },
        {
            weekNumber: 4,
            title: "Week 4: Introduction to Machine Learning",
            accessCode: "ML4",
            days: [
                {
                    dayNumber: "Day 10",
                    title: "ML Overview",
                    topics: [
                        "Supervised vs unsupervised",
                        "Real-world applications",
                        "ML workflow",
                        "Basic terminology"
                    ]
                },
                {
                    dayNumber: "Day 11",
                    title: "Data Splitting",
                    topics: [
                        "Train-test split",
                        "Cross-validation",
                        "Stratified sampling",
                        "Implementation"
                    ]
                },
                {
                    dayNumber: "Day 12",
                    title: "Linear Regression",
                    topics: [
                        "Theory and math",
                        "Assumptions",
                        "Scikit-learn implementation",
                        "Interpretation"
                    ]
                }
            ]
        },
        {
            weekNumber: 5,
            title: "Week 5: Linear Regression Continued",
            accessCode: "LR5",
            days: [
                {
                    dayNumber: "Day 13",
                    title: "Linear Regression Implementation",
                    topics: [
                        "Feature engineering",
                        "Model training",
                        "Prediction",
                        "Result analysis"
                    ]
                },
                {
                    dayNumber: "Day 14",
                    title: "Evaluation Metrics",
                    topics: [
                        "Mean Squared Error (MSE)",
                        "Root Mean Squared Error (RMSE)",
                        "R-squared",
                        "When to use which"
                    ]
                },
                {
                    dayNumber: "Day 15",
                    title: "Project: House Price Prediction",
                    topics: [
                        "Dataset preparation",
                        "Model building",
                        "Evaluation",
                        "Result interpretation"
                    ]
                }
            ]
        },
        {
            weekNumber: 6,
            title: "Week 6: Classification Basics",
            accessCode: "CLASS6",
            days: [
                {
                    dayNumber: "Day 16",
                    title: "Classification Introduction",
                    topics: [
                        "Logistic Regression theory",
                        "Decision boundaries",
                        "Probability interpretation",
                        "Use cases"
                    ]
                },
                {
                    dayNumber: "Day 17",
                    title: "Logistic Regression Implementation",
                    topics: [
                        "Data preparation",
                        "Model training",
                        "Prediction probabilities",
                        "Threshold selection"
                    ]
                },
                {
                    dayNumber: "Day 18",
                    title: "Evaluation Metrics",
                    topics: [
                        "Accuracy",
                        "Precision and Recall",
                        "F1-score",
                        "Confusion matrix"
                    ]
                }
            ]
        },
        {
            weekNumber: 7,
            title: "Week 7: More Classification Algorithms",
            accessCode: "ALGO7",
            days: [
                {
                    dayNumber: "Day 19",
                    title: "K-Nearest Neighbors",
                    topics: [
                        "KNN theory",
                        "Distance metrics",
                        "Choosing k value",
                        "Pros and cons"
                    ]
                },
                {
                    dayNumber: "Day 20",
                    title: "KNN Implementation",
                    topics: [
                        "Data scaling",
                        "Model training",
                        "Prediction",
                        "Performance evaluation"
                    ]
                },
                {
                    dayNumber: "Day 21",
                    title: "Project: Iris Classification",
                    topics: [
                        "Dataset exploration",
                        "Model comparison",
                        "Evaluation",
                        "Visualization"
                    ]
                }
            ]
        },
        {
            weekNumber: 8,
            title: "Week 8: Decision Trees and Random Forest",
            accessCode: "TREE8",
            days: [
                {
                    dayNumber: "Day 22",
                    title: "Decision Trees",
                    topics: [
                        "Theory and math",
                        "Entropy and information gain",
                        "Implementation",
                        "Visualization"
                    ]
                },
                {
                    dayNumber: "Day 23",
                    title: "Random Forest Theory",
                    topics: [
                        "Ensemble methods",
                        "Bootstrap aggregating",
                        "Feature importance",
                        "Advantages"
                    ]
                },
                {
                    dayNumber: "Day 24",
                    title: "Random Forest Implementation",
                    topics: [
                        "Data preparation",
                        "Model training",
                        "Hyperparameters",
                        "Evaluation"
                    ]
                }
            ]
        },
        {
            weekNumber: 9,
            title: "Week 9: Support Vector Machines",
            accessCode: "SVM9",
            days: [
                {
                    dayNumber: "Day 25",
                    title: "SVM Introduction",
                    topics: [
                        "Theory and math",
                        "Hyperplanes and margins",
                        "Kernel trick",
                        "Use cases"
                    ]
                },
                {
                    dayNumber: "Day 26",
                    title: "SVM Implementation",
                    topics: [
                        "Data preparation",
                        "Model training",
                        "Kernel selection",
                        "Performance evaluation"
                    ]
                },
                {
                    dayNumber: "Day 27",
                    title: "Project: Classification Models",
                    topics: [
                        "Model comparison",
                        "Feature importance",
                        "Performance metrics",
                        "Result analysis"
                    ]
                }
            ]
        },
        {
            weekNumber: 10,
            title: "Week 10: Unsupervised Learning",
            accessCode: "UNSUP10",
            days: [
                {
                    dayNumber: "Day 28",
                    title: "Clustering (K-Means)",
                    topics: [
                        "Unsupervised learning concepts",
                        "K-Means algorithm",
                        "Choosing K value",
                        "Applications"
                    ]
                },
                {
                    dayNumber: "Day 29",
                    title: "K-Means Implementation",
                    topics: [
                        "Data preprocessing",
                        "Model training",
                        "Cluster evaluation",
                        "Visualization"
                    ]
                },
                {
                    dayNumber: "Day 30",
                    title: "Hierarchical Clustering",
                    topics: [
                        "Basic concepts",
                        "Dendrograms",
                        "Comparison with K-Means",
                        "Use cases"
                    ]
                }
            ]
        },
        {
            weekNumber: 11,
            title: "Week 11: Dimensionality Reduction",
            accessCode: "DIM11",
            days: [
                {
                    dayNumber: "Day 31",
                    title: "PCA Theory",
                    topics: [
                        "Dimensionality reduction",
                        "Variance explained",
                        "Eigenvalues and vectors",
                        "Applications"
                    ]
                },
                {
                    dayNumber: "Day 32",
                    title: "PCA Implementation",
                    topics: [
                        "Data standardization",
                        "Component selection",
                        "Transformation",
                        "Visualization"
                    ]
                },
                {
                    dayNumber: "Day 33",
                    title: "Model Improvement",
                    topics: [
                        "Hyperparameter tuning",
                        "Cross-validation",
                        "Feature selection",
                        "Pipeline building"
                    ]
                }
            ]
        },
        {
            weekNumber: 12,
            title: "Week 12: Deep Learning and Final Project",
            accessCode: "DL12",
            days: [
                {
                    dayNumber: "Day 34",
                    title: "Neural Networks Basics",
                    topics: [
                        "Biological inspiration",
                        "Activation functions",
                        "Forward propagation",
                        "Basic architecture"
                    ]
                },
                {
                    dayNumber: "Day 35",
                    title: "Building Neural Networks",
                    topics: [
                        "TensorFlow/Keras intro",
                        "Model architecture",
                        "Training process",
                        "Evaluation"
                    ]
                },
                {
                    dayNumber: "Day 36",
                    title: "Final Project",
                    topics: [
                        "Project presentations",
                        "Model evaluation",
                        "Lessons learned",
                        "Next steps"
                    ]
                }
            ]
        }
    ]
};



















    
    // Render week accordion
    function renderWeekAccordion() {
        weekAccordion.innerHTML = '';
        
        courseData.weeks.forEach(week => {
            const weekItem = document.createElement('div');
            weekItem.className = 'week-item';
            weekItem.innerHTML = `
                <div class="week-header">
                    <h3>${week.title}</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="week-content">
                    <div class="week-content-inner">
                        <div class="access-form">
                            <input type="password" placeholder="Enter access code" class="access-input">
                            <button class="btn btn-primary unlock-btn">Unlock</button>
                        </div>
                        <div class="access-message"></div>
                        <div class="week-days" style="display: none;">
                            ${week.days.map(day => `
                                <div class="day-item">
                                    <h4>${day.dayNumber}: ${day.title}</h4>
                                    <ul>
                                        ${day.topics.map(topic => `<li>${topic}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            weekAccordion.appendChild(weekItem);
        });
        
        // Add event listeners for accordion functionality
        document.querySelectorAll('.week-header').forEach(header => {
            header.addEventListener('click', function() {
                const weekItem = this.parentElement;
                const weekContent = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle icon rotation
                icon.classList.toggle('fa-chevron-up');
                icon.classList.toggle('fa-chevron-down');
                
                // Toggle content visibility
                if (weekContent.style.maxHeight) {
                    weekContent.style.maxHeight = null;
                } else {
                    weekContent.style.maxHeight = weekContent.scrollHeight + 'px';
                }
            });
        });
        
        // Add event listeners for access code functionality
        document.querySelectorAll('.unlock-btn').forEach((btn, index) => {
            btn.addEventListener('click', function() {
                const week = courseData.weeks[index];
                const accessInput = this.parentElement.querySelector('.access-input');
                const accessMessage = this.parentElement.nextElementSibling;
                const weekDays = this.closest('.week-content-inner').querySelector('.week-days');
                
                if (accessInput.value === week.accessCode) {
                    // Correct access code
                    accessMessage.textContent = 'Access granted!';
                    accessMessage.style.color = 'var(--success-color)';
                    weekDays.style.display = 'block';
                    
                    // Store in localStorage that this week is unlocked
                    localStorage.setItem(`week-${week.weekNumber}-unlocked`, 'true');
                } else {
                    // Incorrect access code
                    accessMessage.textContent = 'Incorrect access code. Please try again.';
                    accessMessage.style.color = 'var(--error-color)';
                }
            });
        });
        
        // Check localStorage for previously unlocked weeks
        courseData.weeks.forEach((week, index) => {
            if (localStorage.getItem(`week-${week.weekNumber}-unlocked`) === 'true') {
                const weekDays = document.querySelectorAll('.week-days')[index];
                const accessMessage = document.querySelectorAll('.access-message')[index];
                
                if (weekDays && accessMessage) {
                    weekDays.style.display = 'block';
                    accessMessage.textContent = 'Access granted!';
                    accessMessage.style.color = 'var(--success-color)';
                }
            }
        });
    }
    
    renderWeekAccordion();
    
    // Registration Form Validation
    const registrationForm = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        if (!name) {
            showError('name', 'Please enter your full name');
            isValid = false;
        }
        
        if (!email) {
            showError('email', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!phone) {
            showError('phone', 'Please enter your phone number');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (isValid) {
            // In a real app, this would send to a backend API
            // For demo, we'll simulate a successful submission
            simulateFormSubmission();
        }
    });
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;
        
        field.style.borderColor = 'var(--error-color)';
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        // Simple validation - at least 7 digits
        const digits = phone.replace(/\D/g, '');
        return digits.length >= 7;
    }
    
    function simulateFormSubmission() {
        // Show loading state
        const submitBtn = registrationForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        
        // Simulate API call delay
        setTimeout(() => {
            // Show success message
            formMessage.textContent = 'Thank you for your registration! We will contact you shortly with more details.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Reset form
            registrationForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Application';
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    }
    
    // Add smooth scroll to sections with offset for fixed header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });
});