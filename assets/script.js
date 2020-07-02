var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


var navToggle = $("#navToggle");
var carouselText =$(".carouselText");

navToggle.on("click",function(){
    if(carouselText.hasClass("carouselTextPosition")===true){
        carouselText.removeClass("carouselTextPosition")
    } else { 
        carouselText.addClass("carouselTextPosition");
    }
});
