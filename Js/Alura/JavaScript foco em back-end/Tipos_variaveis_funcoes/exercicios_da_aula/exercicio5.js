//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var foraDoBlocoVar = 1;
let foraDoBlocoLet = 2;

console.log(" 1 = Var e 2 = Let");

console.log("Estou fora do bloco e meu valor é ",foraDoBlocoVar);
console.log("Estou fora do bloco e meu valor é ",foraDoBlocoLet);

if (1>0){
    var dentroDoBlocoVar = 1;
    let dentroDoBlocoLet = 2;

    console.log("Estou dentro do bloco e meu valor é ",dentroDoBlocoVar);
    console.log("Estou dentro do bloco e meu valor é ",dentroDoBlocoLet);
        
    console.log("Estou dentro do bloco e tentando ler o var fora do bloco e meu valor é ",foraDoBlocoVar);
    console.log("Estou dentro do bloco e tentando ler o let fora do bloco e meu valor é ",foraDoBlocoLet);

    }
    console.log("Estou fora do bloco e tentando ler o let dentro do bloco e meu valor é ReferenceError");
    console.log(dentroDoBlocoLet); // Vai gerar um erro, pois o let não é acessível fora do bloco
    
