// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulario
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount para receber somente numeros.
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
})

// Captando o evento do submit (enviar) do formulario.
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calculando o total da conversão.
        let total = amount * price;

        // Verifica se o valor informado é um número válido.
        if (isNaN(total)) {
            return alert('O valor informado não é um número válido');
        }

        // Exibindo o resultado da conversão.
        result.textContent = formatCurrencyBRL(total);

        // Aplica a classe que exibi o footer para mostrar o resultado.
        footer.classList.add("show-result");
    } catch (error) {
        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result");

        console.log(error);
        alert('Ocorreu um erro na conversão da moeda');
    }
}

// Formata a moeda para o padrão BRL.
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}