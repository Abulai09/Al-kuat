//menu
const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if(burger && menu) {
    burger.addEventListener( 'click',()=>{
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        body.classList.toggle('_lock')
    } )
}





const header = document.querySelector('.header')
const headerH = document.querySelector('.header').clientHeight

document.onscroll = function(){
    let scroll = window.scrollY

    if(scroll>headerH){
        header.classList.add('fixed')
        
    } else {
        header.classList.remove('fixed')
    }
}







const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click',onMenuLinkClick)
    })

    function onMenuLinkClick(e){
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            e.preventDefault();
        }
    }

}







function readMore(){
  let dots = document.getElementById("dots")
  let more = document.getElementById("more")
  let btn = document.getElementById("btn")
  if(dots.style.display==='none'){
      dots.style.display="inline"
      btn.innerHTML="Read more"
      more.style.display="none"
  }else{
      dots.style.display="none"
      btn.innerHTML="Hide"
      more.style.display="inline"
  }
}




//swiper

const popularSlider = new Swiper('.popular-slider', {
  spaceBetween:20,
  slidesPerView:1,
  loop:true,
  navigation: {
    nextEl: '.popular-slider-next',
    prevEl: '.popular-slider-prev',
  },
  autoplay:{
      delay:2000,
  },
  breakpoints: {
      // when window width is >= 320px
      992:{
          slidesPerView:3,
      },
      790:{
          slidesPerView:2,
      }
    }
});

//swiper2
const reviewsSlider = new Swiper('.reviews__slider', {
  spaceBetween:20,
  slidesPerView:1,
  autoHeight:true,
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
  autoplay:{
      delay:5000,
  },
});

//gallery

const galleryItems = document.querySelectorAll(".gallery__item")

if (galleryItems.length>0){
  galleryItems.forEach( item => {
      new Swiper( item,{
          slidesPerView:1,
          autoplay:{
              delay:4000,
          },
          effect:'fade',
      } )
  } )
}