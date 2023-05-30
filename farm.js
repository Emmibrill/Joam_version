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



//display the various products in the vegetable farm section

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

//display the various pictures in the vegetable gallery
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

//images in the poultry gallery when the more button is clicked
const moreVegetableGallery = document.querySelector('#more-gallery--vegetable');
galleryImages.forEach(image => {
    galleryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    moreVegetableGallery.innerHTML = galleryImage;
})


const showMore = document.querySelector('.load-more');
showMore.addEventListener('click', () => {
    const moreImage = document.querySelector('.more-gallery');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMore);
})

//show more images available in the farm gallery section
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

//display the various products in the poultry farm section
const poultryProductsContainer = document.querySelector('#poultry-gallery');
console.log(poultryProductsContainer);
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

//display the images in the poultry gallery
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

//images in the poultry gallery when the more button is clicked
const morePoultryGallery = document.querySelector('#more-gallery--poultry');
poultryImages.forEach(image => {
    poultryImage += `
        <img class="gallery-image" src="${image.galleryImg}.jpg" alt="${image.description}">
    `
    morePoultryGallery.innerHTML = poultryImage;
})

const showMorePoultry = document.querySelector('#poultry-load-more');
showMorePoultry.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--poultry');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMorePoultry);
})

//highlights the offer
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