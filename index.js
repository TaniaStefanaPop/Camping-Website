/*=============SHOW MENU============*/
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

/*=============MENU SHOW============*/
/*Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu')
    })
}      
/*=============MENU HIDDEN============*/
/*Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu')
    })
}

/*=============REMOVE MOBILE MENU==========*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu')
    //When we click on each nav_link we remove the menu//
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===========CHANGE BACKGROUND HEADER============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the bg_header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg_header')
                       : header.classList.remove('bg_header')
}
window.addEventListener('scroll', bgHeader)

/*=====================GSAP ANIMATION=========================*/
gsap.from('.home_img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home_img-3', 1.2, {opacity: 0, y: 200, delay: .5})
gsap.from('.home_data', 1.2, {opacity: 0, y: -60, delay: 1})
gsap.from('.home_bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home_bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home_img-1', 1.2, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home_img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})