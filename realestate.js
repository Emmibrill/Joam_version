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
        link: "realestate.html"
    },
    {
        name: "large-house-with-balcony",
        description: "large-house-with-balcony",
        realEstProNameDes: "description two",
        realEstLocation: "location one",
        realEstPrice: "12,000,000",
        link: "realestate.html"
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
        link: "realestate.html"
    },
    {
        name: "large-house-with-balcony",
        description: "large-house-with-balcony",
        realEstProNameDes: "two bedroom flat",
        realEstLocation: "8 ibagwa road, nsukka",
        realEstPrice: "300,000 per annum",
        link: "realestate.html"
    },
    {
        name: "modern-housing-with-blue-sky",
        description: "modern-housing-with-blue-sky",
        realEstProNameDes: "self contain",
        realEstLocation: "odenigwe gate, university of nigeria",
        realEstPrice: "150,000 per annum",
        link: "realestate.html"  
    },
    {
        name: "one-storey-home-exterior (1)",
        description: "one-storey-home-exterior",
        realEstProNameDes: "duplex",
        realEstLocation: "23 odim gate, university of nigeria",
        realEstPrice: "1,000,000 per annum",
        link: "realestate.html"    
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



