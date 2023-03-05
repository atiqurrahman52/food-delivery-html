var current_fs, next_fs, previous_fs; 
var left, opacity, scale;
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  $("#progressbar li").eq($("fieldset").index(current_fs)).addClass("complete");
  
  //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.css({'display': 'none'}, {
    step: function() {
      next_fs.css({'display': 'block'});
    }, 
    complete: function(){
      current_fs.hide();
    }, 
  });
});

$(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  $("#progressbar li").eq($("fieldset").index(previous_fs)).removeClass("complete");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.css({'display': 'none'}, {
    step: function() {
      previous_fs.css({'display': 'block'});
    }, 
    complete: function(){
      current_fs.hide();
    }, 
  });
});

$(".submit").click(function(){
  return false;
})