/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/
const switch_btn = document.querySelector(".switch");
const all_elements = document.querySelectorAll("*");
all_elements.forEach(function(element){

    switch_btn.addEventListener("click", function(){
       element.classList.toggle("darkmode");
       switch_btn.querySelector("i").classList.toggle("fa-moon");
       console.log("moon");
    })
    

})