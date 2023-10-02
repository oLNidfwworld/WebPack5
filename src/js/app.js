import '../scss/app.scss';

import Swiper, { Autoplay, EffectCards, EffectCreative, EffectFlip, Grid, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; //???

// import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

// import Choices from 'choices.js';

// import lax from 'lax.js'

// const popupS = require('popups');

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.awesome-card').forEach(el=>{
    el.addEventListener('mouseenter',(e)=>{ 
      document.querySelector('.awesome-card--active').classList.remove('awesome-card--active');
      el.classList.add('awesome-card--active');
    })
  })
})