
const modal = document.querySelector(".modal");
const modalQuit = document.querySelector(".modal-quit");


window.setTimeout(Mymodal, 3000)


function Mymodal()
    {
        modal.style.display = "flex";
    }


function dissapear(){
    modalQuit.addEventListener("click", function(){
        console.log("click");
        modal.remove()
    })
}
    dissapear();