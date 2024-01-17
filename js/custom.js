const switchToggle = document.querySelector('#switch-toggle');


let isDarkmode = false;
const heder = document.getElementById('heder');

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

function toggleTheme (){
isDarkmode = !isDarkmode;
localStorage.setItem('isDarkmode', isDarkmode);
switchTheme();
}

function switchTheme (){
 
if (isDarkmode) {
  switchToggle.classList.remove('bg-yellow-500','-translate-x-2');
  switchToggle.classList.add('bg-gray-700','translate-x-full');
  setTimeout(() => {
    switchToggle.innerHTML = darkIcon;
  }, 250);
} else {
  switchToggle.classList.add('bg-yellow-500','-translate-x-2');
  switchToggle.classList.remove('bg-gray-700','translate-x-full');
  setTimeout(() => {
    switchToggle.innerHTML = lightIcon;
  }, 250);
}



// Body Darkmode
const body = document.getElementById('body');
const bodyDarkmode = (body.getAttribute('class') === "bg-black text-white") ? "bg-cyan-300 text-black" : "bg-black text-white";
body.setAttribute('class' , bodyDarkmode);


// nav Darkmode
const nav = document.getElementById('nav');
const navClass = (nav.getAttribute('class') === "lg:px-16 px-4 bg-gray-500 flex flex-wrap items-center py-4 shadow-xl w-full fixed z-10") ? "lg:px-16 px-4 bg-cyan-100 flex flex-wrap items-center py-4 shadow-xl w-full fixed z-10" : "lg:px-16 px-4 bg-gray-500 flex flex-wrap items-center py-4 shadow-xl w-full fixed z-10";
nav.setAttribute('class' , navClass);


// home Darkmode

const span = document.getElementById('span');
const spanDarkmode = (span.getAttribute('class') === 'text-cyan-400') ? 'text-red-400' : 'text-cyan-400';
span.setAttribute('class' , spanDarkmode)

const span1 = document.getElementById('span1');
const span1Darkmode = (span1.getAttribute('class') === 'type text-cyan-400') ? 'type text-red-400' : 'type text-cyan-400';
span1.setAttribute('class' , span1Darkmode);

const home_svg = document.getElementById('home_svg');
const changehomeSvgAttribute = (home_svg.getAttribute('fill') === "#1F2937") ? "#06B6D4" : '#1F2937';
home_svg.setAttribute('fill' , changehomeSvgAttribute);


// about Darkmode
const about = document.getElementById('about');
const span2 = document.getElementById('span2');
const span2Darkmode = (span2.getAttribute('class') === 'border-b-2 text-cyan-400 border-white') ? 'border-b-2 text-red-400 border-black' : 'border-b-2 text-cyan-400 border-white';
span2.setAttribute('class' , span2Darkmode);

const aboutDarkmode = (about.getAttribute('class') === 'h-full bg-gray-800 pb-20 p-10 scroll-mt-0 snap-start') ? 'h-full bg-cyan-500 pb-20 p-10 scroll-mt-0 snap-start' : 'h-full bg-gray-800 pb-20 p-10 scroll-mt-0 snap-start';
about.setAttribute('class' , aboutDarkmode);

const about_svg = document.getElementById('about_svg');
const changeSvgAttribute = (about_svg.getAttribute('fill') === "#000") ? "rgb(103 232 249)" : '#000';
about_svg.setAttribute('fill' , changeSvgAttribute);

// SKILLS Darkmode
const span3 = document.getElementById('span3');
span3.setAttribute('class' , span2Darkmode);

const skill_svg = document.getElementById('skill_svg');
const changeSkillSvgAttribute = (skill_svg.getAttribute('fill') === "#1F2937") ? "#06B6D4" : '#1F2937';
skill_svg.setAttribute('fill' , changeSkillSvgAttribute);

// portfolio Darkmode
const portfolio = document.getElementById('portfolio');
const span4 = document.getElementById('span4');
span4.setAttribute('class' , span2Darkmode);

const portfolioDarkmode = (portfolio.getAttribute('class') === 'h-full bg-gray-800  p-10 scroll-mt-0 snap-start') ? 'h-full bg-cyan-500  p-10 scroll-mt-0 snap-start' : 'h-full bg-gray-800  p-10 scroll-mt-0 snap-start';
portfolio.setAttribute('class' , portfolioDarkmode);

const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const projectDarkmode = (project1.getAttribute('class') === 'project1 py-10 bg-gray-600 mb-5 shadow-xl') ? 'project1 py-10 bg-orange-600 mb-5 shadow-xl' : 'project1 py-10 bg-gray-600 mb-5 shadow-xl';
project1.setAttribute('class' , projectDarkmode);
project2.setAttribute('class', projectDarkmode);
project3.setAttribute('class', projectDarkmode);

const portfolio_svg = document.getElementById('portfolio_svg');
const changePortfolioSvgAttribute = (portfolio_svg.getAttribute('fill') === "#000") ? "rgb(103 232 249)" : '#000';
portfolio_svg.setAttribute('fill' , changePortfolioSvgAttribute);


// services Darkmode
const services_card = document.getElementById('services_card');
const blackOverlay = document.getElementById('blackOverlay');
const span5 = document.getElementById('span5');
span5.setAttribute('class' , span2Darkmode);

const blackOverlayDarkmode = (blackOverlay.getAttribute('class') === 'w-full h-full absolute opacity-75 bg-gray-800') ? 'w-full h-full absolute opacity-75 bg-cyan-500' : 'w-full h-full absolute opacity-75 bg-gray-800';
blackOverlay.setAttribute('class' , blackOverlayDarkmode);

// contact Darkmode
const contact = document.getElementById('contact');
const span6 = document.getElementById('span6');
span6.setAttribute('class' , span2Darkmode);

const contactDarkmode = (contact.getAttribute('class') === 'h-full bg-gray-800 scroll-mt-0 snap-start') ? 'h-full bg-cyan-500 scroll-mt-0 snap-start' : 'h-full bg-gray-800 scroll-mt-0 snap-start';
contact.setAttribute('class' , contactDarkmode);

const services_svg = document.getElementById('services_svg');
const changeServiceSvgAttribute = (services_svg.getAttribute('fill') === "#1F2937") ? "#06B6D4" : '#1F2937';
services_svg.setAttribute('fill' , changeServiceSvgAttribute);

// footer
const contact_svg = document.getElementById('contact_svg');
const changeContactSvgAttribute = (contact_svg.getAttribute('fill') === "#000") ? "rgb(103 232 249)" : '#000';
contact_svg.setAttribute('fill' , changeContactSvgAttribute);

}

switchTheme();


const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.addEventListener('click' , () => {
  menu.classList.toggle('hidden')
});


// type  js

var typed3 = new Typed('.type', {
  strings: [
            'FRONT-END  DEVELOPER',
            'PHOTOGRAPHER',        
],
  typeSpeed: 100,
  backSpeed: 100,
  smartBackspace: true, 
  loop: true
});



// download button

const cv = document.getElementById('cv');
cv.addEventListener('click', () => {
  window.open('./img/CV.pdf');
});


// hire me button
document.getElementById('hire').addEventListener('click' , () => {
  window.open('https://www.linkedin.com/in/md-saiful-islam-rafsan-494b13279/');
});

// animate number

let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startvalue = 0;
  let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  let counter = setInterval(function () {
    startvalue ++;
    valueDisplay.textContent = startvalue;
    if (startvalue === endvalue){
      clearInterval(counter);
    }
  }, duration);
});



// mixit up portfolio section 

var mixer = mixitup('.Portfolio_gallary');


// icon link
document.getElementById('facebook').addEventListener('click', () => {
  window.open('https://www.facebook.com/Mdsaifulislam.Rafsan');
});
document.getElementById('twitter').addEventListener('click', () => {
  window.open('https://twitter.com/SaifulI41256800');
});
document.getElementById('instagram').addEventListener('click', () => {
  window.open('https://www.instagram.com/mdsaifulislam.rafsan/');
});
document.getElementById('github').addEventListener('click', () => {
  window.open('https://github.com/MdSaifulIslamRafsan');
});
document.getElementById('youtube').addEventListener('click', () => {
  window.open('https://www.youtube.com/@mdsaifulislamrafsan60');
});

// footer icon
document.getElementById('linkdin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/md-saiful-islam-rafsan-494b13279/');
});
document.getElementById('gmail').addEventListener('click', () => {
  window.open('mailto:mdsafulislamrafsan099@gmail.com');
});


// contect form




const scriptURL = 'https://script.google.com/macros/s/AKfycbwnpkrRTqAs14hgUyLr7eLVmIg7SPJ3rcF2SJfqlpdRIjQtoxY3OnSas2VZQw-KfnQ/exec';
const form = document.forms['contact-form']
form.addEventListener('submit' , e => {
  
  e.preventDefault()
  fetch(scriptURL, { method :'POST' , body : new FormData(form)})
  .then(response => alert('Thank You! Your form is submitted successfully.'))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})


