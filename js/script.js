$(function(){
  $("#download div").click(function(){
    setTimeout(function(){
      $("#overlay").addClass("active")
    }, 500);
  });

  $("h2, #download-button").click(function(){
    $("html, body").add(window).animate({
      scrollTop: $("html, body").get(0).scrollHeight
    }, {
      duration: 500,
      specialEasing: "easein"
    });
  });

  if (!document.createElement('video').canPlayType) {
    setTimeout(function(){
      $("#fallback").addClass("active")
    }, 500);
  }
});