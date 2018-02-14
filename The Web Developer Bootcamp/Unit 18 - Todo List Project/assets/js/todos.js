// Check off specific todos by clicking them
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on delete icon to delete todo
$("ul").on("click", "span", function(event){
  // Remove the li (which is parent of the span)
  $(this).parent().fadeOut(500, function() {
    // NOTE: this here refers to the parent object, because it is the one calling the callback function.
    $(this).remove();
  });

  // Stops the event from bubbling up to other elements
  event.stopPropagation();
});

// Inputting new Todos
$("input[type='text']").keypress(function(event) {

  // Check if the enter key was pressed
  if (event.which === 13){

    // Get todo text from input
    var todoText = $(this).val();

    // Clear out the input box
    $(this).val("");

    // Append new li to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
  }
});

$(".fa-pencil-alt").click(function() {
  $("input[type='text']").fadeToggle();
});
