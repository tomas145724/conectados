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

