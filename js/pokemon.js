var storedName = localStorage.getItem('nickname')
var storedSpecies = localStorage.getItem('pokemonSpecies')
console.log(storedName)
console.log(storedSpecies)
nameArray = JSON.parse(storedName);
pokemonArray = JSON.parse(storedSpecies);


function init() {
    for (var i = 0; i < nameArray.length; i++) {
        $('#pokeBox').append("<div class='column is-one-quarter bg-dark text-white'></div>")
        $('#pokeBox').children().eq(i).append("<img/>")
    }
}

init()