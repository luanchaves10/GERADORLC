AOS.init();

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizeEmail = document.querySelector ("#valor");
let email = document.querySelector ("#email");

let containerEmail = document.querySelector ("#container-email");

let charset = "*_.1234567890";
let novoEmail = "";

sizeEmail.innerHTML= sliderElement.value;

slider.oninput = function(){
    sizeEmail.innerHTML = this.value;
}

function generateEmail(){
    
    let emails = "seunome";
    for(let i= 0, n = charset.length; i < sliderElement.value; ++i){
        emails += charset.charAt(Math.floor(Math.random() * n));
    }

   containerEmail.classList.remove("hide");
   email.innerHTML = emails;
   novoEmail = emails;
}

function copyEmail(){
    alert ("E-mail copiado com sucesso");
    navigator.clipboard.writeText(novoEmail);
}

