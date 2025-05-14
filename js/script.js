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


// const arrowRight = document.querySelectorAll('.portfolio-box .navigation .arrow-right');
// const arrowLeft = document.querySelectorAll('.portfolio-box .navigation .arrow-left');

// let index = 0;

// const activePortfolio = () => {
//     const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

//     imgSlide.computedStyleMap.transform = `translateX(calc(${index * -100} % - ${index * 2}rem))`;
// }

// arrowRight.addEventListener('click' , () => {
//     if (index < 4) {
//         index ++;
//     }
//     else {
//         index = 5 ;
//     }

//     activePortfolio ( );

// } );

// arrowLeft.addEventListener('click' , () => {
//     if (index > 1) {
//         index --;
//     }
//     else {
//         index = 0;
//     }

//     activePortfolio ( );

// } );


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