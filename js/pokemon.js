var storedPokemon = localStorage.getItem('pokemons')
var storedPokemonArray = JSON.parse(storedPokemon);
function init() {
    for (var j = 0; j < storedPokemonArray.length; j++) {
        //create each itteration of div
        var thisDiv = $('<div>').addClass('column is-one-quarter bg-dark text-white m-3 has-text-centered')
        $('#pokeBox').append(thisDiv);
        //create a span within div
        var thisSpan= $('<span>').text(storedPokemonArray[j].nick)
        thisDiv.append(thisSpan);
        //create each image in div
        var thisImage = $('<img>').attr('src',storedPokemonArray[j].picture)
        thisDiv.append(thisImage);
    }
}
init()