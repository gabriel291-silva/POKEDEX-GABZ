

// REQUISIÇÃO DOS POQUEMONS TRAZENDO
function GET(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}
// REQUISIÇÃO COM A IDENTIFIAÇÃO DO POKEMON
function GetDadosPoke(dataPesquisa){
    let request = new XMLHttpRequest();
    request.open("GET",dataPesquisa,false);
    request.send();
    return request.responseText;
}
//REQUISIÇÃO COM SEARCH
function searchpoke(){
    const searchbtn = document.getElementById("searchbtn");
    const searchpoke = document.getElementById("searchpoke");

    searchbtn.addEventListener('click',(e)=>{
        var div = document.getElementById('pokedex');
        const searchvalue = searchpoke.value
        console.log(searchvalue)
            if(!searchpoke.value){
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                }
                GetPokemons();
            }else{
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                }
        
                  
                  console.log(searchvalue)
                  datapoke = GetDadosPoke(` https://pokeapi.co/api/v2/pokemon/${searchvalue}`)
                  pokemondata = JSON.parse(datapoke);
                  console.log(pokemondata);
                  listarPokemon(pokemondata); 
            }
    })
}
// ADICIONA O DISPLAY DOS POKEMONS 
function listarPokemon(data){
 
    const tabela = document.getElementById('pokedex')
    let nome = document.createElement("div")

    nome.innerHTML = `<div class="card">
    <p>${data.name}</p>
    <img src="${data.sprites.front_default}" />
    
    </div>
    `
    tabela.appendChild(nome);
}
// REQUISIÇÃO DOS POKEMONS 
function GetPokemons(){
    data = GET( 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.');
    pokemons = JSON.parse(data);
    console.log(pokemons.results);

 pokemons.results.forEach(element => {
     let pokedata = GetDadosPoke(element.url)
     let dt = JSON.parse(pokedata)
     console.log(dt)
     listarPokemon(dt)
     
});}








// INICIA AS FUNÇÕES 
function main(){
    GetPokemons()
    searchpoke()
  


 }




main()


