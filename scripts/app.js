const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector('.submenu-btn');
const subMenu = document.querySelector('.submenu');
const navIcon = document.querySelector('.nav-icon');
const menu = document.querySelector('.menu')
const overlayElem = document.querySelector('.overlay')
const closeMenuBtn = document.querySelector('#close-menu-btn')
const cartIcon = document.querySelector('.cart-icon')
const closeCartBtn = document.querySelector('#close-cart-btn')
const navCart = document.querySelector('.nav-cart')

navIcon.addEventListener('click',() => {
    menu.classList.remove('-right-64');
    menu.classList.add('right-0');
    overlayElem.classList.add('overlay--active');
})

closeMenuBtn.addEventListener('click',() => {
    menu.classList.add('-right-64');
    menu.classList.remove('right-0');
    overlayElem.classList.remove('overlay--active');
})

cartIcon.addEventListener('click',() => {
    navCart.classList.remove('-left-64');
    navCart.classList.add('left-0');
    overlayElem.classList.add('overlay--active');
})

closeCartBtn.addEventListener('click', () => {
    navCart.classList.add('-left-64');
    navCart.classList.remove('left-0');
    overlayElem.classList.remove('overlay--active');
})

overlayElem.addEventListener('click',() => {
    menu.classList.add('-right-64');
    menu.classList.remove('right-0');
    overlayElem.classList.remove('overlay--active');
    navCart.classList.add('-left-64');
    navCart.classList.remove('left-0');
})

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

submenuOpenBtn.addEventListener('click',() => {
    subMenu.classList.toggle('submenu--active');
    subMenu.parentElement.classList.toggle('text-orange-300')
});