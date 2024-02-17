
function condicional() {
    let valor = parseInt(window.prompt("Insira um número:"));

    if (valor > 0) {
        console.log(`O valor digitado ${valor} é positivo`);
    }else if(valor < 0) {
        console.log(`O valor digitado ${valor} é negativo`);
    }else {
        if (valor === 0) {
            console.log(`O valor digitado ${valor} é zero`);
        } else {
            alert("Não é um número");
            condicional();
        }
    }
        
    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 para ver o resultado";
}