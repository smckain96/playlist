var albumXHR = $.get("https://lit-fortress-6467.herokuapp.com/object");
console.log(albumXHR);

// Clicking the "Choose Tracks" button executes this function.
$("button").click(function(event) {

  $(".click-me").remove();
  $("track-bin").empty();
  $("track-bin").append("Click on an album to add tracks");
  $(".entry").append("<input type = 'text' class = 'album-get'></div>")

  function playlist() {
    for(var key in albumXHR){
      // This creates an album-info box for all 20 keys from all 5 objects in the "results" array, rather than 5 for each object within the "results" array. I do not know why it does this.
      $(".playlist-box").append("<div class='album-info'></div>");
    }
  }
  // for(var i = 0; i < albumXHR["results"].length; i++){
  //   // Here I attempted to fill the album-info boxes, but I couldn't figure out how to reference the data correctly.
  // }
  playlist();
});
