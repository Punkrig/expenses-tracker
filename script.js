const nome = document.getElementById("nome");
const valor = document.getElementById("valor");
const tipo = document.getElementById("tipo");
const tabelaDespesas = document.getElementById("t-despesas");
const tabelaReceitas = document.getElementById("t-receitas");
const diferencaElement = document.getElementById("diferenca");

let totalDespesa = 0;
let totalReceita = 0;

const calcular = () => {
    if (nome.value === "" || valor.value === "" || tipo.value === "") {
        alert("Algum campo está em branco");
    } else {
        if (tipo.value === "despesa") {
            const despesa = parseInt(valor.value);
            totalDespesa += despesa;
            adicionarLinhaTabela(tabelaDespesas, nome.value, despesa);

        } else if (tipo.value === "receita") {
            const receita = parseInt(valor.value);
            totalReceita += receita;
            adicionarLinhaTabela(tabelaReceitas, nome.value, receita);
        }

        const diferenca = totalReceita - totalDespesa;
        diferencaElement.textContent = `Saldo Total: R$ ${diferenca}`;

        if (diferenca < 0) {
            diferencaElement.style.color = "red";
        } else {
            diferencaElement.style.color = "blue";
        }

        nome.value = "";
        valor.value = "";
        tipo.value = "";
    }
};

function adicionarLinhaTabela(tabela, nome, valor) {
    const row = tabela.insertRow();
    const cellNome = row.insertCell();
    const cellValor = row.insertCell();
    cellNome.textContent = nome;
    cellValor.textContent = `R$ ${valor.toFixed(2)}`;
}
