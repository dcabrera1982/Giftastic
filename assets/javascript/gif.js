$("button").on("click", function() {
    var sport = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=TF3a14L9272sA655laD1aQjwrZL8sFVw&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            var results = response.data;
        
        for (var i = 0; i < results.length; i++) {

            }
        })
})



var topics = ["crossfit", "baseball", "basketball", "football"];
console.log(topics);

