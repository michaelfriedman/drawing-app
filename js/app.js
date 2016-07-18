//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $('.selected').css('background-color');

//When clicking on control list items
$('.controls li').on('click', 'li', function() {
  //Deselect sibling elements
  $(this).siblings().removeClass('selected');
  //Select clicked elements
  $(this).addClass('selected');
  //cache current color here
  color = $(this).css('background-color');
});

//When new color is pressed
$('#revealColorSelect').click(function () {
  //Show color Select or hide the Select
  changeColor();
  $('#colorSelect').toggle();
});

//Update the new color span
function changeColor() {
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
  $('#newColor').css('background-color', 'rgb(' + r + ',' + g + ', ' + b + ')');
}
//When color sliders changes
$('input[type=range]').change(changeColor);
  //Update the new color span

//When add color is pressed
$('#addNewColor').click(function() {
  //Append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  //Select the new color
  $('.controls ul').append($newColor);
  $newColor.click();
});
//On mouse events on the canvas
  //Draw lines
