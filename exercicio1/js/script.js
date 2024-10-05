document.getElementById('resultado').addEventListener('click', function() {
    let nome = document.getElementById('nome').value;
    let inscricao = document.getElementById('inscricao').value;
    let ano = document.getElementById('ano').value;

    let natureza = parseInt(document.getElementById('natureza').value);
    let humanas = parseInt(document.getElementById('humanas').value);
    let linguagens = parseInt(document.getElementById('linguagens').value);
    let matematica = parseInt(document.getElementById('matematica').value);
    let redacao = parseInt(document.getElementById('redacao').value);

    //Parte do cálculo
    let notas = [natureza, humanas, linguagens, matematica, redacao];
    let resultados = notas.map(nota => {
        if (nota >= 550) {
            return "<span class='aprovado'>Aprovado</span>";
        } else if (nota < 0) {
            return "Nota inválida";
        } else {
            return "<span class='reprovado'>Reprovado</span>";
        }
    });

    //Parte da verificação do ano de nascimento
    if (ano >= 1901 && ano <= 2007) {
        ano = ano
    }

    else {
        ano = 'Data Inválida'
    }

    //Parte que passa o resultado
    let output = `<p>Nome: ${nome}</p><p>Número de Inscrição: 2024${inscricao}</p><p>Ano de Nascimento: ${ano}</p><h4>Resultados:</h4><p>Natureza: ${resultados[0]}</p><p>Humanas: ${resultados[1]}</p><p>Linguagens: ${resultados[2]}</p><p>Matemática: ${resultados[3]}</p><p>Redação: ${resultados[4]}</p>`;

    

    document.getElementById('resultadoDisplay').innerHTML = output;
});
