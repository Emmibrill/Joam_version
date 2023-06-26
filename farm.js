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
const joamActDetails = document.querySelector('.farm-act');
const farmOrganogramToggler = document.querySelector('.organogram-container--farm');

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

const displayNoProduct = (targetProducts, shopNowBtn) => {
    if(targetProducts.children.length <= 0){
        //newDiologueBox()
        //return;
        //return alert('there is no product at the moment')
    }
}
const shopNow = document.querySelectorAll('.farm-button--shop');
console.log(shopNow)
for(i = 0; i < shopNow.length; i++){
    const shopNowBtn = shopNow[i]
    shopNowBtn.addEventListener('click', (e) => {
        const currenTar = e.currentTarget;
        const proBox = currenTar.parentElement.previousElementSibling;
        const proBdy = proBox.querySelectorAll('.products-body')
        console.log(proBdy)
        console.log(true)
        //displayNoProduct(proBdy, currenTar)
    })
}

//display more images available in the farm gallery section when the show more button is being clidked
const showMoreImage = (currentStatus, targetImages, showMoreBtn) => {
    if(targetImages.children.length <= 0){
        newDiologueBox()
        return;
        //return alert('there is no product at the moment')
    }
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


function newDiologueBox(){
    const theDialogueBox = document.createElement('div');
    theDialogueBox.classList.add('farm-dialogue-box');
    const theDialogueContent = `
    <div class="dialogue-box">
    <h1 class="opps">opps!</h1>
    <h3 class="sorry">sorry there is no product at the moment</h3>
    <i class="fa-solid fa-face-smile"></i>
    
    <button class="dialogue-box-button">okay</button>
    </div>
    `
    theDialogueBox.innerHTML = theDialogueContent;
    document.body.appendChild(theDialogueBox)
    const removeDialogueBox = theDialogueBox.querySelector('.dialogue-box-button');
    removeDialogueBox.addEventListener('click', removeBox)

    function removeBox(){
        let theButton = this.parentElement.parentElement;
        theButton.style.display = 'none'
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
                const overlayButton = target.querySelector('.overlay-button');
                overlayButton.addEventListener('click', () => {
                    createPriceList()
                })
                
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
        link: "#prices-con-veg"
    },
    {
        product: "FRESH-RAINFALL-ON-LEAF",
        productTitle: "good vegetable pods",
        link: "#prices-con-veg"
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
        link: "#prices-con-poultry"
    },
    {
        product: "white-broiler",
        productTitle: "broiler",
        description: "white-broiler-watchig-steps",
        link: "#prices-con-poultry"
    },
    {
        product: "fresh-eggs",
        productTitle: "fresh eggs",
        description: "basket-of-fresh-eggs",
        link: "#prices-con-poultry"
    },
    {
        product: "spotted-noiler-chicken",
        productTitle: "noiler",
        description: "spotted-noiler-chicken-in-grass",
        link: "#prices-con-poultry"
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


/*const iii = document.querySelector('.products')
console.log(iii)
const shopNow = document.querySelectorAll('.farm-button--shop')
for (let i = 0; i < shopNow.length; i++) {
    const shopNowButton = shopNow[i];
    console.log(shopNowButton)
    shopNowButton.addEventListener('click', () => {
        const eachproduct = shopNowButton.parentElement.previousElementSibling.children;
        console.log(eachproduct)
        const pro = eachproduct.children
        console.log(pro)
         //noProductsForNow(targetProduct)
    })
    
}
*/
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
const showMoreCassava = document.querySelector('#cass-load-more');
showMoreCassava.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--cassava');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMoreCassava);
})
const showMorePalm = document.querySelector('#palm-load-more');
showMorePalm.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--palm');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMorePalm);
})
const showMorePlantain = document.querySelector('#plantain-load-more');
showMorePlantain.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--plantain');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMorePlantain);
})
const showMoreGoat = document.querySelector('#goat-load-more');
showMoreGoat.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--goat');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMoreGoat);
})
const showMorePig = document.querySelector('#pig-load-more');
showMorePig.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--pig');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMorePig);
})
const showMoreFish = document.querySelector('#fish-load-more');
showMoreFish.addEventListener('click', () => {
    const moreImage = document.querySelector('#more-gallery--fish');
    const status = moreImage.getAttribute('aria-controls');
    showMoreImage(status, moreImage, showMoreFish);
})


const orderNowButton = document.querySelectorAll('.farm-button--shop');
for (let i = 0; i < orderNowButton.length; i++) {
    const orderButton = orderNowButton[i];
    orderButton.addEventListener('click', () =>{
        return createPriceList();
    })
    
}

function createPriceList() {
    const farmPricesContainer = document.createElement('div');
    farmPricesContainer.classList.add('farm-prices-container');
    const theFarmPricesContent = `
    <div class="prices-wrapper">
                <h1 class="prices-heading">joam farm ltd price listing</h1>

                <div class="container-wrapper">
                    <div class="prices-container" id="prices-con-veg">

                        <h2 class="type-of-farm">vegetable (ugu) farm</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>green vegetable (a bundle) :</li>
                                            <li>vegetable pod :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>2000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>1000</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-cassava">
                        <h2 class="type-of-farm">cassava farm</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>a barrow load of cassava :</li>
                                            <li>a basin of processed garri :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>2000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>2500</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-palm">
                        <h2 class="type-of-farm">palm plantation</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>one head of palm fruit :</li>
                                            <li>one gallon of red oil :</li>
                                            <li>four gallon of red oil :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>1500</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>2000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>3500</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-poultry">
                        <h2 class="type-of-farm">poultry farm</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>old layer :</li>
                                            <li>broiler :</li>
                                            <li>noiler :</li>
                                            <li>a crate of egg :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>5000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>8000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>6000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>2500</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-plantain">
                        <h2 class="type-of-farm">plantain plantation</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>a bundle of plantain (12 bunches) :</li>
                                            <li>plantain sucker :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>75000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>450</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-goat">
                        <h2 class="type-of-farm">goat farm</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>benue goat :</li>
                                            <li>sheep(aturu) :</li>
                                            <li>ram(ebule) :</li>
                                            <li>hausa goat :</li>
                                            <li>organic manure(50kg) :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>45000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>42000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>48000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>6000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>10000</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-piggery">
                        <h2 class="type-of-farm">piggery</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>mature pig :</li>
                                            <li>organic manure :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>60000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>10000</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                    <div class="prices-container" id="prices-con-fishery">
                        <h2 class="type-of-farm">fishery</h2>
                        <div class="price-container">
                            <div class="product-name">
                                <ul class="p-name">
                                    <li><span class="p-n">product name</span>
                                        <ul>
                                            <li>large fish :</li>
                                            <li>medium sized fish :</li>
                                            <li>fingerlings :</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-price">
                                <div class="product-name">
                                    <ul class="p-name">
                                        <li><span class="p-p">product price</span>
                                            <ul>
                                                <li><i class="fa-solid fa-naira-sign"></i>10000</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>6500</li>
                                                <li><i class="fa-solid fa-naira-sign"></i>80</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a class="proceed-to-order" href="#contact">proceed order</a>
                    </div>
                </div>
            </div>
    `

    farmPricesContainer.innerHTML = theFarmPricesContent;
    document.body.appendChild(farmPricesContainer);
    const order = farmPricesContainer.querySelectorAll('.proceed-to-order');
    for (let i = 0; i < order.length; i++) {
    const orderButton = order[i];
    orderButton.addEventListener('click', () => {
        farmPricesContainer.remove()
        return location.reload();
    })
    
   }
}



highlighProductClicked()
indicateClickedOffer()
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

//toggle the joam farm bank details
joamActDetails.addEventListener('click', () => {
    toggle(joamActDetails)
})
farmOrganogramToggler.addEventListener('click', () => {
    toggle(farmOrganogramToggler)
})
function toggle(destination){
    destination.classList.toggle('Active')
    destination.classList.toggle('fagsActive')
    destination.classList.toggle('colorActive')
    destination.classList.toggle('srokeActive')
}

