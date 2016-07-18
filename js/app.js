//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $('.selected').css('background-color');

//When clicking on control list items
$('.controls li').click(function() {
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
  $('#colorSelect').toggle();

});
//When color sliders changes
  //Update the new color span

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines
