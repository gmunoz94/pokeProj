

function inputval() {
    var searchpoke = document.querySelector("#pokesearch").value;
    pokename(searchpoke);
    console.log(searchpoke);
    document.querySelector("#pokesearch").value = "";
}
document.querySelector("#searchbtn").addEventListener("click",inputval)


function pokename(searchpoke) {
 var endpointURL = `https://pokeapi.co/api/v2/pokemon/${searchpoke}`

$.ajax({
    url: endpointURL,
    method:"GET"
}).then(function(apiResponce){
    console.log(apiResponce)
    var pokename = $('<h5>').text(apiResponce.name)
    console.log(pokename)
    console.log(apiResponce.sprites.other['official-artwork'].front_default)
    var sprite = $('<img>').attr("src",apiResponce.sprites.other['official-artwork'].front_default)

    
    for (let i = 0; i < apiResponce.moves.length; i++) {
        console.log("hello")
        var moves = $('<h3>').text(apiResponce.moves[i].move.name)
        $('#nameofpoke').append(moves)
        console.log(moves)
    }

    //var moves = $('<h3>').text(apiResponce.moves.move.name)
    //console.log(moves)
    $('#nameofpoke').append(pokename,sprite)
})
}