// var images = [url("assets/IMGs/webDevBackground.jpeg"),url("assets/IMGs/pexels-photo-1936299.jpeg"),url("assets/IMGs/apple-laptop-macbook-pro-notebook.jpg")];
// var jumbotron = document.querySelector(".jumbotron");

// var carousel = setInterval((myTimer) => {
//     for(let i=0;i<images.length;i++){
//         jumbotron.style.backgroundImage = [i];
//     }
// }, 1000);

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}