const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none'  
})

window.addEventListener('resize', () => {
    if(navigator.userAgent.match(/Andriod/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        
        const check = screen.orientation;
        if(check.type === "landscape-primary"){
            return  location.reload()
        }
    }
    
    
})

window.matchMedia("(orientation: landscape)").addEventListener('change', (e) => {
    const mode = e.matches
    if(mode){
        console.log(true)
        return  location.reload()
    }
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

/*window.addEventListener('resize', () => {
    

})*/

let showcases = [
{
    name: "baby-pigs-eating",
    writeUp: "piggery",
    description: "baby-pigs-eating-on-the-farm",
    link: "farm.html#farmN"
},
{
    name: "black-layer-chicken",
    writeUp: "poultry",
    description: "a-full-grown-brown-chicken",
    link: "farm.html#farmN"
},
{
    name: "silver-and-blue-fish",
    writeUp: "fishery",
    description: "silver-and-blue-fish-in-a-pile" ,
    link: "farm.html#farmN"  
},
{
    name: "farm-goat",
    writeUp: "goat farm",
    description: "two-goats-looking-tough",
    link: "farm.html#farmN"    
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
    ValidateonChange()
    ValidateonEntry()
}
//validates form on submit
function validateOnSubmit() {
    form.addEventListener('submit', (e) => {
        fields.forEach(field => {
            if(field.value === ''){e.preventDefault();}
            else if(field.type === 'text'){
                if(field.value.trim() === ''){e.preventDefault()}
                else if(field.value.length < 4){e.preventDefault()}
                else{return validateFields()}
            } 
            else if(field.type === 'email'){
                var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z{2,3}]+)*$/;
                if(re.test(field.value)){return validateFields();}
                else{e.preventDefault()}
            }
            else if(field.type.trim() === 'tel'){
                const re = /^\+([0-9]{3})([0-9]{3})([0-9]{7})$/;
                const _re = /^([0]{1})([0-9]{2})([0-9]{8})$/;
                if(re.test(field.value) || _re.test(field.value)){
                    return validateFields();
                } else{e.preventDefault()}
            }
            else if(field.name === 'message'){
                if(field.value.length < 9){
                    e.preventDefault()
                }
            }
            return validateFields();
        })  
    })
}
//validates form on entry
function ValidateonEntry() {
    fields.forEach(field => {
        field.addEventListener('input', () => {
            validateFields();
        })
    })   
}
//validates form on change when using autocomplete
function ValidateonChange() {
    fields.forEach(field => {
        field.addEventListener('click', () => {
            validateFields();
        })
    })   
}

//validates the different input fields
function validateFields(){
    fields.forEach(field => {
        field.addEventListener('input', () => {
            if(field.type === 'text'){
                if(field.value.trim() === ''){
                    setStatus(field, 'field cannot be blank', 'error')
                }else if(field.value.length < 4){
                    setStatus(field, 'please enter your full name', 'error')
                }else{setStatus(field, '', 'success')}
            } 

            if(field.type.trim() === 'email'){
                const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z{2,3}]+)*$/;
                if(re.test(field.value)){
                    setStatus(field, '', 'success')
                } else{
                    setStatus(field, 'enter a valid email address', 'error')
                }
            }

            if(field.type.trim() === 'tel'){
                const re = /^\+([0-9]{3})([0-9]{3})([0-9]{7})$/;
                const _re = /^([0]{1})([0-9]{2})([0-9]{8})$/;
                if(re.test(field.value) || _re.test(field.value)){
                    setStatus(field, '', 'success')
                } else{
                    setStatus(field, 'please enter a valid phone number', 'error')
                }
            }
            if(field.name === 'message'){
                if(field.value.trim() === ''){
                    setStatusForMsg(field, 'field cannot be blank', 'error')
                }else if(field.value.length < 10){
                    setStatusForMsg(field, 'please write something descriptive', 'error')
                }else{setStatusForMsg(field, '', 'success')}
            } 

        })
    })
}

//set status for the input fields
function setStatus(field, message, status) {   
    
    const erroricon = field.parentElement.querySelector('.fa-circle-xmark');
    const succesicon = field.parentElement.querySelector('.fa-circle-check');
    const errorMessage = field.parentElement.querySelector('.errorMessage');

    if(status === 'success'){
        if(erroricon){erroricon.classList.remove('input-error')}
        succesicon.classList.add('input-success')
        errorMessage.classList.remove('input-error')
        errorMessage.innerHTML = '';
        field.classList.remove('input-error');
        field.classList.add('input-success')
    }
    if(status === 'error'){
        if(succesicon){succesicon.classList.remove('input-success')}
        erroricon.classList.add('input-error');
        errorMessage.classList.add('input-error');
        errorMessage.innerHTML = message;
        field.classList.remove('input-success');
        field.classList.add('input-error');
    }
}
//set status for the message field
function setStatusForMsg(field, message, status) {  
    const errorForMsg = field.parentElement.querySelector('.errorMessage--message');

    if(status === 'success'){
        errorForMsg.classList.remove('error')
        errorForMsg.innerHTML = '';
        field.classList.remove('input-error');
        field.classList.add('input-success')
    }
    if(status === 'error'){
        errorForMsg.classList.add('error');
        errorForMsg.innerHTML = message;
        field.classList.remove('input-success');
        field.classList.add('input-error');
    }
}
function clearField(){
    window.addEventListener('load', () => {
        fields.forEach(field =>{
            while(field.value !== ''){
                field.value = '';
            }
        })
    })
}

formvalidator();
clearField()







