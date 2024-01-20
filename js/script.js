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

function addhtml() {
  var myElement = document.getElementById('graph1');

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
}

// Listen for scroll events and call handleScroll function
window.addEventListener('scroll', handleScroll);
