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


  debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  
  (function(){
    var $target = $('.anima'),
        animationClass = 'anime-area',
        offset = $(window).height() * 3/5;
  
    function animeScroll() {
      var documentTop = $(document).scrollTop();
  
      $target.each(function(){
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
          $(this).addClass(animationClass);
        } else {
          $(this).removeClass(animationClass);
        }
      });
    }
  
    animeScroll();
  
    $(document).scroll(debounce(function(){
      animeScroll();
    }, 500));
  })();


