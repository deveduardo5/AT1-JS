// Função para validar os campos preenchidos
function validarCampos() {
    const nome = document.querySelector("#nome").value.trim();
    const valorHora = parseFloat(document.querySelector("#valor-hora").value.trim());
    const horasTrabalhadas = parseFloat(document.querySelector("#horas-trabalhadas").value.trim());

    // Verifica se os campos estão preenchidos corretamente
    if (!nome || isNaN(valorHora) || isNaN(horasTrabalhadas)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    // Verifica se o valor da hora está dentro do intervalo
    if (valorHora < 20 || valorHora > 500) {
        alert("O valor por hora deve estar entre R$ 20,00 e R$ 500,00.");
        return false;
    }

    // Verifica se a quantidade de horas trabalhadas está dentro do intervalo
    if (horasTrabalhadas < 20 || horasTrabalhadas > 200) {
        alert("A quantidade de horas trabalhadas deve estar entre 20 e 200 horas por mês.");
        return false;
    }

    return true; // Todos os campos estão válidos
}

// Função para calcular o salário
function calcularSalario() {
    // Se a validação falhar, não continua
    if (!validarCampos()) {
        return;
    }

    const nome = document.querySelector("#nome").value;
    const valorHora = parseFloat(document.querySelector("#valor-hora").value);
    const horasTrabalhadas = parseFloat(document.querySelector("#horas-trabalhadas").value);

    // Calcula o valor bruto
    const valorBruto = valorHora * horasTrabalhadas;

    // Calcula o desconto do INSS
    let descontoInss;
    if (valorBruto <= 1500.99) {
        descontoInss = valorBruto * 0.075;
    } else if (valorBruto <= 3000.99) {
        descontoInss = valorBruto * 0.09;
    } else if (valorBruto <= 5000.99) {
        descontoInss = valorBruto * 0.12;
    } else {
        descontoInss = valorBruto * 0.14;
    }

    // Calcula o desconto do IRPF
    let descontoIrpf;
    if (valorBruto <= 1500.99) {
        descontoIrpf = 0;
    } else if (valorBruto <= 2000.99) {
        descontoIrpf = valorBruto * 0.075;
    } else if (valorBruto <= 3000.99) {
        descontoIrpf = valorBruto * 0.15;
    } else if (valorBruto <= 4000.99) {
        descontoIrpf = valorBruto * 0.225;
    } else {
        descontoIrpf = valorBruto * 0.275;
    }

    // Calcula o valor líquido
    const valorLiquido = valorBruto - descontoInss - descontoIrpf;

    // Atualiza os resultados na página
    document.querySelector("#resultFim").innerHTML = `${nome}, o valor a receber líquido é: R$ ${valorLiquido.toFixed(2)}`;
    document.querySelector("#bruto").innerHTML = `R$ ${valorBruto.toFixed(2)}`;
    document.querySelector("#liquido").innerHTML = `R$ ${valorLiquido.toFixed(2)}`;
    document.querySelector("#inss").innerHTML = `R$ ${descontoInss.toFixed(2)}`;
    document.querySelector("#irpf").innerHTML = `R$ ${descontoIrpf.toFixed(2)}`;
}

// Adiciona um evento de clique no botão
const botao = document.querySelector('.btn');
botao.addEventListener('click', calcularSalario);