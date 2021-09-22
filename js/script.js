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