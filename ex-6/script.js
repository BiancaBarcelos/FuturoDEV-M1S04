function objetos() {
    const pessoa1 = {
        nome : "Bianca",
        idade : 26,
        nacionalidade : "Brasileira",
        profissao : "Desenvolvedora" 
    }
    const pessoa2 = {
        nome : "Kleverton",
        idade : 32,
        nacionalidade : "Brasileiro",
        profissao : "Desenvolvedor Web" 
    }
    const pessoa3 = {
        nome : "Kalel",
        idade : 4,
        nacionalidade : "Brasileiro",
        profissao : "Estudante" 
    }

    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);

    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 veja os dados";
}