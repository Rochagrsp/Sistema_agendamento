let sala = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
// 0= Livre
// 1= Ocupado

function reservar(linha,coluna,cadeira){
    // verifica se a cadeira estar livre
    if (sala[linha][coluna]==0){
    // muda a matriz para ocupado
        sala[linha][coluna]==1
    // muda a cor da cadeira para veremelha
        cadeira.style.backgroundColor="red"

        document.getElementById("mensagem").innerText=
        "Cadeira Reservada com sucesso!";

    }else{
        document.getElementById("mensagem").innerText=
        "Cadeira Indisponivel!";
    }
}