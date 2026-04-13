// Função para gerar a tabuada pelo input de número
function tabuada() {
    const numero = document.getElementById('txtn').value;
    const resultado = document.getElementById('digitenum');

    if (numero === '' || numero <= 0) {
        resultado.innerHTML = '<p style="color: #e74c3c;">Por favor, digite um número válido!</p>';
        return;
    }

    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} × ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = tabuada;
    preencherSelect(numero);
}

// Função para preencher o select com opções
function preencherSelect(numero = null) {
    const select = document.getElementById('seltab');
    select.innerHTML = '<option value="">-- Selecione uma tabuada --</option>';

    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Tabuada do ${i}`;
        select.appendChild(option);
    }

    if (numero) {
        select.value = numero;
    }
}
