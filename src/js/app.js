import '../scss/app.scss';

import Swiper, { Autoplay, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip, Grid, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';   
 
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const randInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.randInt = randInt;

document.addEventListener('DOMContentLoaded',()=>{
 
  

  document.querySelectorAll('.scrollTrg').forEach(el=>{
    gsap.from(el, {
      scrollTrigger : {
        trigger: el,
        start: `-${randInt(120,150)}px 70%`, 
        markers : false,
        end: `${randInt(100,130)}px 70%`,
        scrub : randInt(1,2),
        once : true, 
      },
      x : "-200%", 
    })
  }) 

  document.querySelectorAll('.awesome-card').forEach(el=>{
    el.addEventListener('mouseenter',(e)=>{ 
      document.querySelector('.awesome-card--active').classList.remove('awesome-card--active');
      el.classList.add('awesome-card--active');
    })
  })


  document.querySelectorAll('.awesome-galery__pagination-el').forEach((el)=>el.addEventListener('click',()=>{
    const slideIndex = el.dataset.awesomeSlidePagen;
    const activeSlideClass = 'awesome-galery__gal-slide--active';
    const activePagenClass = 'awesome-galery__pagination-el--active';
    document.querySelector(`.awesome-galery__gal-slide.${activeSlideClass}`).classList.remove(activeSlideClass);
    if(window.innerWidth < 1240){
      document.querySelector(`[data-awesome-slide="${slideIndex}"]`).classList.add(activeSlideClass);
    }else{  
      setTimeout(()=>{
        document.querySelector(`[data-awesome-slide="${slideIndex}"]`).classList.add(activeSlideClass);
      }, 450)
    }
     
    document.querySelector(`.awesome-galery__pagination-el.${activePagenClass}`).classList.remove(activePagenClass);
    el.classList.add(activePagenClass);

  }))

  document.querySelectorAll('*[data-typing-text]').forEach(el=>{
    el.innerHTML = ''; 

    let typingWordDelay = 600;
    let typingCaret = '_';


    let timing = 0;
    let arraySize = el.dataset.typingText.split('').length;
    el.dataset.typingText.split('').map((char,i) => {
      setTimeout(()=>{
        console.log(i)
        if(i==0){ 
          el.innerHTML += char + typingCaret;
        }else if(i!==0 && i!==arraySize-1){
          el.innerHTML = el.innerHTML.slice(0,-1) + char + typingCaret;
        }else{
          el.innerHTML = el.innerHTML.slice(0,-1) + char
        }
      },timing)
      timing += typingWordDelay;
    })
  })
  
  document.querySelector('#goUp').addEventListener('click',()=>scrollTo(0,0))

  const shadowElement = document.querySelector('#shadow');

  const hideBurger = () => { 
    document.querySelector('.burger').classList.remove('burger--hidden');
    shadowElement.classList.remove('shadow--show');
    document.body.style.overflow = 'initial';
  }

  document.querySelector('#burger-opener').addEventListener('click',()=>{
    document.querySelector('.burger').classList.add('burger--hidden');
    shadowElement.classList.add('shadow--show');
    shadowElement.addEventListener('click',()=>{
      hideBurger();
      removeEventListener(shadowElement, hideBurger)
    });
    document.body.style.overflow = 'hidden';
  })

  document.querySelector('#burger-close').addEventListener('click',()=>{
    hideBurger() 
    removeEventListener(shadowElement, hideBurger)
  })

  document.querySelector('#test').addEventListener('load',()=>{
    console.log('loaded');
  })
  

})
