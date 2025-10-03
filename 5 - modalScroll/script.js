/**
 * removeEventListener
 * Scroll Event
 */
// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section2 = document.querySelector(".two");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll",onScrollDisplayModal);


/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal(){
    console.log("Ouiiii je scroollll");
    console.log(section2.offsetTop);
    if (document.documentElement.scrollTop > section2.clientHeight/4)
        {
            modal.style.display = "flex";
        }
    }
    
// 5. Je fais disparaite la modale au clique sur la croix
function dissapear(){
    modalQuit.addEventListener("click", function(){
        console.log("click");
        modal.remove()
    })
}
    dissapear();
    