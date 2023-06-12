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

let showcases = [
{
    name: "baby-pigs-eating",
    writeUp: "piggery",
    description: "baby-pigs-eating-on-the-farm",
    link: "farm.html"
},
{
    name: "black-layer-chicken",
    writeUp: "poultry",
    description: "a-full-grown-brown-chicken",
    link: "farm.html"
},
{
    name: "silver-and-blue-fish",
    writeUp: "fishery",
    description: "silver-and-blue-fish-in-a-pile" ,
    link: "farm.html"  
},
{
    name: "farm-goat",
    writeUp: "goat farm",
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
        name: "gated-house-exterior",
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
Estate[0].classList.add('add-effect-active');
Estate[2].classList.add('add-effect-active');
Estate.forEach(estate => {
    estate.addEventListener('click', (e) => {
        const Target = e.currentTarget;
        Estate.forEach(estate => {
            estate.classList.remove('add-effect-active');
        })
        Target.classList.add('add-effect-active')
    })
})

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', addfocus)
    input.addEventListener('blur', removefocus)
})
function addfocus(){
    let parent = this.parentNode 
    parent.classList.add('focus')
}
function removefocus(){
    let parent = this.parentNode
   if(this.value == ''){
    parent.classList.remove('focus')
   }
}


const form = document.querySelector('#contact');
const fieldParent = document.querySelectorAll('.contact__head')
const fields = document.querySelectorAll('.input')

function formvalidator() {
    validateOnSubmit();
    ValidateonEntry()
}

function validateOnSubmit() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        fields.forEach(field => {
            validateFields() ;  
        })  
    })
}
function ValidateonEntry() {
    fields.forEach(field => {
        field.addEventListener('input', () => {
            validateFields();
        })
    })   

}

function validateFields(){
    fields.forEach(field => {
        field.addEventListener('input', () => {
            if(field.value.trim() === ''){
                setStatus(field, 'field cannot be blank', 'error')


            } else{
                if(field.value.trim() != '' && field.value.length > 8)
                setStatus(field, '', 'success')
            }


        })
    })
}

function setStatus(field, message, status) {   
    
    const erroricon = field.parentElement.querySelector('.fa-circle-xmark');
    const succesicon = field.parentElement.querySelector('.fa-circle-check');
    const errorMessage = field.parentElement.querySelector('.errorMessage');


    if(status === 'success'){
        if(erroricon){erroricon.classList.remove('input-error')}
        succesicon.classList.add('input-success')
        errorMessage.classList.remove('input-error')
        errorMessage.innerHTML = '';
        field.classList.add('input-success')
    }
    if(status === 'error'){
        if(succesicon){succesicon.classList.remove('input-success')}
        erroricon.classList.add('input-error');
        errorMessage.classList.add('input-error');
        errorMessage.innerHTML = message;
        field.classList.remove('input-success');
    }
}
formvalidator();







