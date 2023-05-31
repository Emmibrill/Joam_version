const navToggler = document.querySelector('.hambugger');
const navList = document.querySelector('.nav__list');
const nav_list = document.querySelectorAll('.list');
const navBar = document.querySelector('.nav__bar');
const farmNavs = document.querySelectorAll('[data-target]');
const farmContents = document.querySelectorAll('[data-content]');
const offersContainer  = document.querySelectorAll('.offers');
const allShowMore = document.querySelectorAll('.load-more');
const listContainer = document.querySelector('.list-container');
const farmList = Array.from(listContainer.children);
const allProductBody = document.querySelectorAll('.products-body');

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

//declare active main navigation button on click
function declareActiveMainNav() {
    Array.from(nav_list).forEach(nav => {
        nav.addEventListener('click', () => {
            nav_list.forEach(nav => {
                nav.classList.remove('active')
            })
          nav.classList.add('active')
        })
    })
}

//display the different farm sections when their respective nav is clicked
const showFarmSection = () => {
    Array.from(farmNavs).forEach(farmNav => {
        farmNav.addEventListener('click', () => {
            const farmContent = document.querySelector(farmNav.dataset.target);
            Array.from(farmContents).forEach(content => {
                content.classList.remove('farmActive');
            })
            farmContent.classList.add('farmActive')
           
        })
    })
}

/*add active state to the farm section navigator by changing the color to red 
and also giving it a translateX proper*/
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

//display more images available in the farm gallery section when the show more button is being clidked
const showMoreImage = (currentStatus, targetImages, showMoreBtn) => {
    if(currentStatus === 'hidden'){
        targetImages.setAttribute('aria-controls', 'visible');
        targetImages.style.display = 'grid';
        targetImages.style.transform = 'scaleY(1)';    
        showMoreBtn.innerText = 'Show Less'
    }else{
        targetImages.setAttribute('aria-controls', 'hidden');
        targetImages.style.display = 'none';
        targetImages.style.transform = 'scaleY(0)';
        showMoreBtn.innerText = 'Show More '
    }
}

//highlights the selected product showing other features
const highlighProductClicked = () => {
    for (let i = 0; i < allProductBody.length; i++) {
        const productBody = allProductBody[i];
        const Farmproducts = (productBody.children);
        Array.from(Farmproducts).forEach(product => {
            product.addEventListener('click', (e) => {
                const target = e.currentTarget
                const allOverlay = target.querySelector('.product-container-overlay');
                Array.from(Farmproducts).forEach(product => {
                    product.querySelector('.product-container-overlay').classList.remove('product-active');
                })
                
                allOverlay.classList.add('product-active');
            })
        })  
    }
}

//highlights the offer by giving a white border to each when clicked on
const indicateClickedOffer = () => {
    for (let i = 0; i < offersContainer.length; i++) {
        const element = offersContainer[i];
        const eachOfferCont = (element.children);
        Array.from(eachOfferCont).forEach(offer => {
            offer.addEventListener('click', (e) => {
                const targetOffer = e.currentTarget
                Array.from(eachOfferCont).forEach(offer => {
                    offer.classList.remove('active')
                })
                targetOffer.classList.add('active')
            })
        })
    }
}

declareActiveMainNav();

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

showFarmSection()
activeFarmNav()


//the various products in the vegetable farm section

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


//various pictures in the vegetable gallery
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

//images in the poultry gallery (more images)
const moreVegetableGallery = document.querySelector('#more-gallery--veg');
galleryImages.forEach(image => {
    galleryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    moreVegetableGallery.innerHTML = galleryImage;
})

//the various products in the poultry farm section
const poultryProductsContainer = document.querySelector('#poultry-products');
let thePoultryProducts = '';
let poultryProducts = [
    {
        product: "black-layer-chicken",
        productTitle: "black-layer-chicken-posing",
        link: "#"
    },
    {
        product: "white-broiler",
        productTitle: "broiler",
        description: "white-broiler-watchig-steps",
        link: "#"
    },
    {
        product: "fresh-eggs",
        productTitle: "fresh eggs",
        description: "basket-of-fresh-eggs",
        link: "#"
    },
    {
        product: "spotted-noiler-chicken",
        productTitle: "noiler",
        description: "spotted-noiler-chicken-in-grass",
        link: "#"
    }
]
poultryProducts.forEach(poultryProduct => {
    thePoultryProducts += `
    <div class="product-container">
        <div class="product-image">
            <img src="${poultryProduct.product}.jpg" alt="${poultryProduct.description}">
            <div class="farm-logo-container">
                <div class="farm-product-logo"></div>
            </div>
        </div>
        <div class="product-description">
            <h4 class="product-description-content">${poultryProduct.productTitle}</h4>
        </div>
        <div class="product-container-overlay">
            <a class="overlay-button" href="${poultryProduct.link}">shop now</a>
        </div>
    </div>
    `
    poultryProductsContainer.innerHTML = thePoultryProducts;
    
})

//images in the poultry gallery
const poultryGallery = document.querySelector('#poultry-farm-gallery');
let poultryImage = '';
let poultryImages = [
    {
        galleryImg: "black-white-hen",
        description: "image-of-a-black-white-feathered layer",
    },
    {
        galleryImg: "fierce-chicken-gazes-at-camera",
        description: "fierce-chicken-gazes-at-camera",    
    },
    {
        galleryImg: "white-chicken-in-a-brood",
        description: "white-chicken-in-a-brood",
    },
    {
        galleryImg: "cock-a-doodle-do",
        description: "image-of-cock-a-doodle-do"  
    }
]

poultryImages.forEach(image => {
    poultryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    poultryGallery.innerHTML = poultryImage;
})

//images in the poultry gallery (more images)
const morePoultryGallery = document.querySelector('#more-gallery--poultry');
poultryImages.forEach(image => {
    poultryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    morePoultryGallery.innerHTML = poultryImage;
})

const showMoreVeg = document.querySelector('#veg-load-more');
showMoreVeg.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--veg');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMoreVeg);
})

const showMorePoultry = document.querySelector('#poultry-load-more');
showMorePoultry.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--poultry');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMorePoultry);
})

highlighProductClicked()
indicateClickedOffer()
const pageUp = document.querySelector('.page-up');
window.addEventListener('scroll', () => {
    if(scrollY > 1000){
        console.log('hey')
        pageUp.classList.add('show-page-up')
    }else{pageUp.classList.remove('show-page-up')}
})

