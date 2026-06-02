//const: Declara uma variável de escopo local, que não pode ser reatribuída(imutável)
const estudante = 'Felipe';
    //estudante = 'Joao'; Isso causará um erro (TypeError TypeError: Assignment to constant variable.)
        //TypeError: São erros que ocorrem quando uma operação não é possível de ser executada, devido ao tipo de dado envolvido.

//Diferença entre var e let:
//var:Declara uma variável que pode ser let professor e redeclarada em qualquer lugar.
//let: Declara uma variável que pode ser reatribuída mas não pode ser redeclarada.
let professor;
var disciplina;
    //Obs:Ambas podem ser declarada na hora ou depois.
//Dica: Evite usar var para evitar problemas com escopo global. Use apenas se precisa de compatibilidade com navegadores muito antigos ou tem código legado que já usa var

    //Atribuindo valor a variável professor e disciplina
professor = 'Alessandra';
disciplina = 'JavaScript Básico';

//Console.log(): Exibe uma mensagem no console do navegador ou do ambiente de execução
    console.log(estudante);
    console.log(professor);
    console.log(disciplina);

var disciplina = 'Variaveis'; // Redeclarando a variável disciplina
    console.log(disciplina);