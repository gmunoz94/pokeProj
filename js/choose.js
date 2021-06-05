document.querySelector("#searchbtn").addEventListener("click", nextPage)

function inputval() {
    var searchpoke = document.querySelector("#pokeSearch").value;
    var search = searchpoke.toLowerCase()
    pokename(search);
    console.log(search);
    document.querySelector("#pokeSearch").value = "";
}

document.querySelector("#choosebtn").addEventListener("click",inputval)
function pokename(search) {
 var endpointURL = `https://pokeapi.co/api/v2/pokemon/${search}`
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
    /*for (let i = 0; i < apiResponce.moves.length; i++) {
        var moves = $('<h3>').text(apiResponce.moves[i].move.name)
        $('#nameofpoke').append(moves)
        console.log(moves)
    }*/
    //var moves = $('<h3>').text(apiResponce.moves.move.name)
    //console.log(moves)
    //$('#nameofpoke').append(pokename,sprite)
})
}


function nextPage() {
    location.href = './choose.html' + searchpoke
}




var pokeList=[];
var availableTags=[];

var endpointURL = `https://pokeapi.co/api/v2/pokemon/?&limit=898`
$.ajax({
    url: endpointURL,
    method: "GET"
}).done(function (apiResponce) {


    
    for (let i = 0; i < 898; i++) {

        pokeList[i] = apiResponce.results[i].name;
      //console.log(pokeList[i]);
    }
   
 


    $( function() {
         var availableTags = pokeList;
         console.log(availableTags[100]);
         
       
        
         
         $( "#pokeSearch" ).autocomplete({
           source: availableTags
         });
       } );


});