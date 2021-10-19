$(document).ready(function(){

  
    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to:{color:'#65DAF9'},
        
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 411);
            circle.setText(value);

        }
    });
    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to:{color:'#65DAF9'},
        
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 411);
            circle.setText(value);

        }
    });
    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to:{color:'#65DAF9'},
        
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 411);
            circle.setText(value);

        }
    });
    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD,{
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 5000,
        from: {color: '#AAA'},
        to:{color:'#65DAF9'},
        
        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 411);
            circle.setText(value);

        }
    });

  
    //* iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 350) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
    
        
            stop = 1;
        }

    });

    setTimeout(function() {
        $('#main-info').parallax({imageSrc: 'img/wpp.jpg'});
      }, 200);

    
});
//Filtro Portfolio

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'video-btn') {
        eachBoxes('video', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'pb-btn') {
        eachBoxes('pb', boxes);
      } else {
        eachBoxes('all', boxes);
      }

});

function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }


  /*ver senha*/
  let btnEye = document.querySelector('.fa-eye')

  btnEye.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#cadastro-senha')
    let confirmeSenha = document.querySelector('#confirma-senha')
    let verSenha = document.querySelector('#verSenha')
    if(inputSenha.getAttribute('type') == 'password' & verSenha.getAttribute('class') == 'fas fa-eye'){
      inputSenha.setAttribute('type', 'text')
      confirmeSenha.setAttribute('type', 'text')
      verSenha.setAttribute('class', 'fas fa-eye-slash')
    }else{
      inputSenha.setAttribute('type', 'password')
      confirmeSenha.setAttribute('type', 'password')
      verSenha.setAttribute('class', 'fas fa-eye')
    }

  })



/


  
/**
* Template Name: Gp - v4.6.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()