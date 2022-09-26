var simboloConta;

function simbolo(sinal) {

    let p = document.getElementById('simbolo');
    p.innerHTML = sinal;

    resultado.innerHTML = '';

    simboloConta = sinal;  
}

function calcular(){
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');

    let resultado = document.getElementById('resultado');

    let numero1 = Number(n1.value);
    let numero2 = Number(n2.value);

    let adi = document.getElementById('adi');
    let sub = document.getElementById('sub');
    let mul = document.getElementById('mul');
    let div = document.getElementById('div');

    if(simboloConta == 'mais'){
        resultado.innerText = numero1 + numero2;
    }
    else if(simboloConta == 'menos'){
        resultado.innerText = numero1 - numero2;
    }
    else if(simboloConta == 'vezes'){
        resultado.innerText = numero1 * numero2;
    }
    else if(simboloConta == 'dividido por'){
        resultado.innerText = numero1 / numero2;
    }
}

