let navMenu = document.querySelector('.fa-bars');
let navList = document.querySelector('.nav-list');
let faX = document.querySelector('.fa-x');
let check = true;

navMenu.addEventListener('click', barClick)
faX.addEventListener('click', xClick)



function xClick(){

  navList.classList.toggle('nav-list-click');

  if (check) {
    navMenu.style.display = 'none';
    faX.style.display = 'block';
    
  } else {
    navMenu.style.display = 'block';
    faX.style.display = 'none';
  }

  check = !check;

};

function barClick(){

  navList.classList.toggle('nav-list-click');

  if (check) {
    navMenu.style.display = 'none';
    faX.style.display = 'block';
  } else {
    navMenu.style.display = 'block';
    faX.style.display = 'none';
  }

  check = !check;

};










let navAlist = document.querySelectorAll('.a');

navAlist.forEach(navlistA =>{

  navlistA.addEventListener('mouseover', ()=>{

    navlistA.classList.add('aNav');

  });

  navlistA.addEventListener('mouseout', ()=>{

    navlistA.classList.remove('aNav');
    

  });

});








// function isElementInViewport(element) {
//   var elementRect = element.getBoundingClientRect();
//   return (
//     elementRect.top >= 0 &&
//     elementRect.left >= 0 &&
//     elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }




var announceCon = document.querySelector('.announce-con');
let navlinkS = document.querySelectorAll('.a');
let exiTModal = document.querySelector('.box-announce > .fa-x');

navlinkS.forEach(navlinK => {
  
  navlinK.addEventListener('click', (event) =>{
    announceCon.classList.add('announce-cons');
    document.body.style.overflow = 'hidden';
    event.preventDefault();


  });

});

let mobBtns = document.querySelectorAll('.buttons');

mobBtns.forEach(navbtns => {
  
  navbtns.addEventListener('click', (e) =>{
    announceCon.classList.add('announce-cons');
    document.body.style.overflow = 'hidden';
    e.preventDefault();


  });

});

let navBtns = document.querySelectorAll('.link-btns');

navBtns.forEach(navbTns => {
  
  navbTns.addEventListener('click', (e) =>{
    announceCon.classList.add('announce-cons');
    document.body.style.overflow = 'hidden';
    e.preventDefault();


  });

});







exiTModal.addEventListener('click', () =>{

  announceCon.classList.remove('announce-cons');
  document.body.style.overflow = 'auto';


});





let searchIcon = document.querySelector('.nav-btns > .search-icon');
let searchBar = document.querySelector('.searchbar');

searchIcon.addEventListener('click', () => {

  searchBar.classList.toggle('searBarani');

});


let searchIcons = document.querySelector('nav > .search-icon');
let searchBars = document.querySelector('.searchbar');

searchIcons.addEventListener('click', () => {

  searchBars.classList.toggle('searBarani');

});


let searchInput = document.querySelector('.searchInp');
let SearchBar = document.querySelector('.searchbar');

searchInput.addEventListener('blur', ()=>{

    SearchBar.classList.toggle('searBarani');


});


let BoDy = document.querySelectorAll('body');
let SearBar = document.querySelector('.searchbar');

