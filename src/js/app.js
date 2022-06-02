import '../scss/app.scss';
import Swiper from 'swiper';
import 'swiper/css';//импорт свиперов
/* Your JS Code goes here */



const swiper=new Swiper(
    '.swiper',
    {
        effect:'cards',

        cardsEffect:{
            rotate:true
        },

        spaceBetween:0,
        direction: 'horizontal',
        loop:true,
        autoplay: {
            delay: 1,
       }
    }
);

const ddmenuon= document.getElementById('ddmenuon');
ddmenuon.addEventListener('click',function(e){
    const ddmenu= document.getElementById('ddmenu');
    ddmenu.classList.toggle('on-place');
})
const ddmenuoff= document.getElementById('ddmenuoff');
ddmenuoff.addEventListener('click',function(e){
    const ddmenu= document.getElementById('ddmenu');
    ddmenu.classList.toggle('on-place');
})
const mapblock = document.getElementById('mapblock');
mapblock.addEventListener('click', function() {
    
    const boxmap = document.getElementById('boxmap');
    boxmap.classList.toggle("pointer-events-all");

});
const category = document.getElementById('category');
category.addEventListener('click', function() {
    
    const category_list = document.getElementById('category-list');
    
    category_list.classList.toggle("max-height");
    

});


window.addEventListener('scroll', function() {
    
    const p_section = document.getElementById('parallax');
    const p_section2 = document.getElementById('parallax2');
    const p_section3 = document.getElementById('parallax3');

    //console.log( this.scrollY + 'px' );
    p_section.style.backgroundPositionY = -this.scrollY*0.4 + 'px';
    p_section2.style.backgroundPositionY = -this.scrollY*0.5  + 'px';
    p_section3.style.backgroundPositionY = -this.scrollY*0.6  + 'px';
});
document.addEventListener('resize', function (){ 
    const header= this.document.getElementById('header');
    header.style.width = screen.width + "px";
    //console.log(screen.width + "px" );
})
document.addEventListener("mousemove", function(e){
    const p_section = document.getElementById('parallax');
    const p_section2 = document.getElementById('parallax2');
    const p_section3 = document.getElementById('parallax3');

    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    
    let _mouseX = e.clientX;
    //console.log(_mouseX+ " X" );

    let move =  (_mouseX - _w) * 0.01 + "px";
    p_section.style.backgroundPositionX = move;
    p_section2.style.backgroundPositionX = move;
    p_section3.style.backgroundPositionX = move;
})


/* Demo JS */
import './demo.js';
