console.log('main.js is connected!');
const $body = $('body');

window.onload = function() {

  // var url = "http://api.giphy.com/v1/gifs/search?q=cat-fitness&api_key=5c90517748c940f7898e6f3b2c7ca995&limit=3"
  // $.ajax({
  //   url: url,
  //   type: "GET",
  //   dataType: "jsonp"
  //  })
  // .done(function(data) {
  //    var showGifs = show(data);
  //    $('#gifReveal').html(showGifs);
  //  })


// const $gif_2 = $('#gif_2');
// const $gif_3 = $('#gif_3');

// function show(data) {
//   $gif_1.html(data.data[0].images.original.url).appendTo('#gif_1')
// }
const $gif_1 = $('#gif_1');
(function() {
  var giphyAPI = "http://api.giphy.com/v1/gifs/search?q=cat-fitness&api_key=5c90517748c940f7898e6f3b2c7ca995&limit=3"
  $.getJSON( giphyAPI, {
    format: "jsonp"
  })
    .done(function( data ) {
        $gif_1.attr("src", data.data[0].images.original.url);
      });
    });


}
