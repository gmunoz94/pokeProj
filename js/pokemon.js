var storedPokemon = localStorage.getItem('pokemons')
var storedPokemonArray = JSON.parse(storedPokemon);

function init() {
    for (var j = 0; j < storedPokemonArray.length; j++) {
        var move1Name = storedPokemonArray[j].ability1[0]
        realMove1 = move1Name.replace('Name: ','')
        console.log(realMove1)
        var move2Name = storedPokemonArray[j].ability2[0]
        realMove2 = move2Name.replace('Name: ','')
        console.log(realMove2)
        var move3Name = storedPokemonArray[j].ability3[0]
        realMove3 = move3Name.replace('Name: ','')
        console.log(realMove3)
        var move4Name = storedPokemonArray[j].ability4[0]
        realMove4 = move4Name.replace('Name: ','')
        console.log(realMove4)

        var flavor1 = storedPokemonArray[j].ability1[4]
        var flavor2 = storedPokemonArray[j].ability2[4]
        var flavor3 = storedPokemonArray[j].ability3[4]
        var flavor4 = storedPokemonArray[j].ability4[4]

        //create each itteration of div
        var thisDiv = $('<div>').addClass('column is-one-quarter bg-dark text-white m-3 has-text-centered')
        $('#pokeBox').append(thisDiv);
        //create a span within div
        var thisSpan= $('<span>').text(storedPokemonArray[j].nick)
        thisDiv.append(thisSpan);
        //create each image in div
        var thisImage = $('<img>').attr('src',storedPokemonArray[j].picture)
        thisDiv.append(thisImage);
        var movediv = $('<div>').addClass('section movediv is-flex is-flex-wrap-wrap is-centered p-1')
        thisDiv.append(movediv);
        
        for (var i = 0; i < 4; i++) {
            var moveColumn = $('<div>').addClass('column is-half is-flex justify-content-center')
            movediv.append(moveColumn)

            var moveBox = $('<div>').addClass('box')
            moveColumn.append(moveBox)

            var lastName = storedPokemonArray[j].ability+[i + 1]
            console.log(lastName)
        }
    }
}
init()