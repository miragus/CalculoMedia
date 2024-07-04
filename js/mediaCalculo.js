function calcularMedia() {
    let escola = document.getElementById('escola').value;
    let nome = document.getElementById('aluno').value;
    let materia = document.getElementById('materia').value;
    let ano = document.getElementById('ano').value;
    let turma = document.getElementById('turma').value;
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let num4 = parseFloat(document.getElementById('num4').value);

    let soma = num1 + num2 + num3 + num4;
    let media = soma / 4;

    document.getElementById('resultado').innerHTML = "Escola: " + escola + "<br> Aluno: " + nome + "<br> Série: " + ano + "<br> Turma: " +
    turma + "<br> Matéria: " + materia + "<br> Soma total: " + soma + "<br> Média final: " + media.toFixed(2);

    let resultadoFinalElement = document.getElementById('situacao');

    if (media >= 6) {
        resultadoFinalElement.innerHTML = 'Aluno aprovado!';
    } else {
        resultadoFinalElement.innerHTML = 'Aluno reprovado.';
    }
}
