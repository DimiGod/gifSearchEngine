    
  $("#search").click(function() {
    var giphy = $("#giphy-name").val();
    $("#giphy1").html("");
    getgiphy(giphy);
  });

  function getgiphy(giphy) {
    // queryURL endpoint for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vnc02mWFzSzq7mPvjGnYUBZDl6Dr4pgp&q=" + giphy + "&limit=5";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      if (response.Response === "False") {
        alert(response.Error);
      }
      else {
        // createCard(response);
        // giphyList.push(response.Title);
        for (i=0; i<response.data.length; i++){
          $("#giphy1").append("<img src=" + response.data[i].images.fixed_width.url + "id=img" + i + ">");
          // $("#img" + i).css("margin", "10px");

        }
      }
  });
}