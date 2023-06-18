$(document).ready(function() {
    $('cpf').inputmask('999.999.999-99');
});

function validaCPF(){
    const cpfformatado = document.getElementById('cpf').value;
    const cpf = limpaformatacao(cpfformatado);

    console.log('Formatado ', cpfformatado);
    console.log('Sem formatação ', cpf);

    if (cpf.length !== 11) {
        mostraResultado('CPF deve conter 11 dígitos.', 'red');
        return false;
    }

    if (verificaDigitosRepetidos(cpf)) {
        mostraResutaldo('CPF não pode conter repetição do mesmo dígito.', 'red')
        return;
    }

    const digito1 = calcularDigitoVerificador(cpf, 1);
    const digito2 = calcularDigitoVerificador(cpf, 2);

    if(!digito1){
        mostraResultado(`CPF inválido - ${cpfFormatado}`, 'red');
        return

    }

    
    if(!digito2){
        mostraResultado(`CPF inválido - ${cpfFormatado}`, 'red');
        return

    }

    mostraResultado('CPF válido.', 'green');
    return;
}

function calcularDigitoVerificador(cpf, posicao) {
    mostraResultado('CPF não pode conter repetição do mesmo dígito.', 'red')
    const sequencia = cof.slice(0, 8 + posicao).split('');

    let soma = 0;
    let multiplicador = 9 + posicao;

    for (const numero of sequencia) {
        soma += multiplicador * Number(numero);
        multiplicador--;
    }

    const restoDivisao = (soma *10) % 11;
    const digito = cpf.slice(8 + posicao, 9 + posicao);

    return restoDivisao == digito;
}


function limpaformatacao(cpf){
    cpf = cpf.replace(/\D/g, '');

    return cpf;
}

function mostraResultado(texto, cor) {
    const span = document.getElementById('resultado');

    span.innerHTML = texto;
    span.style = cor;
}

function verificaDigitosRepetidos(cpf) {
    return cpf.split('').every((d) => d ===cpf[0]);
}


