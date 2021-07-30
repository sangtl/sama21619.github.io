const slideItem = document.querySelectorAll('.slide');
const slideLength = slideItem.length;
const nextSlideItem = document.querySelector('.icon-right');
const prevSlideItem = document.querySelector('.icon-left');
const btnActives = document.querySelectorAll('.btn');

let dem = 0 ;
var interval;

function viewNextItem () {

    slideItem[dem].classList.remove('active');
    btnActives[dem].classList.remove('active');

    if(dem < (slideLength -1))
    {
        dem++;
    }
    else{
        dem=0;
    }
    slideItem[dem].classList.add('active');
    btnActives[dem].classList.add('active');

    clearInterval(interval);
    timer();
    
}


var timer = function () {
        interval = setInterval(function () {
           viewNextItem()
        }, 5000);
    };




function viewPreviousItem () {
    slideItem[dem].classList.remove('active');
    btnActives[dem].classList.remove('active');
    if(dem >0)
    {
        dem--;
    }
    else {
        dem = slideLength-1;
    }
    slideItem[dem].classList.add('active');
    btnActives[dem].classList.add('active');
    
}

window.onload = function () {
    
    interval = setInterval(function () {
        viewNextItem()
     }, 5000);
}

nextSlideItem.onclick = function () {
    viewNextItem();
}
prevSlideItem.addEventListener('click', viewPreviousItem);
///END SLIDE



const items = document.querySelectorAll('.sanpham');
const itemLinks = document.querySelectorAll('.option-product__link');
const comboItem = document.querySelector('.select__product-combo');
const quanItem = document.querySelector('.select__product-quan');
const aoItem = document.querySelector('.select__product-ao');

function showCombo () {

    items[0].classList.add('active');
    itemLinks[0].classList.add('active');
    
    items[1].classList.remove('active');
    itemLinks[1].classList.remove('active');

    items[2].classList.remove('active');
    itemLinks[2].classList.remove('active');

   
    
}

function showPant () {

    items[1].classList.add('active');
    itemLinks[1].classList.add('active');
    
    items[0].classList.remove('active');
    itemLinks[0].classList.remove('active');

    items[2].classList.remove('active');
    itemLinks[2].classList.remove('active');

   
    
}
function showAo () {

    items[2].classList.add('active');
    itemLinks[2].classList.add('active');
    
    items[0].classList.remove('active');
    itemLinks[0].classList.remove('active');

    items[1].classList.remove('active');
    itemLinks[1].classList.remove('active');

   
    
}

comboItem.onclick = function(e){
    showCombo();
    e.preventDefault();
}
quanItem.onclick = function (e){
    showPant();
    e.preventDefault();
}
aoItem.onclick = function(e){
    showAo();
    e.preventDefault();
}






//END SANPHAM__FOOTER

const beltItems = document.querySelectorAll('.daylung');
const beltLength = beltItems.length;
const nextBelt = document.querySelector('.next-icon') ;
const prevBelt = document.querySelector('.prev-icon') ;
let index = 0;

function showNextBelt () {

    beltItems[index].classList.remove('active');
    
    if(index < (beltLength -1))
    {
        index++;
    }
    else{
        index=0;
    }

    beltItems[index].classList.add('active');

    
    

   
    
}






function showPrevBelt () {
    beltItems[index].classList.remove('active');
    if(index >0)
    {
        index--;
    }
    else {
        index= beltLength-1;
    }
    beltItems[index].classList.add('active');
    
}

nextBelt.onclick = function () {
    showNextBelt();
}
prevBelt.addEventListener('click', showPrevBelt);

//end belt

// MODAL



var closeItems = document.querySelectorAll('.icon-modal');
var modalContain = document.querySelector('.Login');
var modalContainDK = document.querySelector('.Regis');
var modal = document.querySelector('.modal');
var login = document.querySelector('.dang-nhap');
var regis = document.querySelector('.dang-ky');


login.onclick = function (e){
    e.preventDefault();
    modal.classList.add('active');
    modalContain.classList.add('active');
    modalContainDK.classList.remove('active');


    
}

regis.onclick = function (e){
    e.preventDefault();
    modal.classList.add('active');

    modalContain.classList.remove('active');
    modalContainDK.classList.add('active');


    
}

closeItems[0].onclick = function(){
   
    modal.classList.remove('active');
}
closeItems[1].onclick = function(){
   
    modal.classList.remove('active');
}

modal.onclick = function (){
    modal.classList.remove('active');

}
modalContain.onclick = function(e){
    e.stopPropagation();
}
modalContainDK.onclick = function(e){
    e.stopPropagation();
}




