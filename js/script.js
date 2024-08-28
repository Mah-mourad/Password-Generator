let password = document.querySelector("input");
let generate = document.querySelector(".btn");
let copy = document.querySelector(".copy")
const lenght = 14;
let num = "123456789";
let sign = "+-*/_&^%$#@!|";
let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alpha = "abcdefghijklmnopqrstuvwxyz";
const allChar = num + sign + ALPHA + alpha;

generate.addEventListener("click", function(){
    let pass = "" ;
    pass += ALPHA[Math.floor(Math.random() * ALPHA.length)];
    pass += alpha[Math.floor(Math.random() * alpha.length)];
    pass += sign[Math.floor(Math.random() * sign.length)];
    pass += num[Math.floor(Math.random() * num.length)];
    while(lenght > pass.length){
        pass += allChar[Math.floor(Math.random() * allChar.length)];

    }
    password.value = pass
})

copy.addEventListener("click", function(){
    password.select()
    navigator.clipboard.writeText(password.value)
})
