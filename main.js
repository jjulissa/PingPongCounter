let buttonOne = document.querySelector(".footOne"); 
let buttonTwo = document.querySelector(".footTwo"); 
let buttonReset = document.querySelector(".footTrois"); 
let input = document.querySelector(".mainTwo input"); 
let menos = document.querySelector("#menos"); 
let suma = document.querySelector("#mas"); 
let body = document.querySelector("body"); 
let p = document.createElement("p");

buttonOne.addEventListener("click", () => { 
    if (suma.innerText == input.value ) {
        
    }
    else if (menos.innerText < input.value ) { 
       menos.innerText++;
    } else if (menos.innerText == input.value) {
        p.innerText = "Ganar"; 
        body.append(p);
    } 
    else {
        
    }
}) 

buttonTwo.addEventListener("click", () => { 
    if (menos.innerText == input.value ) {
        
    }
    else if(suma.innerText < input.value) { 
    suma.innerText++; 
    } else if (suma.innerText == input.value) {
        p.innerText = "Ganar"; 
        body.append(p);
    }
}) 

buttonReset.addEventListener("click", () => {
    suma.innerText = 0; 
    menos.innerText = 0; 
    p.remove(); 
}) 


// Segunda 

// let btnFoot = document.querySelectorAll(".foot button"); 
// let punto = document.querySelectorAll(".punto span")

// btnFoot.forEach( (el,i) => {
//     if(i < 2){
//         el.addEventListener("click", () => {
//             if(punto[i].innerText === input.value) {
//                 p.innerText = "Ganaste"; 
//                 body.append(p);
//             } 
//             else if(punto[i].innerText < input.value) {
//                 punto[i].innerText++;
//             } 
//         })
//     }
//     else {
//         el.addEventListener("click", () => {
//         punto[0].innerText = 0; 
//         punto[1].innerText = 0; 
// }) 
//     }
// })
