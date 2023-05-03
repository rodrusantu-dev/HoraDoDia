 //Criei a variável do botão com um evento de click para executar a função CONTAR
var btnContar = document.getElementById('contar');
btnContar.addEventListener('click', (contar) => {

    //Aqui fui criando as variáveis conforme, fui criando o código.
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    //Aqui a condição para caso um dos campos esteja zerado, informar ERRO.
    // Sinal de || significa OU e sinal && significa E.
    if (ini.value.length ==0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("ERRO - Faltam dados")
    } else {
        res.innerHTML = "Contando... "

        //Aqui transformando os valores de cada campo em números
        let numeroInicial = Number(ini.value)
        let numeroFinal = Number(fim.value)
        let numeroPassos = Number(passo.value)
  
        /*
        Transformar EMOJI unicode para javascript
        U+1F449	--> pega o código unicode
        \u{1f449} (contrabarra+u+código)
        
        */

        //Aqui fazendo a contagem - Estrutura de Repetição.
        //contador vai começar no início
        //enquanto o contador for menor que o fim
        //contador vai receber ele mesmo + passo
        for (let contador = numeroInicial; contador <= numeroFinal; contador += numeroPassos) {
            res.innerHTML += ` ${contador} \u{1f449}`  
        } 
        res.innerHTML += `\u{1F3C1}`  
    }
})
