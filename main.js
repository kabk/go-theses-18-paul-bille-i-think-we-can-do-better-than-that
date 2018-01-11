var allPositions = [];

$(window).scroll(function(){
  var st = $(this).scrollTop();


  $("h2").each(function(i){
    var pos = $(this).position().top;
    var text = $(this).text();
    // if (i===0) {
      if (st >= pos-200) {
        $(".btnTxt").text(text);
      }
    // }
  });

});


$("h2").each(function(i){
  // var pos = $(this).offset.top;
  var offset = $(this).position();
  $(this).addClass("lol"+i);
  // var lol = pos + parseInt($(this).css('marginTop'), 10);
  allPositions.push(offset.top);

  var text = $(this).text();
  $(".dropdown-menu").append("<li class='dropdown-link"+i+"'><a href='#'>"+text+"</a></li>");


  scr(".dropdown-link"+i, ".lol"+i);
});



function scr(button, target){
  $(button).click(function() {
      $('html, body').animate({
          scrollTop: $(target).offset().top - 20
      }, 2000);
  });
}
