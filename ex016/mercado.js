let frutas = ["maça", "morango", "amora"];
let btn = document.getElementById("btn f");
let res = document.getElementById('res');

btn.addEventListener('click', function(){
    let escolha = frutas[randomFruit()]; 
    
    res.innerHTML += `<p>A fruta escolhida foi ${escolha}</p>`;
})

function randomFruit (f){
   return Math.floor(Math.random() * frutas.length);
}