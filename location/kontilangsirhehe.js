function toggleMenu(){
    var menuToggle = document.querySelector('.kontingjslangsirhehe');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    }
 
    var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-mud");
        if(document.body.classList.contains("dark-mud")){
            icon.src = "sun.png";
        }else {
            icon.src = "moon.png";
        }
    }

    var TrandingSlider = new Swiper('.arigato-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });