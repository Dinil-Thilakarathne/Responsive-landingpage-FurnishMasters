// seacrh box 
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click' , () => {
    searchBox.classList.toggle('active');
});

// mobile nav 
const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header-nav');

menuIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});

// nav links 
const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        headerNav.classList.toggle('active');
    })
});

// scroll reveal animation 
// scroller reveal 
animateElement = (element,origin,delay,distance) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
};

// hero content 
animateElement('.hero-content','left','500','500px');

// hero cards 
const cards = document.querySelectorAll('.card');
cards.forEach((card,index) => {
    animateElement(card,'right',500 + (index * 500) , '500px')
});

// hero bottom content 
animateElement('.hero-bottom','bottom','500','500px');

const contentGroups = document.querySelectorAll('.content-group');
contentGroups.forEach((card,index) => {
    animateElement(card,'bottom',1000 + (index * 500) , '500px')
});

// mode change 
const modeChangeIcon = document.querySelector(".mode-change-icon");

modeChangeIcon.addEventListener("click" , () => {
    if(modeChangeIcon.classList.contains("bx-moon")){
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("bx-moon");
        modeChangeIcon.classList.add("bxs-moon");
        modeChangeIcon.style.color = "yellow";
    }else{
        document.body.classList.toggle("dark-theme");
        modeChangeIcon.classList.remove("bxs-moon");
        modeChangeIcon.classList.add("bx-moon");
        modeChangeIcon.style.color = "inherit";
    }
})