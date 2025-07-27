const body =document.getElementById("body")
const btn =document.getElementById("btn")
const txt =document.getElementById("h1")

let a = JSON.parse(localStorage.getItem("save")) || false;
updateMode(a);
//set
// localStorage.setItem("save",JSON.stringify(a))



btn.addEventListener("click", () => {
    a = !a;
    localStorage.setItem("save", JSON.stringify(a));
    updateMode(a);
});

function updateMode(mode) {
    if (mode) {
        txt.setAttribute("class", "h2");
        btn.setAttribute("class", "btn_2");
        body.setAttribute("class", "dark");
        txt.innerHTML = "dark mode";
    } else {
        txt.setAttribute("class", "h1");
        btn.setAttribute("class", "btn_1");
        body.setAttribute("class", "light");
        txt.innerHTML = "light mode";
    }
}

































//*************************************************************** */
// if (!localStorage['save']) {
//     localStorage.setItem("save")
//     a = lacalStorage['save']
//     lacalStorage['save'] = false
// } else {
//      a = lacalStorage['save']
//     if(a === true){
//         txt.setAttribute("class", "h2")
//         btn.setAttribute("class", "btn_2")
//         body.setAttribute("class", "dark")
//         txt.innerHTML="dark mode"
//     }
//     if (a = false) {
//         txt.setAttribute("class", "h1")
//         btn.setAttribute("class", "btn_1")
//         body.setAttribute("class", "light")
//         txt.innerHTML="light mode"
//     }
// }
// btn.addEventListener("click", click)
// function click() {
//     a = !a
//     lacalStorage['save'] = a
    
//     if(a = true){
//         txt.setAttribute("class", "h2")
//         btn.setAttribute("class", "btn_2")
//         body.setAttribute("class", "dark")
//         txt.innerHTML="dark mode"
//     }
//     if (a = false) {
//         txt.setAttribute("class", "h1")
//         btn.setAttribute("class", "btn_1")
//         body.setAttribute("class", "light")
//         txt.innerHTML="light mode"
//     }
// }
