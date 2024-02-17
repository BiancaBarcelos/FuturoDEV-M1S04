function concatenar() {
    let nome = "Bianca";
    let sobrenome = "Barcelos";
    let concatenacao = "Meu nome é: " + nome + " " + sobrenome;
    
    console.log(concatenacao);
    
    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 para ver a mensagem";
}

