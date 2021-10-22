


(function() {
  
  "use strict";

  /**
   * Uma maneira mais fácil de obter elementos no DOM com vanilla JS
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
   * função de listar eventos
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
   * carrega os elementos da pagina, faz o scroll as animações
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }



  /**
   * Deixa o head com o fundo preto ao fazer ao descer a pagina
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
   * Botão apra voltar para o topo
   */
  let backtotop = select('.volta-pro-topo')
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
   * no mobile deixa aparece o botão de menu no navbar
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * no mobile ajusta os bot
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
   * 
  Role com ofset no carregamento da página com links hash no url
  Uma string, representando a parte âncora do URL, incluindo o sinal de hash (#)
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });



 
  /**
   * Filtro e animação isotope das publicações
   */
  window.addEventListener('load', () => {
    let publicacoesContainer = select('.publicacoes-container');
    if (publicacoesContainer) {
      let publicacoesIsotope = new Isotope(publicacoesContainer, {
        itemSelector: '.publicacoes-item'
      });

      let publicacoesFilters = select('#publicacoes-filters li', true);

      on('click', '#publicacoes-filters li', function(e) {
        e.preventDefault();
        publicacoesFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        publicacoesIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        publicacoesIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * inicializa publicacoes lightbox 
   */
  const publicacoesLightbox = GLightbox({
    selector: '.publicacoes-lightbox'
  });

  /**
   * slide dos detalhes das publicações
   */
  new Swiper('.publicacoes-details-slider', {
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
   * controle de deslisar por toque
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
   * executa a animação da pagina quando carrega
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