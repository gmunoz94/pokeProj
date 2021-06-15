var storedPokemon = localStorage.getItem('pokemons')
var storedPokemonArray = JSON.parse(storedPokemon);
function init() {
    for (var j = 0; j < storedPokemonArray.length; j++) {
        var movediv = $('<div>').addClass('movediv is-flex is-flex-wrap-wrap is-centered p-1')
        // var thisDiv = $('<div>').addClass('column is-one-third bg-dark text-white m-3 has-text-centered')    
        var NameMove1 = $('<p>')
        var NameMove2 = $('<p>')
        var NameMove3 = $('<p>')
        var NameMove4 = $('<p>')
        var Powermove1 = $('<p>')
        var Powermove2 = $('<p>')
        var Powermove3 = $('<p>')
        var Powermove4 = $('<p>')
        var flavormove1 = $('<p>')
        var flavormove2 = $('<p>')
        var flavormove3 = $('<p>')
        var flavormove4 = $('<p>')  
        var Name1 = storedPokemonArray[j].ability1[0]
        var Name2 = storedPokemonArray[j].ability2[0]
        var Name3 = storedPokemonArray[j].ability3[0]
        var Name4 = storedPokemonArray[j].ability4[0]
        var power1 = storedPokemonArray[j].ability1[3]
        var power2 = storedPokemonArray[j].ability2[3]
        var power3 = storedPokemonArray[j].ability3[3]
        var power4 = storedPokemonArray[j].ability4[3]
        var flavor1 = storedPokemonArray[j].ability1[4]
        var flavor2 = storedPokemonArray[j].ability2[4]
        var flavor3 = storedPokemonArray[j].ability3[4]
        var flavor4 = storedPokemonArray[j].ability4[4]
        //create each itteration of div
        var thisDiv = $('<div>').addClass('column is-one-quarter bg-dark text-white m-3 has-text-centered').attr('id',[j])
        $('#pokeBox').append(thisDiv);
        //create a span within div
        var thisSpan= $('<span>').text(storedPokemonArray[j].nick)
        thisDiv.append(thisSpan);
        //create each image in div
        var thisImage = $('<img>').attr('src',storedPokemonArray[j].picture)
        thisDiv.append(thisImage);
        var movediv = $('<div>').addClass('movediv is-flex is-flex-wrap-wrap is-centered').attr('id',[j])
        thisDiv.append(movediv);
        function move1func() {
            if(Name1 != null) {  
            var movebox = $('<div>').addClass('box column is-half latMove')        
            var realMove1 = Name1.replace('Name: ','')
            var realpower1 = power1.replace('Power: ','')
            if (realpower1 == 'null') {
                realpower1 = 'n/a'
            }
            NameMove1.text(realMove1)
            Powermove1.text(realpower1)
            flavormove1.text(flavor1)
            movebox.append(NameMove1,Powermove1,flavormove1).attr('id',"moveNum1")
            movediv.append(movebox)
            }
        }
        function move2func() {
            if(Name2 != null) {  
            var movebox = $('<div>').addClass('box column is-half latMove')        
            var realMove2 = Name2.replace('Name: ','')
            var realpower2 = power2.replace('Power: ','')
            if (realpower2 == 'null') {
                realpower2 = 'n/a'
            }
            NameMove2.text(realMove2)
            Powermove2.text(realpower2)
            flavormove2.text(flavor2)
            movebox.append(NameMove2,Powermove2,flavormove2).attr('id',"moveNum2")
            movediv.append(movebox)
            }
        }
        function move3func() {
            if(Name3 != null) {  
            var movebox = $('<div>').addClass('box column is-half latMove')        
            var realMove3 = Name3.replace('Name: ','')
            var realpower3 = power3.replace('Power: ','')
            if (realpower3 == 'null') {
                realpower3 = 'n/a'
            }
            NameMove3.text(realMove3)
            Powermove3.text(realpower3)
            flavormove3.text(flavor3)
            movebox.append(NameMove3,Powermove3,flavormove3).attr('id',"moveNum3")
            movediv.append(movebox)
            console.log('hello')
            }
        }
        function move4func() {
            if(Name4 != null) {  
            var movebox = $('<div>').addClass('box column is-half latMove')        
            var realMove4 = Name4.replace('Name: ','')
            var realpower4 = power4.replace('Power: ','')
            if (realpower4 == 'null') {
                realpower4 = 'n/a'
            }
            NameMove4.text(realMove4)
            Powermove4.text(realpower4)
            flavormove4.text(flavor4)
            movebox.append(NameMove4,Powermove4,flavormove4).attr('id',"moveNum4")
            movediv.append(movebox)
            }
        }
        move1func()
        move2func()
        move3func()
        move4func()
    }
}
init()