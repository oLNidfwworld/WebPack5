import '../scss/app.scss';

import Swiper, { Autoplay, EffectCards, EffectCreative, EffectFlip, Grid, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; //???

import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

import Choices from 'choices.js';

import lax from 'lax.js'

const popupS = require('popups');


// import WOW from 'wowjs/dist/wow.js';
// //var WOW =require('wowjs');
// new WOW().init();
const WOW = require('wowjs');
window.wow = new WOW.WOW({});
window.wow.init();

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    
    lax.addElements("#card-el-1", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [1, "1", "0.90"]
            ]
        }
    }), 
    lax.addElements("#card-el-2", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [1, "1", "0.91"]
            ]
        }
    }), 
    lax.addElements("#card-el-3", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [1, "1", "0.92"]
            ]
        }
    }),
    lax.addElements("#card-el-4", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [1, "1", "0.93"]
            ]
        }
    }),
    lax.addElements("#card-el-4", {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [1, "1", "0.94"]
            ]
        }
    })
    lax.addElements("#left-right", {
        scrollY: {
             translateX: [
    ['elInY', 'elCenterY', 'elOutY'],
    {
      1024: [0, 0,300], 
      1400: [0, 110,400], 
    },
  ]
        }
    })
  }

import './demo.js';

document.addEventListener('DOMContentLoaded',()=>{

    const swiper = new Swiper('#swiper-factory',
    {
        spaceBetween:20,
        slidesPerView:1,
        modules: [Navigation],
        navigation:{
            prevEl:'.swiper-button-prev',
            nextEl:'.swiper-button-next',
        }

    })

    const swiper_why_whe = new Swiper('#whywe',{
        
        modules:[EffectCreative,Autoplay],
        spaceBetween: 20,
        direction:'vertical'

    })

    const similar = new Swiper('#similar',{
        modules:[Grid],
        
        
        
       
        breakpoints:{
            320:{
                spaceBetween:60,
                slidesPerView:1,
                grid:{
                    fill: "row",
                    rows:2
                },
            },
            480:{
                spaceBetween:10,
                slidesPerView:2,
                grid:{
                    rows: 1
                },
            },
            768:{
                spaceBetween:10,
                slidesPerView:3,
            },
            1440:{
                spaceBetween:10,
                slidesPerView:5
            }
        }

    })
    
    //<burger side>

    let burger_menu_button_on = document.getElementById('burger');
    let burder_menu_button_off = document.getElementById('burger_off');
    let burger_menu = document.getElementById('burger_menu');
    let burger_blackout = document.getElementById('burger-blackout');

    burger_menu_button_on.addEventListener('click',()=>{
        burger_menu_button_on.classList.toggle('magic');
        burger_menu.classList.toggle('drop');
        burger_blackout.classList.toggle('block')
    })
    burder_menu_button_off.addEventListener('click',()=>{
        burger_menu.classList.toggle('drop');
        burger_blackout.classList.toggle('block')
    })

    //<burger => callout>

    let callout_button = document.getElementById('callout');
    let form_callout = document.getElementById('form_callout');
    let blackout = document.getElementById('blackout');
   
   


    //</burger => callout>

    //</burger side>

    //<index>

    //</index>
    
    
    let selector = document.querySelectorAll('.select-checkbox')

    selector.forEach((el,i,arr)=>{
        el.addEventListener('click',()=>{
            el.getElementsByClassName('drop')[0].classList.toggle('visiblemy');
        })
    })

    let mobile_sections = document.getElementsByClassName('mobile-sections')[0];
    let section_top = document.getElementsByClassName('section-top')[0];
    if(mobile_sections!=undefined||section_top!=undefined){
        let mobile_sections_text=  mobile_sections.getElementsByClassName('bg-gray text-center rubik p-3 md:hidden')[0];
        mobile_sections_text.addEventListener('click',()=>{
            if(mobile_sections_text.innerHTML == 'Показать разделы'){
                mobile_sections_text.innerHTML = 'Скрыть разделы'
            }else{
                mobile_sections_text.innerHTML = 'Показать разделы'
            }
            section_top.classList.toggle('unreachable')
        })
    }

    let mobile_filter = document.getElementsByClassName('mobile-filter')[0];
    let section_filter = document.getElementsByClassName('section-filter')[0];
    if(mobile_filter !=undefined || section_filter!= undefined ){
        let mobile_filter_text=  mobile_filter.getElementsByClassName('bg-gray text-center rubik p-3 lg:hidden')[0];
        mobile_filter_text.addEventListener('click',()=>{


            if(mobile_filter_text.innerHTML == 'Показать фильтр'){
                mobile_filter_text.innerHTML = 'Скрыть фильтр'
            }else{
                mobile_filter_text.innerHTML = 'Показать фильтр'
            }
            section_filter.classList.toggle('unreachable');
            section_filter.classList.toggle('expand');
            mobile_filter_text.classList.toggle('expand');
            mobile_filter.style.zIndex=3;
        })
    }

    
    
    
    
    let target_buttons = document.querySelectorAll('.targets .el');
    let target_explaining = document.querySelectorAll('.explain');
    let map = new Map();

    target_buttons.forEach((el,i,arr)=>{
        map.set(el,target_explaining[i])
    })
    
    
        target_buttons.forEach((el,i,arr)=>{
            el.addEventListener('click',function(){
    
                target_buttons.forEach((el,i,arr)=>{
                    el.classList.remove('current');
                    map.get(el).classList.remove('current')
                })
                el.classList.add('current');
                map.get(el).classList.add('current');
    
                if(window.screen.width<768){
                    document.getElementsByClassName('targets')[0].classList.add('hidden')
                    document.getElementsByClassName('exp')[0].classList.add('block')
                }

            })
        })
   

    


})


