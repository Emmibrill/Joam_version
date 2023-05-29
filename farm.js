const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');
const farmNavs = document.querySelectorAll('[data-target]');
const farmContents = document.querySelectorAll('[data-content]');
const offersContainer  = document.querySelector('.offers');

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
function declareActiveNav() {
    Array.from(farmNavs).forEach(nav => {
        nav.addEventListener('click', () => {
            Array.from(farmNavs).forEach(nav=> {
                nav.classList.remove('active')
            })
            nav.classList.add('active')
            console.log(nav)
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




//add active state to the farm section navigation
const listContainer = document.querySelector('.list-container')
const farmList = Array.from(listContainer.children);
const activeFarmNav = () => {
    farmList.forEach(list => {
        list.addEventListener('click', () => {
            farmList.forEach(list => {
                
                list.classList.remove('active')
            })
            list.classList.add('active')
        })
        
    })
}
activeFarmNav()


const showFarmSection = () => {
    Array.from(farmNavs).forEach(farmNav => {
        farmNav.addEventListener('click', () => {
            const farmContent = document.querySelector(farmNav.dataset.target);
            console.log(farmContent);
            Array.from(farmContents).forEach(content => {
                content.classList.remove('farmActive');
            })
            farmContent.classList.add('farmActive')
           
        })
    })
}

showFarmSection()
declareActiveNav()



//display the various products in the farm section

const productBody = document.querySelector('#vegetable-products');
let theProduct = '';
let products = [
    {
        product: "FRESH-RAINFALL-ON-LEAF",
        productTitle: "green vegetable",
        link: "#"
    },
    {
        product: "FRESH-RAINFALL-ON-LEAF",
        productTitle: "good vegetable pods",
        link: "#"
    }
]
products.forEach(eachProduct => {
    theProduct += `
    <div class="product-container">
        <div class="product-image">
            <img src="${eachProduct.product}.jpg" alt="FRESH-RAINFALL-ON-LEAF">
            <div class="farm-logo-container">
                <div class="farm-product-logo"></div>
            </div>
        </div>
        <div class="product-description">
            <h4 class="product-description-content">${eachProduct.productTitle}</h4>
        </div>
        <div class="product-container-overlay">
            <a class="overlay-button" href="${eachProduct.link}">shop now</a>
        </div>
    </div>
    `
    productBody.innerHTML = theProduct;
    
})


//highlights the selected product showing other features

const highlighProductClicked = () => {
    const vegetableProduct = Array.from(productBody.children);
    vegetableProduct.forEach(product => {
        product.addEventListener('click', (e) => {
            const target = e.currentTarget
            const overlay = target.querySelector('.product-container-overlay');
            vegetableProduct.forEach(product => {
                product.querySelector('.product-container-overlay').classList.remove('product-active');
            })
            overlay.classList.add('product-active');
        })
    })
}
highlighProductClicked();

const vegetableGallery = document.querySelector('#vegetable-gallery');
let galleryImage = '';
let galleryImages = [
    {
        galleryImg: "VEGETABLE-1",
        description: "image of ugu leaf(fluted pumpkin)",
    },
    {
        galleryImg: "VEGETABLE-2",
        description: "image of ugu leaf(fluted pumpkin)",    
    },
    {
        galleryImg: "VEGETABLE-4",
        description: "image of ugu leaf(fluted pumpkin)",
    },
    {
        galleryImg: "VEGETABLE-1",
        description: "image of ugu leaf(fluted pumpkin)"  
    }
]

galleryImages.forEach(image => {
    galleryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    vegetableGallery.innerHTML = galleryImage;
})

const moreVegetableGallery = document.querySelector('#more-gallery--vegetable');
galleryImages.forEach(image => {
    galleryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    moreVegetableGallery.innerHTML = galleryImage;
})


const showMore = document.querySelector('.load-more')
const moreImage = document.querySelector('.more-gallery');
showMore.addEventListener('click', () => {
    const status = moreImage.getAttribute('aria-controls');
    if(status === 'hidden'){
        moreImage.setAttribute('aria-controls', 'visible');
        moreImage.style.display = 'grid';
        moreImage.style.transform = 'scaleY(1)';    
        showMore.innerText = 'Show Less'
    }else{
        moreImage.setAttribute('aria-controls', 'hidden');
        moreImage.style.display = 'none';
        moreImage.style.transform = 'scaleY(0)';
        showMore.innerText = 'Show More '
    }
    
})
const offers = Array.from(offersContainer.children);
const indicateClickedOffer = () => {
    offers.forEach(offer => {
        offer.addEventListener('click', (e) => {
            offers.forEach(offer => {
                offer.classList.remove('active')
            })
            e.currentTarget.classList.add('active')
        })
        
        
    })
}
indicateClickedOffer()