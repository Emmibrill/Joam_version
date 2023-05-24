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




//add active state to the farm section navigation
const listContainer = document.querySelector('.list-container')
const farmList = Array.from(listContainer.children);
console.log(farmList)
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

const farmNav = document.querySelectorAll('[data-target]');
const farmContent = document.querySelectorAll('[data-content]');
const showFarmSection = () => {
    Array.from(farmNav).forEach(nav => {
        nav.addEventListener('click', () => {
            const farmContent = document.querySelector(nav.dataset.target);
            console.log(farmContent);
            Array.from(farmNav).forEach(nav => {
                nav.classList.remove('active')
            })
            farmContent.classList.add('active')
        })
    })
}
showFarmSection()
