
let navMenu = document.querySelector('.nav-hamburger');
let navList = document.querySelector('.nav-list');

navMenu.addEventListener('click', () =>{

  navList.classList.toggle('nav-list-click');

});



let navAlist = document.querySelectorAll('.a');

navAlist.forEach(navlistA =>{

  navlistA.addEventListener('mouseover', ()=>{

    navlistA.classList.add('aNav');

  });

  navlistA.addEventListener('mouseout', ()=>{

    navlistA.classList.remove('aNav');
    

  });

});




function downloadcv (){

let path = '../assets/downloads/Jericho-Paningbatan-Resume.pdf'
let a = document.createElement('a');

a.href = path;
a.download = 'Jericho-Paningbatan-Resume.pdf';

document.body.appendChild(a);
a.click();
document.body.removeChild(a);

}



