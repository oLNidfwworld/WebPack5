import '../scss/app.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

/* Your JS Code goes here */

set_bg_parallax_postitiony()
set_timers()




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
if(mapblock!=null){
    mapblock.addEventListener('click', function() {
    
        const boxmap = document.getElementById('boxmap');
        boxmap.classList.toggle("pointer-events-all");
    
    });
}
    
const category = document.getElementById('category');
if(category!=null){
    category.addEventListener('click', function() {
    
        const category_list = document.getElementById('category-list');
        
        category_list.classList.toggle("max-height");
        
    
    });
}
let step=0;
const more = document.getElementById('more');
if(more!=null){
    more.addEventListener('click', function() {
    
        let gallery = document.getElementById('gallery');
        if(step==0){
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/4.png"><img src="../assets/img/4.png"></a>';
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/5.png"><img src="../assets/img/5.png"></a>';
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/6.png"><img src="../assets/img/6.png"></a>';
            step+=1;
        }else if(step==1){
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/7.png"><img src="../assets/img/7.png"></a>';
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/8.png"><img src="../assets/img/8.png"></a>';
            gallery.innerHTML+='<a data-fancybox="g" data-src="../assets/img/9.png"><img src="../assets/img/9.png"></a>';
            step+=1;
            more.innerHTML = "Загружено всё";
        }
    });
}

window.addEventListener('scroll', function() {
    set_bg_parallax_postitiony();
    
    //console.log( pageYOffset + 'px' );
});
document.addEventListener('resize', function (){ 
    const header= this.document.getElementById('header');
    header.style.width = screen.width + "px";
    //console.log(screen.width + "px" );
})
document.addEventListener("mousemove", function(e){
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = -e.clientX;
    let move =  (_mouseX - _w) * 0.05 + "px";

    const p_section = document.getElementById('parallax');
    const p_section2 = document.getElementById('parallax2');
    const p_section3 = document.getElementById('parallax3');
    const p_section4 = document.getElementById('parallax4');
    const p_section5 = document.getElementById('parallax5');
    const p_section6 = document.getElementById('parallax6');
    const p_section7 = document.getElementById('parallax7');
    if(p_section!=null){
        p_section.style.backgroundPositionX = move;
        p_section2.style.backgroundPositionX = move;
        p_section3.style.backgroundPositionX = move;

    }
    if(p_section4!=null){
        p_section4.style.backgroundPositionX = move;
    }
    if(p_section5!=null){
        p_section5.style.backgroundPositionX = move;
        p_section6.style.backgroundPositionX = move;
        p_section7.style.backgroundPositionX = move;
    }
    //console.log(_mouseX+ " X" );

    
})


function set_timers(){
    let hours = new Date().getHours();
    let mins =  new Date().getMinutes();
    let chasi = "d"
    let time = document.getElementById('time');
    let time2 = document.getElementById('time2');
    console.log(hours);
    if(hours>10 && hours<22){
        let time_until_close = 22-hours;
        if(mins>30){
            time_until_close-=1;
        }
        chasi = chto(chasi,time_until_close)

        time.innerHTML= "До закрытия: " + chasi;
        time2.innerHTML= "До закрытия: " + chasi;
    }else{
        if(hours==0){
            hours=24;
        }
        if(hours<22  ){
            hours+=24;
        }
        if(mins>30){
            time_until_close-=1;
        }
        let time_until_close = 34-hours;
        chasi = chto(chasi,time_until_close)
        time.innerHTML= "До открытия: " + chasi;
        time2.innerHTML= "До открытия: " + chasi;
    }
}
function chto(chasi,time_until_close){
    if(time_until_close ==0){
        chasi = "Скоро закроется!";
    }else if(time_until_close==1){
        chasi = (time_until_close) +" час" ;
    }else if(time_until_close>=2 && time_until_close<=4){
        chasi = (time_until_close) +" часа" ;
    }else if(time_until_close>=5){
        chasi = (time_until_close) +" часов" ;
    }
    return chasi;
}

function set_bg_parallax_postitiony(){
    
    //console.log("offset" + pageYOffset);
    //console.log("scroll" +this.scrollY);
    const p_section = document.getElementById('parallax');
    const p_section2 = document.getElementById('parallax2');
    const p_section3 = document.getElementById('parallax3');
    const p_section4 = document.getElementById('parallax4');
    const p_section5 = document.getElementById('parallax5');
    const p_section6 = document.getElementById('parallax6');
    const p_section7 = document.getElementById('parallax7');
    if(p_section!=null){
        p_section.style.backgroundPositionY = -pageYOffset*0.4 + 'px';
        p_section2.style.backgroundPositionY = -pageYOffset*0.5  + 'px';
        p_section3.style.backgroundPositionY = -pageYOffset*0.6  + 'px';
        

    }
    if(p_section4!=null){
        p_section4.style.backgroundPositionY = -pageYOffset*0.6  + 'px';
    }
    if(p_section5!=null){
        p_section5.style.backgroundPositionY = -pageYOffset*0.6  + 'px';
        p_section6.style.backgroundPositionY = -pageYOffset*0.6  + 'px';
        p_section7.style.backgroundPositionY = -pageYOffset*0.6  + 'px';
    }
}
const filesss = document.getElementById('myfile');
if(filesss!=null){
    filesss.addEventListener('change',function(){
        let string = document.getElementById('skolko');
        string.innerHTML= "Выбрано файлов " + filesss.files.length;
    })
}


const swiper_products=new Swiper(
    '.swiper-products',
    {
        effect:'slide',

        modules: [Navigation],
        
        spaceBetween:1100,
        direction: 'horizontal',
        loop:true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        }
    }
);

const swiper=new Swiper(
    '.swiper',
    {
        effect:'slide',

        cardsEffect:{
            rotate:true
        },

        spaceBetween:0,
        direction: 'horizontal',
        loop:true,
    }
);

/* Demo JS */
import './demo.js';
