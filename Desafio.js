const rankOut = rankCalc(12, 5)

console.log(`O Herói tem um saldo de vitorias de "${rankOut}", e o mesmo está no rank "${rank}!"`)


function rankCalc(vitorias, derrotas) {

    let rankSaldo = vitorias - derrotas;


    //uma estrutura de repetição não é necessaria aqui mas já que foi pedido no desafio...
    do {

        if (rankSaldo <= 10) {

            rank = "Ferro"
            return rankSaldo;
        }

        if (rankSaldo > 10 && rankSaldo <= 20) {

            rank = "Bronze"

            return rankSaldo;
        }

        if (rankSaldo > 20 && rankSaldo <= 50) {

            rank = "Prata"

            return rankSaldo;
        }

        if (rankSaldo > 50 && rankSaldo <= 80) {

            rank = "Ouro"

            return rankSaldo;
        }

        if (rankSaldo > 80 && rankSaldo <= 90) {

            rank = "Diamante"

            return rankSaldo;

        }

        if (rankSaldo > 90 && rankSaldo <= 100) {

            rank = "Lendário"

            return rankSaldo;
        }

        if (rankSaldo > 100) {

            rank = "Imortal"

            return rankSaldo;

        }





    } while (rank == "");

}