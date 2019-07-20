$("button").on("click", function() {
    var sport = $(this).attr("data-sport");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=TF3a14L9272sA655laD1aQjwrZL8sFVw&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);


        var rating = response.Rated;
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var sportDiv = $("<div>");
            var p = $("<p>").text(results[i].rating);
            var sportImage = $("<img>").attr("src", results[i].images.fixed_height.url);
            sportDiv.append(p);
            sportDiv.append(sportImage);
            $("#gifs-appear-here").prepend(sportDiv);
        }
    });
});