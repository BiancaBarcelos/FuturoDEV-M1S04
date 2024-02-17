function num() {
    let number = parseInt(window.prompt("Insira um número"));

    if (number % 2 == 0) {
        console.log(`O número digitado ${number} é par`);
    } else{
        if (isNaN(number)) {
            alert("Insira apenas número");
            num();
        } else {
            console.log(`O número digitado ${number} é ímpar`);
        }
    }

    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 e veja o horário";
}