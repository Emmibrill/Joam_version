const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');
const joamActDetails = document.querySelector('.farm-act');
const farmOrganogramToggler = document.querySelector('.organogram-container--relEst');


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


let realestateProductBuy = [
    {
        name: "gated-house-exterior",
        description: "gated-house-exterior",
        realEstProNameDes: "description one",
        realEstLocation: "location one",
        realEstPrice: "12,000,000",
        link: "#contact"
    },
    {
        name: "large-house-with-balcony",
        description: "large-house-with-balcony",
        realEstProNameDes: "description two",
        realEstLocation: "location one",
        realEstPrice: "12,000,000",
        link: "#contact"
    }
]
const realEstateProductContainer = document.querySelector('#realEst-prod-container-buy');
let theRealEstProd = '';
realestateProductBuy.forEach(realEstPro =>{
    theRealEstProd +=`
    <div class="relEst-prod-wrapper">
        <div class="relEst-prod-Image">
        <div class="relEst-image-con">
            <img class="relEst-img" src="${realEstPro.name}.jpg" alt="${realEstPro.description}">
        </div> 
        <h4 class="buy">buy</h4>
        </div>
        <div class="realEst-des-container">
            <h2 class="realEst-prod-des">${realEstPro.realEstProNameDes}</h2>
            <h3 class="realEst-location">${realEstPro.realEstLocation}</h3>
            <h2 class="realEst-price">
                <span class="realEst-price">
                    price : 
                </span>
                <i class="fa-solid fa-naira-sign"></i>
                ${realEstPro.realEstPrice}
            </h2>
            <a class="realEst-placeorder" href="${realEstPro.link}">place order</a>
        </div>
        
    </div>
    `
    realEstateProductContainer.innerHTML = theRealEstProd;
})

let realestateProductRent = [
    {
        name: "gated-house-exterior",
        description: "gated-house-exterior",
        realEstProNameDes: "three bedroom flat",
        realEstLocation: "52 ajuona obukpa, nsukka",
        realEstPrice: "400,000 per annum",
        link: "#contact"
    },
    {
        name: "large-house-with-balcony",
        description: "large-house-with-balcony",
        realEstProNameDes: "two bedroom flat",
        realEstLocation: "8 ibagwa road, nsukka",
        realEstPrice: "300,000 per annum",
        link: "#contact"
    },
    {
        name: "modern-housing-with-blue-sky",
        description: "modern-housing-with-blue-sky",
        realEstProNameDes: "self contain",
        realEstLocation: "odenigwe gate, university of nigeria",
        realEstPrice: "150,000 per annum",
        link: "#contact"  
    },
    {
        name: "one-storey-home-exterior (1)",
        description: "one-storey-home-exterior",
        realEstProNameDes: "duplex",
        realEstLocation: "23 odim gate, university of nigeria",
        realEstPrice: "1,000,000 per annum",
        link: "#contact"    
    }
]

const realEstateProductContainerRent = document.querySelector('#realEst-prod-container-rent');
let theRealEstProdRent = '';
realestateProductRent.forEach(realEstPro =>{
    theRealEstProdRent +=`
    <div class="relEst-prod-wrapper">
        <div class="relEst-prod-Image">
        <div class="relEst-image-con">
            <img class="relEst-img" src="${realEstPro.name}.jpg" alt="${realEstPro.description}">
        </div> 
        <h4 class="buy">rent</h4>
        </div>
        <div class="realEst-des-container">
            <h2 class="realEst-prod-des">${realEstPro.realEstProNameDes}</h2>
            <h3 class="realEst-location">${realEstPro.realEstLocation}</h3>
            <h2 class="realEst-price">
                <span class="realEst-price">
                    price : 
                </span>
                <i class="fa-solid fa-naira-sign"></i>
                ${realEstPro.realEstPrice}
            </h2>
            <a class="realEst-placeorder" href="${realEstPro.link}">place order</a>
        </div>
        
    </div>
    `
    realEstateProductContainerRent.innerHTML = theRealEstProdRent;
})

const pageUp = document.querySelector('.page-up');
window.addEventListener('scroll', () => {
    if(scrollY > 1000){
        pageUp.classList.add('show-page-up')
    }else{pageUp.classList.remove('show-page-up')}
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
    ValidateonChange();
    ValidateonEntry();
}
//validates form on submit
function validateOnSubmit() {
    form.addEventListener('submit', (e) => {
        fields.forEach(field => {
            if(field.value === ''){e.preventDefault();}
            else if(field.name === 'name'){
                if(field.value.trim() === ''){e.preventDefault()}
                else if(field.value.length < 4){e.preventDefault()}
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
            else if(field.name === 'address'){
                if(field.value.trim() === ''){
                    e.preventDefault()
                }else if(field.value.length < 6){
                    e.preventDefault()
                }
            } 
            else if(field.name === 'product'){
                if(field.value.trim() === ''){
                    e.preventDefault();
                }else if(field.value.length < 10){
                    e.preventDefault();
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
            if(field.name === 'name'){
                if(field.value.trim() === ''){
                    setStatus(field, 'field cannot be blank', 'error')
                }else if(field.value.length < 2){
                    setStatus(field, 'please enter your name', 'error')
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

            if(field.name === 'address'){
                if(field.value.trim() === ''){
                    setStatus(field, 'field cannot be blank', 'error')
                }else if(field.value.length < 6){
                    setStatus(field, 'please input your correct address', 'error')
                }else{setStatus(field, '', 'success')}
            } 

            if(field.name === 'product'){
                if(field.value.trim() === ''){
                    setStatusForMsg(field, 'field cannot be blank', 'error')
                }else if(field.value.length < 10){
                    setStatusForMsg(field, 'please fill in the product(s)', 'error')
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

joamActDetails.addEventListener('click', () => {
    joamActDetails.classList.toggle('Active')
    joamActDetails.classList.toggle('fagsActive')
    joamActDetails.classList.toggle('colorActive')
    joamActDetails.classList.toggle('srokeActive')
})
farmOrganogramToggler.addEventListener('click', () => {
    farmOrganogramToggler.classList.toggle('Active')
    farmOrganogramToggler.classList.toggle('fagsActive')
    farmOrganogramToggler.classList.toggle('colorActive')
    farmOrganogramToggler.classList.toggle('srokeActive')
})



