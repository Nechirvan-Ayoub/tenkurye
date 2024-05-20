//menu button
const menuBtn=document.querySelector('.navbar-toggler');
const menuBtnTop=document.querySelector('.menu-btn-top');
const menuBtnMid=document.querySelector('.menu-btn-mid');
const menuBtnBottom=document.querySelector('.menu-btn-bottom');
const navContent=document.querySelector('.nav-content');

menuBtn.addEventListener('click',()=>{
  menuBtnTop.classList.toggle('rotate');
  menuBtnBottom.classList.toggle('rotate');
  menuBtnMid.classList.toggle('rotate');
  navContent.classList.toggle('visible');
});