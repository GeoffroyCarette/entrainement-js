// Chiffre aléatoire
let chiffreRandom = Math.floor(Math.random() * 99) + 1;
let valeurJoueur;

const bouttonEnvoyer = document.getElementById("bouttonSubmit");
const propositionJoueur = document.getElementById("propositionJoueur");

console.log(chiffreRandom);
console.log(valeurJoueur);

bouttonEnvoyer.addEventListener("click", function (event){
    valeurJoueur = document.querySelector('#propositionJoueur');
})
