/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const emoji = document.body.querySelector(".fa-solid");
// 2. Je recupere le bouton ABONNER
const sub = document.body.querySelector(".btn-sub");
// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let is_subbed = false;
// 4. J'ecoute le clique sur l'icone smiley
emoji.addEventListener("click",function(){
    // on click do something...
   emoji.classList.replace("fa-face-meh","fa-face-smile");
   emoji.classList.add("happy");
   
})
// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
sub.addEventListener("click",function(){
    sub.classList.toggle("abonne");
    sub.querySelector("p").textContent = "abonne!";

})