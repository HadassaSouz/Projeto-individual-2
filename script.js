const calcular = document.getElementById('calcular');


function financiamento () {
    const nome = document.getElementById('nome').value;
    const renda = document.getElementById('renda').value;
    const bem = document.getElementById('bem').value;
    const entrada = document.getElementById('entrada').value;
    const taxa = document.getElementById('taxa').value;
    const n = document.getElementById('n').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && renda !== '' && bem !== '' && entrada !== '' && taxa !== '' && n !== '') {
        
        const i = taxa/100;
        const PV = (bem - entrada);
        const PMT = (((1+i)**n)*i*PV)/(((1+i)**n-1)).toFixed[2];
        const MAX = (renda * 0.3);
       
        resultado.textContent = `Olá, ${nome}! Seu financiamento foi aprovado. Pague ${n} parcelas de R$ ${PMT} `;

    }else {
        resultado.textContent = 'Para simular o seu financiamento, preencha todos os campos.';
    }

}
calcular.addEventListener('click', financiamento);
/*if (PMT <= renda*0,3){
echo = financiamento aprovado
}
else {
    echo = "financiamento não aprovado"
}
*/