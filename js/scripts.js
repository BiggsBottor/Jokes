/*-- call to the API JSON --*/
$(document).ready(function() {
    getJoke();
    $(".joke_btn").on("click", getJoke);
});

function getJoke() {
    var api_url = 'http://api.icndb.com/jokes/random';

    $.getJSON(api_url, function(data) {
        var ouput = `<span>`
        $.each(data, function(key, val) {
            if (key === "value") {
                ouput += val.joke;
            }
        });
        ouput += `</span>`;
        $(".joke").html(ouput);
    });
}