var prompt = require("prompt-sync")();

function autorizaVoto (anoNascimento) {
    let data = new Date();
    let ano = data.getFullYear();
    let diferenca = ano - anoNascimento;

    if (diferenca >= 18 && diferenca <70){
        return 'Obrigatorio';
    } else if (diferenca >=16 && diferenca <= 130) {
        return 'Opcional';
    } else {
        return 'Negado';
    }
}


let candidatos = [0, 0, 0, 0, 0]; 

function votacao(autorizacao,voto){       
    if (voto == 1){
        candidatos[2] = candidatos[2] +1;
    } else if (voto == 2){
        candidatos[3] = candidatos[3] +1;
    } else if (voto == 3){
        candidatos[4] = candidatos[4] +1;
    } else if (voto == 4){
        candidatos[0] = candidatos[0] +1;
    } else if (voto == 5){
        candidatos[1] = candidatos[1] +1;
    }
}


function exibirResultados() {
    console.log(`Candidato 1: ${candidatos[2]} votos`);
    console.log(`Candidato 2: ${candidatos[3]} votos`);
    console.log(`Candidato 3: ${candidatos[4]} votos`);
    console.log(`Votos nulos: ${candidatos[0]} votos`);
    console.log(`Votos em branco: ${candidatos[1]} votos`);
    
    let votos = candidatos.slice(2,);
    let votos_ = candidatos.slice(2,);
    let ordenar = votos_.sort(function(a,b) {
        return a - b;
    });
    let reverso = ordenar.reverse();
    let index_ganhador = reverso.indexOf(Math.max(...reverso));
    
    if (reverso[0] == reverso[1]){
        console.log(`Empate`);
    } else{
        let candidato_ganhador = ['candidato 1', 'candidato 2', 'candidato 3'][votos.indexOf(Math.max(...votos))];
        console.log (`O candidato ganhador foi o ${candidato_ganhador}.`);
    }
    
}

console.log(`Simulador de votação.`);
console.log();

eleitor = 1;
while (eleitor){
    const anoNascimento = +prompt ('Digite o ano de nascimento: ');
    autorizacao = autorizaVoto(anoNascimento)
    console.log(`Seu voto é ${autorizacao}\n`);

    if (autorizacao == 'Negado'){
        console.log('Você não pode votar');
        continue;
    } else if (autorizacao == 'Opcional'){
        const votar = prompt('Você quer votar? Sim ou nao.'.trim().toLowerCase());
        if (votar == `sim`){
            console.log('1 = Candidato 1\n2 = Candidato 2\n3 = Candidato 3\n4 = Voto Nulo\n5 = Voto em Branco');
            const voto = +prompt ('Escolha seu voto: ');
            console.log();
            votacao(autorizacao, voto)
        } else if (votar == `nao`){
            console.log('Você optou por não votar');
            continue;
        }
    } else {
        console.log('1 = Candidato 1\n2 = Candidato 2\n3 = Candidato 3\n4 = Voto Nulo\n5 = Voto em Branco');
        const voto = +prompt ('Escolha seu voto: ');
        console.log();
        votacao(autorizacao, voto)
    }
    
    console.log(`Para a pergunta a seguir digite 0-Não ou 1-Sim`);
    let eleitor = +prompt (`Existe alguém para votar? `);
    if (eleitor == 0){
        break;
    }
}

console.log();
exibirResultados()
