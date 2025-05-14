
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');


const removeActiveLinks = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
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
            removeActiveLinks();
            removeActiveSections();
            
          
            link.classList.add('active');
            
           
            sections[idx].classList.add('active');
            
           
            sections[idx].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('DOMContentLoaded', () => {
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
});


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