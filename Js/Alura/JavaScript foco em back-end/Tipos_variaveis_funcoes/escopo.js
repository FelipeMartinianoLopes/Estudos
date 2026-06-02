// Escopo é o contexto completo, define quem pode acessar o que está dentro. Foco: Visibilidade e tempo de vida.
    //Variáveis declaradas com var, let e const possuem escopo diferentes:

//Escopo Global: Variáveis declaradas fora de qualquer função ou bloco, podem ser vistas e acessadas de qualquer lugar do código.

const faculdade = 'Alura'; // Const não pode ser reatribuída

var curso; // var pode ser reatribuída. Evite usar var para evitar problemas com escopo global (prefira let ou const)
curso = 'JavaScript';




//Escopo de função: Codigo que apenas pode ser acessado dentro da função onde foi declarada.    
function turmaJs(){
    let professor; //só pode ser acessada dentro da função
        professor = 'Alessandra';
    let aula;
        aula = 'JavaScript Basico';
            console.log(faculdade, curso, professor, aula); //Acessível aqui



//Escopo de bloco: Codigo que apenas pode ser acessado dentro de um bloco de código (delimitado por chaves {}), como em estruturas condicionais ou loops.
    if (1>0){
        professor = 'Clovis'; // Reatribuindo valor à variável professor
        aula = 'JavaScript avançado'; // Reatribuindo valor à variável aula
            let materia = 'Escopo'; // só pode ser acessada dentro do bloco
                console.log(faculdade, curso, professor, aula, materia); //Acessível aqui dentro do bloco
    }
}

turmaJs(); // Chamando a função para executar o código dentro dela


//Entender escopos evita:

//  Misturar informações que não deveriam se misturar

//      Alterar dados sem querer

//          Criar conflitos entre diferentes partes do seu "sistema"
