$(document).ready(function(){


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










let navAlist = $('.a');



$(navAlist).each(()=>{

  $(this).on('mouseover', ()=>{

    this.addClass('aNav');


  });
  $(this).on('mouseout', ()=>{

    this.removeClass('aNav');


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
let navlinkS = document.querySelectorAll('.b');
let exiTModal = document.querySelector('.box-announce > .fa-x');

navlinkS.forEach(navlinK => {
  
  navlinK.addEventListener('click', (event) =>{
    announceCon.classList.add('announce-cons');
    document.body.style.overflow = 'hidden';
    event.preventDefault();


  });

});

// hireme btn under dev

// let mobBtns = document.querySelectorAll('.buttons');

// mobBtns.forEach(navbtns => {
  
//   navbtns.addEventListener('click', (e) =>{
//     announceCon.classList.add('announce-cons');
//     document.body.style.overflow = 'hidden';
//     e.preventDefault();


//   });

// });

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



// search bar

let searchIcon = $('.nav-btns > .search-icon');
let searchBar = $('.searchbar');


$(searchIcon).on('click', ()=>{
  searchBar.toggleClass('searBarani');

})

let searchIcons = $('nav > .search-icon');
let searchBars = $('.searchbar');


$(searchIcons).on('click', ()=>{

  searchBars.toggleClass('searBarani');


})


let searchInput = $('.searchInp');
let SearchBar = $('.searchbar');


$(searchInput).on('blur', () =>{

  SearchBar.toggleClass('searBarani');


});










// project page

let projectModal = $('.project-cons');
let projectLink = $('.projectbtn');
let exitProModal = $('.box-project i');


$(projectLink).on('click', (e)=>{

  e.preventDefault();
  projectModal.addClass('boxprojectmodal');
  document.body.style.overflow = 'hidden'

})


$(exitProModal).on('click', () =>{


  projectModal.removeClass('boxprojectmodal');
  document.body.style.overflow = 'visible'

})










// project thumbnail hover
let projImg = document.querySelectorAll('.proj-img-con');
let proImg = document.querySelectorAll('.proj-img-con > img');

let projbtns = document.querySelectorAll('.cover-img');
let getBtn = document.querySelectorAll('.proj-txt > button');


projImg.forEach((projImg, index) => {
  projImg.addEventListener('mouseover', () => {

    projbtns[index].classList.add('coverBtnani');

    
  });

  projImg.addEventListener('mouseout', () => {
    projbtns[index].classList.remove('coverBtnani');

  });



});


getBtn.forEach((getBtn, index) => {
  getBtn.addEventListener('click', () => {

    projbtns[index].classList.add('coverBtnani');

    
  });





});



});





// contactform Ajax

$(document).ready(function(){
  $('.contactForm').submit(function(e){

    e.preventDefault();

    var formContactData = $(this).serialize();

    $.ajax({ 
      url:'../database/contact-form.php',
      type: 'POST',
      data: formContactData,
      success: function(response){
        console.log(response);

        $('.successModal').css('display', 'block');
        $('.contactForm')[0].reset();

        setTimeout(function(){

          $('.successModal').css('display', 'none');


        },2000);

      },
      error:function(xhr, status, error){

        console.error('Request failed. Status:', status, 'Error:', error);
                
      }

    });

  });


});

