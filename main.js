const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');


/*var sliderImage = document.querySelector('#sliderImage');
sliderImage.classList.add('background-picture-image');
var images = new Array(
    "LEAF.jpg",
    "black-and-red-chicken (1).jpg",
    "yellow-corn-kernels-through-leaves (1).jpg");
var length = images.length;
var i = 0;


//change the image on the home page first section
function slider(){
    if(i > length-1){
        i = 0
    }
    sliderImage.src = images[i]
    i++
    setTimeout('slider()',3000)
}*/

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none'  
})

//activate nav bar on scroll
function activateScrolly() {
    navBar.classList.toggle('addNavBarColor', scrollY > 20)
}

//activates the navigation bar and controls the hambugger movement
function activateNavbar() {
    let navState = navToggler.getAttribute('aria-controls');
if(navState === 'closed'){
    navToggler.setAttribute('aria-controls', 'open')
}else{navToggler.setAttribute('aria-controls', 'closed')}
navList.classList.toggle('navActive')
}

//deacivates the navbar on scroll with a corresponding hambugger movement
function removeNavbar() {
    let navState = navToggler.getAttribute('aria-controls');
if(navState === 'open'){
    navToggler.setAttribute('aria-controls', 'closed')
    navList.classList.remove('navActive')
}
}

//declare active navigation button on click
function declareActiveNav() {
    Array.from(nav_list).forEach(nav => {
        nav.addEventListener('click', () => {
            nav_list.forEach(nav => {
                nav.classList.remove('active')
            })
          nav.classList.add('active')
        })
    })
}

declareActiveNav();

window.addEventListener('scroll', () => {
    activateScrolly();
})

window.addEventListener('load', () => {
    navList.classList.remove('navActive')  
})


navToggler.addEventListener('click', () => {
    activateNavbar()
})

window.addEventListener('scroll', () => {
    removeNavbar()    
})

const readMore = document.querySelector('.read-more')
readMore.addEventListener('click', () => {
    showMore()
})

//display all the content on the 'why choose joam real estate log'
const showMore = () => {
    let par = document.querySelector('.extended-paragraph');
    let parAttribute = par.getAttribute('aria-details')
    if(parAttribute === 'hidden'){
        par.setAttribute('aria-details', 'visible');
        par.classList.add('showExtended-paragraph')
    }else{
        par.setAttribute('aria-details', 'hidden')
        par.classList.remove('showExtended-paragraph')
    }
}

//control the carousel that displays the different services rendered on the home page
const serviceTrack = document.querySelector('.services-pictures-container');
const serviceNextButton = document.querySelector('.serviceButton--right');
const servicePreviousButton = document.querySelector('.serviceButton--left');

const serviceSlides = Array.from(serviceTrack.children)
const serviceSlideWidth = serviceSlides[1].getBoundingClientRect().width;
//console.log(serviceSlideWidth)

const setServiceSlidePosition = (slide, index) => {
    slide.style.left = serviceSlideWidth * index + 'px';
    const num = slide.style.left
    //console.log(num)
}
serviceSlides.forEach(setServiceSlidePosition);

const widthToTranslate = (serviceTrack, currrentSlide, targetSlide) => {
    serviceTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currrentSlide.classList.remove('activeSlider')
    targetSlide.classList.add('activeSlider')
}

const serviceNavControl = (slideIndex) => {
    if(slideIndex === 1){
        servicePreviousButton.style.display = 'block'
    }
    else if(serviceSlides.length - 1 === slideIndex){
        serviceNextButton.style.display = 'none'
        servicePreviousButton.style.display = 'block'
    }
    else if(slideIndex === 0 ){
        servicePreviousButton.style.display = 'none'
        serviceNextButton.style.display = 'block'
    }
    else{
        servicePreviousButton.style.display = 'block';
        serviceNextButton.style.display = 'block'
        }
}

//display the next slide on the service section when the left button is being clicked
servicePreviousButton.addEventListener('click', () => {
    const currrentSlide = serviceTrack.querySelector('.activeSlider');
    const previousSlide = currrentSlide.previousElementSibling;
    const slideIndex = serviceSlides.findIndex(slide => slide === previousSlide);

    widthToTranslate(serviceTrack, currrentSlide, previousSlide);
    serviceNavControl(slideIndex);
    //console.log(slideIndex)
    
})

//display the next slide on the service section when the right button is being clicked
serviceNextButton.addEventListener('click', () => {
    const currrentSlide = serviceTrack.querySelector('.activeSlider');
    const nextSlide = currrentSlide.nextElementSibling;
    const slideIndex = serviceSlides.findIndex(slide => slide === nextSlide)
    
    widthToTranslate(serviceTrack, currrentSlide, nextSlide);
    serviceNavControl(slideIndex)
    //console.log(slideIndex) 
})

window.addEventListener('resize', () => {
    
    /*const currrentSlide = serviceTrack.querySelector('.activeSlider');
    let curSlideImgWidth = currrentSlide.children[0].clientWidth
    console.log(curSlideImgWidth)
    serviceTrack.style.width = curSlideImgWidth
    console.log(serviceTrack.style.width)*/

})

//controls the caurosel that display the farm picures
const track = document.querySelector('.trackWay');
const sliderNextButton = document.querySelector('.sliderButton--right');
const sliderPreviousButton = document.querySelector('.sliderButton--left');

const slides = Array.from(track.children)
const slideWidth = slides[1].getBoundingClientRect().width;
//console.log(slideWidth)

const assignPosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
    const num = slide.style.left
    //console.log(num)
}
slides.forEach(assignPosition);

//assign the needed width to the different carousel track
const widthToMove = (track, currrentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currrentSlide.classList.remove('activeSlider')
    targetSlide.classList.add('activeSlider')
}

//control the apperance of the carousel navigator
const navControl = (slideIndex) => {
    if(slideIndex === 1){
        sliderPreviousButton.style.display = 'block'
    }
    else if(slides.length - 1 === slideIndex){
        sliderNextButton.style.display = 'none'
        sliderPreviousButton.style.display = 'block'
    }
    else if(slideIndex === 0 ){
        sliderPreviousButton.style.display = 'none'
    }
    else{
        sliderPreviousButton.style.display = 'block';
        sliderNextButton.style.display = 'block'
        }
}

//display the next slide on the farm picture carousel when the right button is being clicked
sliderNextButton.addEventListener('click', () => {
    const currrentSlide = track.querySelector('.activeSlider');
    const nextSlide = currrentSlide.nextElementSibling;
    const slideIndex = slides.findIndex(slide => slide === nextSlide)
    
    widthToMove(track, currrentSlide, nextSlide);
    navControl(slideIndex)
    //console.log(slideIndex)
})

//display the next slide on the farm picture carousel when the left button is being clicked
sliderPreviousButton.addEventListener('click', () => {
    const currrentSlide = track.querySelector('.activeSlider');
    const previousSlide = currrentSlide.previousElementSibling;
    const slideIndex = slides.findIndex(slide => slide === previousSlide)

    widthToMove(track, currrentSlide, previousSlide);
    navControl(slideIndex)
    //console.log(slideIndex)
    
})

let showcases = [
{
    name: "FARM-5",
    writeUp: "we got you covered",
    description: "baby-pigs-eating-on-the-farm",
    link: "farm.html"
},
{
    name: "CHICKEN",
    writeUp: "we got you covered",
    description: "brown-chicken",
    link: "farm.html"
},
{
    name: "FISHERY",
    writeUp: "we got you covered",
    description: "silver-and-blue-fish-in-a-pile" ,
    link: "farm.html"  
},
{
    name: "GOAT",
    writeUp: "we got you covered",
    description: "two-goats-looking-tough",
    link: "farm.html"    
}
]

const farmDisplay = document.querySelector('.farm-display');
let theDisplay = ''

showcases.forEach(display => {
    theDisplay += `
    <div class="farm-display-container">
            <div class="display_picture">
                <img src="${display.name}.jpg" alt="${display.description}">
            </div>
            <div class="circle">
                <img src="JOAM-FARM-LOGO.jpg" alt="joam-farm-logo">
            </div>
            <div class="details">
                <h3>${display.writeUp}</h3>
                <button><a href="${display.link}">explore</a></button>
            </div>
        </div>
    `
    farmDisplay.innerHTML = theDisplay
})

let estates = [
    {
        name: "gated-house-exterior (1)",
        writeUp: "A gated house's façade is displayed in stunning detail",
        description: "gated-house-exterior",
        link: "realestate.html"
    },
    {
        name: "large-house-with-balcony",
        writeUp: "The beautiful mansion with the balcony is on exhibit, and I know you enjoy it",
        description: "large-house-with-balcony",
        link: "realestate.html"
    },
    {
        name: "modern-housing-with-blue-sky",
        writeUp: "Modern homes with a blue sky, how beautiful is nature?",
        description: "modern-housing-with-blue-sky" ,
        link: "realestate.html"  
    },
    {
        name: "one-storey-home-exterior (1)",
        writeUp: "Here is the exterior of a one-story house.",
        description: "one-storey-home-exterior",
        link: "realestate.html"    
    }
]

const estatePixContainer = document.querySelector('.estate-pix-container');
console.log(estatePixContainer)
let theEstate = '';

estates.forEach(estate => {
    theEstate +=
    `
    <div class="estate-pix-box">
                    <img src="${estate.name}.jpg" alt="${estate.description}">
                    <div class="extension">
                        <h3 class="estate-pix-description">${estate.writeUp}</h3>
                        <a class="extension-link" href="${estate.link}">Reach out</a>
                    </div>
                    
                </div>
    `;
    estatePixContainer.innerHTML = theEstate;
})

const eachEstate = estatePixContainer.children;
const Estate = Array.from(eachEstate)
Estate[0].classList.add('add-effect-active')
Estate.forEach(estate => {
    estate.addEventListener('click', (e) => {
        const Target = e.currentTarget;
        Estate.forEach(estate => {
            estate.classList.remove('add-effect-active');
        })
        Target.classList.add('add-effect-active')
    })
})
