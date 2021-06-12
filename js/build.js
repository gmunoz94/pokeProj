const urlParams = new URL(document.location).searchParams
var search = urlParams.get('name')

function init() {
    if (localStorage.getItem('nickname') != null && localStorage.getItem('pokemonSpecies') != null) {
        console.log(localStorage.getItem('nickname'))
        console.log(localStorage.getItem('pokemonSpecies'))
        var storedName = localStorage.getItem('nickname')
        var storedSpecies = localStorage.getItem('pokemonSpecies')
        console.log(storedName)
        console.log(storedSpecies)
        nameArray = JSON.parse(storedName);
        pokemonArray = JSON.parse(storedSpecies);
    } else {
        pokemonArray = []
        nameArray = []
    }
    pokename(search)
}

var spritecont

function pokename(search) {
    var endpointURL = `https://pokeapi.co/api/v2/pokemon/${search}`
   $.ajax({
       url: endpointURL,
       method:"GET"
   }).then(function(apiResponce){
       console.log(apiResponce)
       console.log(apiResponce.sprites.other['official-artwork'].front_default)
       spritecont = apiResponce.sprites.other['official-artwork'].front_default
       var sprite = $('#pokeImg')
       sprite.attr("src",apiResponce.sprites.other['official-artwork'].front_default)
       for (let i = 0; i < apiResponce.moves.length; i++) {
           var moveName = $('<div>').text(apiResponce.moves[i].move.name).addClass("dropdown-item")
           $('#dropList').append(moveName)
           console.log(moveName)
       }
   })
}


function movestats(moveSel) {
    var urlAPI = `https://pokeapi.co/api/v2/move/${moveSel}/`
    $.ajax({
        url:urlAPI,
        method:"GET"
    })
    .then(function(response){
        var moveName = response.name
        var moveAcc = response.accuracy
        var movePP = response.pp
        var movePower = response.power
    }
    )
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
           $('#pokenick').text("")
           $('#pokenick').append(nickname)
        }
        else {
           console.log("no no word")
        //    alert("Watch yo profanity")
           $('.modal').addClass('is-active')
        }
   })
}

init()

var closeModal = document.getElementById('closeBtn')
closeModal.addEventListener('click', () => {
    $('.modal').removeClass('is-active')
})

document.querySelector("#finalbtn").addEventListener("click",logName)

var pokemonSpecies;

function logName() {
            pokemonSpecies = search;
            pokemonName = document.querySelector('#pokenick').textContent
            var existingEntries = JSON.parse(localStorage.getItem('pokemons'));
            if(existingEntries == null) existingEntries = []
            var pokemon99 = {name:pokemonSpecies,nick:pokemonName,picture:spritecont}
            console.log(pokemon99)
            localStorage.setItem('currentpoke',JSON.stringify(pokemon99))
            existingEntries.push(pokemon99)
            localStorage.setItem('pokemons',JSON.stringify(existingEntries))  
            console.log(localStorage.getItem('pokemons'))     
            var parsed = JSON.parse(localStorage.getItem('pokemons'))
            console.log(parsed)
}

$('#dropBtn').on('click', function() {
    $('.dropdown').toggleClass('is-active')    
})