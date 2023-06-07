const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');


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
    },
    {
        name: "modern-housing-with-blue-sky",
        description: "modern-housing-with-blue-sky",
        realEstProNameDes: "description three",
        realEstLocation: "location one",
        realEstPrice: "12,000,000",
        link: "realestate.html"  
    },
    {
        name: "one-storey-home-exterior (1)",
        description: "one-storey-home-exterior",
        realEstProNameDes: "description four",
        realEstLocation: "location one",
        realEstPrice: "12,000,000",
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
    realEstateProductContainerRent.innerHTML = theRealEstProdRent;
})


