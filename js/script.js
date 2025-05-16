const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const logoLink = document.querySelector('.logo');

const removeActiveLinks = () => {

    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-box')

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);
};

const removeActiveSections = () => {
    sections.forEach(section => {
        section.classList.remove('active');
    });
};



navLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!link.classList.contains('active')) {
            // Start transition out
            removeActiveLinks();
            removeActiveSections();
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Delay section activation to match navbar animation
            setTimeout(() => {
                sections[idx].classList.add('active');
                sections[idx].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 2000); // Matches navbar animation duration
        }
    });
});


logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!navLinks[0].classList.contains('active')) {
        removeActiveLinks();
        removeActiveSections();
        
        navLinks[0].classList.add('active');
        
        setTimeout(() => {
            sections[0].classList.add('active');
            sections[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 2000); // Matches navbar animation duration
    }
});

window.addEventListener('DOMContentLoaded', () => {
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
});


//resume


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn , idx) => {
    btn.addEventListener('click' , () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

    });
}) ;




const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const slides = document.querySelectorAll('.portfolio-carousel .img-item');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
let index = 0;

const updatePortfolio = () => {
    // Update image slide position
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    
    // Update portfolio details
    portfolioDetails.forEach((detail, i) => {
        detail.classList.toggle('active', i === index);
    });
};

arrowRight.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updatePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = slides.length - 1;
    }
    updatePortfolio();
});

// Initialize
updatePortfolio();




// Add to your script.js
document.querySelector('.btn[download]').addEventListener('click', function() {
    gtag('event', 'CV_download', {
        'event_category': 'Engagement',
        'event_label': 'CV Download'
    });
});


// Initialize EmailJS with your User ID
(function() {
    emailjs.init('R4PggCaUW0dBRPQWo'); // Get this from EmailJS dashboard
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const serviceID = 'service_9peacgb'; // From EmailJS dashboard
    const templateID = 'template_0jelvoo'; // From EmailJS dashboard
    
    // Send the email
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, (error) => {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});