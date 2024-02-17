function idade() {
    let idade = parseInt(window.prompt("Digite sua idade:"));

    if (!isNaN(idade)) {
        if (idade >= 18) {
            console.log(`Tens ${idade} anos já és maior de idade`);
        } else {
            console.log(`Tens ${idade} anos és miúdo`);
        }
        
        let pBtn = document.getElementById("respostaBtn");
        pBtn.innerHTML = "Aperte F12 e veja a mensagem";
    } else {
        alert("Insira apenas número");
    }
 
 }