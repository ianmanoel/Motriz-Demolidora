function displayText(a) {
  var text = document.getElementById("textField" + a); 

  if(text.style.display === "none"){
    text.style.display = "block";
  }
  else{
    text.style.display = "none";
  }
}




/* Class the members of each slideshow group with different CSS classes */




function plusSlides(n, nome) {
  showSlides(slideIndex += n, nome);
}



function showSlides(n, nome) {
  let i;
  let slides = document.getElementsByName("mySlides" + nome);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}
$(window).scroll(function() {

  var navbar = $('nav');
  //obtem a posição da div com relação ao scroll
  var posicao = navbar.offset();

  //define se o scroll atual é maior ou igual a posição da div
  if($(window).scrollTop() >= posicao.top) {
    $("nav").css({"position" : "fixed"});
  }
  else{
    $("nav").css({"position" : "absolute" , "opacity " : "0.8"});
  }
});