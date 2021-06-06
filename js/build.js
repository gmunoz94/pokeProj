function init() {
    const urlParams = new URL(document.location).searchParams
    var search = urlParams.get('name')
    pokename(search)
}



function pokename(search) {
    var endpointURL = `https://pokeapi.co/api/v2/pokemon/${search}`
   $.ajax({
       url: endpointURL,
       method:"GET"
   }).then(function(apiResponce){
       console.log(apiResponce)
       console.log(apiResponce.sprites.other['official-artwork'].front_default)
       var sprite = $('#pokeImg')
       sprite.attr("src",apiResponce.sprites.other['official-artwork'].front_default)
   })
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