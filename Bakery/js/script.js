menuBtn = document.querySelector("#menu");
menuBgOverlay = document.querySelector(".menu-bg-overlay");
menu = document.querySelector("nav ul");
menuBgLayer = document.querySelector(".menu-bg-layer");

menuBtn.addEventListener(
    "click",
        function(){
           document.body.classList.add("open-menu");

        }
)

menuBgOverlay.addEventListener(
    "click",
    function(){
        document.body.classList.remove("open-menu");


    }
)

document.addEventListener(
    "scroll",
    function(event){
        if(window.scrollY >= 64){
            document.body.classList.add("stick-menu");      
        }else{
            document.body.classList.remove("stick-menu");  
        }
    }
)

$('.testi-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  });