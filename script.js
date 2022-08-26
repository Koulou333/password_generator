var copyBtn = document.getElementById('copy');

function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 16;
    var password = "";


// générer le mots de passe
for (let i = 0; i < passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * chars.length)

    password += chars.substring(randomNumber , randomNumber + 1)

// afficher le mot de passe

    document.getElementById('password').value = password;

// changer le style du bouton copier
    copyBtn.style.background="gray"
    copyBtn.style.color="black"
    }
}

// copier le mots de passe
function copyMdp() {
    var inputPassword = document.getElementById('password');

//  verifiez la longueur du mot de passe

if(inputPassword.value.length == 16){
    // copier le mots de passe
    inputPassword.select();
    document.execCommand("copy");

    // changer le style du button copié
    copyBtn.style.background = "transparent";
    copyBtn.style.color = "black"

    // afficher une alert
    alert('Mots de passe copié !')

}else {
    alert('veuillez générer un mots de passe')
    }
}