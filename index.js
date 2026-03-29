let generatePass = document.getElementById("generate-pass");
let password1 = document.getElementById("pass-1");
let password2 = document.getElementById("pass-2");
//CHECKBOXES
let uppercaseBox = document.getElementById("uppercase")
let lowercaseBox = document.getElementById("lowercase")
let symbolBox = document.getElementById("symbols")
let numberBox = document.getElementById("numbers")


function generatePassword(){
    const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const symbols= ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    password1.textContent = ""
    password2.textContent = ""

    const upperIsChecked = uppercaseBox.checked;
    const lowerIsChecked = lowercaseBox.checked;
    const symbolIsChecked = symbolBox.checked;
    const numIsChecked = numberBox.checked;

    const upperstring = uppercase.join("").toString()
    const lowerstring = lowerCaseChars.join("").toString()
    const symbolstring = symbols.join("").toString()
    const numstring = nums.join("").toString()

    let allowedchars = "";
    allowedchars += upperIsChecked ? upperstring : ""
    allowedchars += symbolIsChecked ? symbolstring : ""
    allowedchars += lowerIsChecked ? lowerstring : ""
    allowedchars += numIsChecked ? numstring : ""
    
    if (!upperIsChecked && !lowerIsChecked && !symbolIsChecked && !numIsChecked){
        password1.textContent = "Please select at least one!"
        password2.textContent = "Please select at least one!"
    }
    else {
        for (i = 0; i < 15; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length)
        const randomIndex2 = Math.floor(Math.random() * allowedchars.length)
        password1.textContent += allowedchars[randomIndex]
        password2.textContent += allowedchars[randomIndex2]
        }
    }
}