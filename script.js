$(document).ready(function() {
  $('body').append("<div class='container'></div>");

function createGrid(x){
  for (i = 0; i < x; i++) {
      $('.container').append("<div class='row "+i+"'></div>");}
  for (j = 0; j < x; j++) {
  $('.row').append("<div class='unit'></div>");}
};
createGrid(16);

//reset grid
$('button').on('click', function(){
  let reset = prompt("How many squares?");
$('.unit, .row').remove();
  createGrid(reset);
});

//hover event
$('.container').on('mouseenter', '.unit', function(){
  $(this).addClass('black');
});
});
