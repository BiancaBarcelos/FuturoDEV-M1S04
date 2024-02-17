function message(text) {
   switch (text) {
    case 1:
        console.log("Dax um banho!")
        break;
    case 2:
        console.log("O lhó lhó")
        break;
    case 3:
        console.log("Coza max quirida")
        break;
   
    default:
        break;
   }

    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 e veja a mensagem";
}