

function inputval() {
    var searchpoke = document.querySelector("#pokeSearch").value;
    pokename(searchpoke);
    console.log(searchpoke);
    document.querySelector("#pokeSearch").value = "";
}
document.querySelector("#searchbtn").addEventListener("click",inputval)


function pokename(searchpoke) {
 var endpointURL = `https://pokeapi.co/api/v2/pokemon/${searchpoke}`

$.ajax({
    url: endpointURL,
    method:"GET"
}).then(function(apiResponce){
    console.log(apiResponce)
    var pokename = apiResponce.name
    $('#pokename').append(pokename)
    console.log(pokename)
    console.log(apiResponce.sprites.other['official-artwork'].front_default)
    var sprite = $('<img>').attr("src",apiResponce.sprites.other['official-artwork'].front_default)
    $('#pokeImg').append(sprite)

    
    for (let i = 0; i < apiResponce.moves.length; i++) {
        var moves = $('<h3>').text(apiResponce.moves[i].move.name)
        $('#nameofpoke').append(moves)
        console.log(moves)
    }

    //var moves = $('<h3>').text(apiResponce.moves.move.name)
    //console.log(moves)
    //$('#nameofpoke').append(pokename,sprite)
})
}

function movestats(movesSel) {
    var urlAPI = `https://pokeapi.co/api/v2/move/${moveSel}/`
    $.ajax({})
}

function nickval() {
    var nickname = document.querySelector("#nickname").value;
    givename(nickname);
    console.log(nickname);
    document.querySelector("#nickname").value = "";
}
document.querySelector("#searchbtn2").addEventListener("click",nickval)




function givename(nickname) {
    var profanityURL = `https://www.purgomalum.com/service/containsprofanity?text=${nickname}`
   
   $.ajax({
       url: profanityURL,
       method:"GET"
   }).then(function(response){
       console.log(typeof(response))
       console.log(response)
       if(response == "false"){
           console.log("hello")
        }
        else {
           console.log("no no word")
           alert('https://media1.tenor.com/images/a051059c7642e9a474a13e1ab7191fb6/tenor.gif?itemid=5600117')
        }
   })

}
localStorag.setItem(pokename,searchpoke)


/*function movesel() {
    var = document.querySelector("#nickname").value;
    givename(nickname);
    console.log(nickname);
    document.querySelector("#nickname").value = "";
}
document.querySelector("#searchbtn2").addEventListener("click",nickval)*/