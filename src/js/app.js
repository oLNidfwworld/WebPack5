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


const swiperPhotos = new Swiper('.main-banner', {
    // Optional parameters
    // loop: true,
    slidesPerView: 1, 
    // Navigation arrows
   //  navigation: {
   //     nextEl: '.swiper-button-next',
   //     prevEl: '.swiper-button-prev',
   //  },
 });