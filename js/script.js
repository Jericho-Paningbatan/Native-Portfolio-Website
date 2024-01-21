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



let infoWebcon = document.querySelector('.info-webcon');
let openInfoBtn = document.querySelector('.btn-info-web');
let openInfoBtn2 = document.querySelector('.btn-info-web2');

let lessthan = document.querySelector('.btn-info-web .fa-less-than');
let greaterthan = document.querySelector('.btn-info-web .fa-greater-than');

let clickisTrue = true;


openInfoBtn.addEventListener('click', openInfowebcon)
openInfoBtn2.addEventListener('click', open2Infowebcon)


function openInfowebcon (){

  if(clickisTrue){
    openInfoBtn.style.left = '49.6%';
    lessthan.style.display = 'block';
    greaterthan.style.display = 'none';
    infoWebcon.classList.add('info-webconJS');
  }else{

    greaterthan.style.display = 'block';
    lessthan.style.display = 'none';
    infoWebcon.classList.remove('info-webconJS');
    openInfoBtn.style.left = '';

  }

  clickisTrue = !clickisTrue;

};


function open2Infowebcon (){

let readBtn = document.querySelector('.readbtn');
let closeBtn = document.querySelector('.closebtn');


  if(clickisTrue){
    
    readBtn.style.display = 'none';
    closeBtn.style.display = 'block';

    infoWebcon.classList.add('info-webconJS');
  }else{

    readBtn.style.display = 'block';
    closeBtn.style.display = 'none';

    infoWebcon.classList.remove('info-webconJS');

  }

  clickisTrue = !clickisTrue;

};











let infoWebcon2 = document.querySelector('.info-webcon2');
let openInfoBtn3 = document.querySelector('.btn-info-web3');
let openInfoBtn4 = document.querySelector('.btn-info-web4');

let lessthan2 = document.querySelector('.btn-info-web3 .fa-less-than');
let greaterthan2 = document.querySelector('.btn-info-web3 .fa-greater-than');

let clickisTrue2 = true;


openInfoBtn3.addEventListener('click', openInfowebcon3)
openInfoBtn4.addEventListener('click', open4Infowebcon)



function openInfowebcon3 (){

  if(clickisTrue2){

   

    lessthan2.style.display = 'block';
    greaterthan2.style.display = 'none';
    infoWebcon2.classList.add('info-webconJS2');
  }else{

    greaterthan2.style.display = 'block';
    lessthan2.style.display = 'none';
    infoWebcon2.classList.remove('info-webconJS2');

  }

  clickisTrue2 = !clickisTrue2;

};





function open4Infowebcon (){

  let readBtn2 = document.querySelector('.readbtn2');
  let closeBtn2 = document.querySelector('.closebtn2');
  
 
    if(clickisTrue2){
      

     
      readBtn2.style.display = 'none';
      closeBtn2.style.display = 'block';
  
      infoWebcon2.classList.add('info-webconJS2');
    }else{
     
  
      readBtn2.style.display = 'block';
      closeBtn2.style.display = 'none';
  
      infoWebcon2.classList.remove('info-webconJS2');
  
    }
  
    clickisTrue2 = !clickisTrue2;
  
  };
  









function downloadcv (){

let path = '../assets/downloads/Jericho-Paningbatan-Resume.pdf'
let a = document.createElement('a');

a.href = path;
a.download = 'Jericho-Paningbatan-Resume.pdf';

document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}




function isElementInViewport(element) {
  var elementRect = element.getBoundingClientRect();
  return (
    elementRect.top >= 0 &&
    elementRect.left >= 0 &&
    elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var span = document.getElementById('span');


function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent =  h +"-"+('0'+ m)+'-'+ s;
    
}

setInterval(time, 1000);



function mainAni() {
 var TextCon = document.querySelector('.text-con > .hi-txt');

  if (isElementInViewport(TextCon)) {
    TextCon.classList.add('mAinAni');

  } else {
    TextCon.classList.remove('mAinAni');


  }
}


function mainAni2() {
  var TextCon = document.querySelector('.text-con > h1');
 
   if (isElementInViewport(TextCon)) {
     TextCon.classList.add('mAinAni2');
 
   } else {
     TextCon.classList.remove('mAinAni2');
 
 
   }
 }

 
function mainAni3() {
  var TextCon = document.querySelector('.text-con > .front-end');
 
   if (isElementInViewport(TextCon)) {
     TextCon.classList.add('mAinAni3');
 
   } else {
     TextCon.classList.remove('mAinAni3');
 
 
   }
 }







function addhtml() {
  let myElement = document.getElementById('graph1');

  if (isElementInViewport(myElement)) {
    myElement.classList.add('html-scrolljs');

  } else {
    myElement.classList.remove('html-scrolljs');


  }
}


function addcss() {
  let cssElement = document.getElementById('graph2');

  if (isElementInViewport(cssElement)) {
    cssElement.classList.add('css-scrolljs');

  } else {
    cssElement.classList.remove('css-scrolljs');

  }
}


function addjs() {
  let jsElement = document.getElementById('graph3');

  if (isElementInViewport(jsElement)) {
    jsElement.classList.add('js-scrolljs');

  } else {
    jsElement.classList.remove('js-scrolljs');

  }
}

function addreact() {
  let reactElement = document.getElementById('graph4');

  if (isElementInViewport(reactElement)) {  
    reactElement.classList.add('react-scrolljs');
  } else {
    reactElement.classList.remove('react-scrolljs');
  }
}


function addbootsrap() {
  let btElement = document.getElementById('graph5');

  if (isElementInViewport(btElement)) {
    btElement.classList.add('bootsrap-scrolljs');

  } else {
    btElement.classList.remove('bootsrap-scrolljs');

  }
}



 function handleScroll() {
  addhtml();
  addcss();
  addjs();
  addreact();
  addbootsrap();
  mainAni();
  mainAni2();
  mainAni3();


}

function onloadS() {
 
  mainAni();
  mainAni2();
  mainAni3();

}


// Listen for scroll events and call handleScroll function
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', onloadS);





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

