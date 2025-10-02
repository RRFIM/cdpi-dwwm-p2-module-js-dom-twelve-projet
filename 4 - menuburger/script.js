// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelectorAll(".modal");

burger.addEventListener("click", function(){
    Moveleft()
})

function Moveleft()
{
    modal.forEach(modal_element => {
            modal_element.classList.toggle("show-modal")
        });
}

