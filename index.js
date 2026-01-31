const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePass = document.getElementById("generate-pass");
let password1 = document.getElementById("pass-1");
let password2 = document.getElementById("pass-2")

function generatePassword(){
    password1.textContent = ""
    password2.textContent = ""
    for (i = 0; i < 15; i++){
        let randomize = Math.floor(Math.random() * characters.length);
        let randomize2 = Math.floor(Math.random() * characters.length);
        password1.textContent += characters[randomize]
        password2.textContent += characters[randomize2]
    }
}