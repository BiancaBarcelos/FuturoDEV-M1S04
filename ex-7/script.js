function cumprimentos() {
    let hora = Math.floor(Math.random() * 24) + 1;

    if (hora > 6 && hora < 13) {
        console.log("Bom dia! O sol já nasceu lá na fazendinha")
    } else if (hora > 12 && hora < 18){
        console.log("Boa tarde!")
    } else {
        console.log("Boa noite!")
    }
    console.log(`são ${hora}h`)

    let pBtn = document.getElementById("respostaBtn");
    pBtn.innerHTML = "Aperte F12 e veja o horário";
}