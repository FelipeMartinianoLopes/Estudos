// Tipo Strings são usados para representar textos.Podemos criar strings usando aspas simples, aspas duplas ou crase (template literals).

const nomeAluno = 'Felipe Martiniano'; // String usando aspas simples
const nomeEscola = "Escola Estadual de JavaScript"; // String usando aspas duplas
const mensagemBoasVindas = `Seja bem-vindo, ${nomeAluno}, à ${nomeEscola}!`; // String usando template literals (crase)

console.log(mensagemBoasVindas);

// Tipo Number é usado para representar números, tanto inteiros quanto decimais.
// Em JavaScript para contas matematicas os numeros são representados por caracteres de numeração sem o uso das 'aspas simples ou duplas.

// Exemplo usando notas bimestrais de um aluno
const notaPrimeiroBimestre = 8;
const notaSegundoBimestre = 7.5; // Para números decimais, usamos o ponto (.) como separador decimal
const notaTerceiroBimestre = 9;
const notaQuartoBimestre = '6.5'; // Este é um número representado como string. Ele não pode ser usado diretamente em operações matemáticas.
// Isto pode acontecer quando os dados são recebidos de fontes externas, como formulários ou APIs, onde os números podem ser enviados como strings.

// Exemplos de como fica a soma das notas com uma das notas como string
const somaNotasIncorreta = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre;
console.log('Soma das notas com string (Incorreta):', somaNotasIncorreta); // Resultado inesperado.

// O que acontece é que em JS o sinal de + tambem é usado para conctenar (juntar) string, por isso em vez de somar os valores numéricos fez com que o resultado das somas juntasse com a string.

// Para corrigir isso, precisamos converter a string para um número.
// Existem algumas formas de fazer essa conversão:

// 1. Usando a função Number()
// const notaQuartoBimestreConvertida = Number(notaQuartoBimestre);
// 2. Usando parseInt() para inteiros
// const notaQuartoBimestreConvertida = parseInt(notaQuartoBimestre);
// 3. Usando parseFloat() para números decimais
const notaQuartoBimestreConvertida = parseFloat(notaQuartoBimestre); // Usamos parseFloat para converter a string em número decimal

// Agora podemos somar corretamente todas as notas
const somaNotasCorreta = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestreConvertida;
console.log('Soma das notas (corrigida):', somaNotasCorreta); // Resultado correto.

// Para calcular a média anual do aluno
const mediaAnual = somaNotasCorreta / 4;
console.log('Média anual do aluno:', mediaAnual);

// Em resumo, em JavaScript, números são representados sem aspas, e strings que representam números precisam ser convertidas para o tipo numérico antes de serem usadas em operações matemáticas.

// Existem casos onde a conta pode envolver numeros com muitas casas decimais, para  controlar a quantidade de casas decimais no resultado, podemos usar o método toFixed():
const numeroComMuitasCasasDecimais = 0.1 + 0.2;
console.log('Número com muitas casas decimais:', numeroComMuitasCasasDecimais);

const numeroFormatado = numeroComMuitasCasasDecimais.toFixed(2); // Limita a 2 casas decimais
console.log('Número formatado com 2 casas decimais:', numeroFormatado);

// Tipo Boolean representa valores lógicos, que podem ser apenas dois: true (verdadeiro) ou false (falso).
const alunoReprovado = mediaAnual < 7; // Verifica se a média anual é menor que 7
console.log('A media do aluno é menor que 7?', alunoReprovado);

const alunoAprovado = mediaAnual >= 7; // Verifica se a média anual é maior ou igual a 7
console.log('A media do aluno é maior que 7?', alunoAprovado);


//Exercício Final cadastro de aluno:

//1.Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase = "O aprendizado de JavaScript é essencial para o desenvolvimento web.Bem-vindo ao mundo da programação! Felipe Martiniano.";
console.log('Comprimento da frase:', frase.length);
console.log('Frase em maiúsculas:', frase.toUpperCase());

//2.Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const cadastroTel= null;
let cadastroEmail;
console.log('Valor da variável cadastroTel (null):', cadastroTel);
console.log('Valor da variável cadastroEmail (undefined):', cadastroEmail);

//3.Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const numeroMatricula = 1; // number
const matriculado = true; // boolean
const nomeCurso= "Sistema de informacao"; // string

console.log(`O aluno ${numeroMatricula} está ${matriculado ? 'matriculado' : 'não matriculado'} no curso ${nomeCurso}.`);

//4.Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const salaAula = 2; // número
const codigoCurso = "101"; // string

console.log('Tipo de salaAula antes da conversão:', typeof salaAula);
const salaAulaConvertida = salaAula.toString();
console.log('Tipo de salaAula após a conversão para string:', typeof salaAulaConvertida);

console.log('Tipo de codigoCurso antes da conversão:', typeof codigoCurso);
const codigoCursoConvertido = Number(codigoCurso);
console.log('Tipo de codigoCurso após a conversão para número:', typeof codigoCursoConvertido);

//5.Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const fraseMotivacional = "A persistência é o caminho do êxito.";
console.log('Frase original:', fraseMotivacional);
console.log('Frase em maiúsculas:', fraseMotivacional.toUpperCase());
console.log('Frase em minúsculas:', fraseMotivacional.toLowerCase());
console.log('Primeiros 10 caracteres da frase:', fraseMotivacional.slice(0, 10));