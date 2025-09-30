
//1. Je recupere tout les switchs
const all_switches = document.querySelectorAll(".switch");
//2. Je recupere tout les elements html de ma page
const all_elements = document.querySelectorAll("*");
//3. Je parcours tout les switchs



all_switches.forEach(function (Swtch) {

    Swtch.addEventListener("click", function () {
        updateSwitch();
        updateAllTags();
    })
})


function updateSwitch() {
    all_switches.forEach(function (switch_elem) {

        switch_elem.classList.toggle("darkmode");
        switch_elem.querySelector("i").classList.toggle("fa-moon");
        console.log("moon");
    });
}


function updateAllTags() {
    all_elements.forEach(function (element) {
        element.classList.toggle("darkmode")
    })
}



