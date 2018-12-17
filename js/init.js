/*(function($) {
 $(function(){
  var introductionEl = $('div.introduction'),
      introductionElOffset = introductionEl.offset().top/2,
      documentEl = $(document);
   
  documentEl.on('scroll', function() {
      if (documentEl.scrollTop() > introductionElOffset && introductionEl.hasClass('hidden) ) {
 	introductionEl.removeClass('hidden');
  });
  });
})();
*/

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.modal').modal();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators:true
});

$("#scrollthis").click(function() {
  $('html,body').animate({
      scrollTop: $(".page-footer").offset().top},
      'fast');
}); 

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


