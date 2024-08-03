//Burger

let menu = document.querySelector('.menu');
let header = document.querySelector('.header');
let body = document.body;
function burger() {
  menu.classList.toggle('menu-active');
  menu.classList.toggle('menu-hidden');
  body.classList.toggle ('on');
  body.classList.toggle ('off');

  console.log(1);
}


  window.addEventListener('resize', function() {
    let windowWidth = window.screen.width;
      if (windowWidth > 992) {
        body.classList.remove('off')
        body.classList.add('on')
        menu.classList.add('menu-hidden');
        menu.classList.remove('menu-active');
        header.classList.remove('static');
      }
  });


//Slider

  new Swiper(".companies__swiper", {
          pagination: {
            el: ".swiper-pagination",
          },
        });

//Скролл

Object.defineProperty(window, 'pageYOffset', {
  get: function() {
    return document.documentElement.scrollTop;
  }
});


  window.addEventListener('scroll', function() {

    if (window.pageYOffset > 40 && header.classList.contains("default")) {

      header.classList.remove("default");
      header.classList.add("fixed");
      console.log('добавил');


    }
    else if (window.pageYOffset <= 40 && header.classList.contains("fixed")) {
      header.classList.remove("fixed");
      header.classList.add("default");
    }

    console.log( window.pageYOffset );
  })
