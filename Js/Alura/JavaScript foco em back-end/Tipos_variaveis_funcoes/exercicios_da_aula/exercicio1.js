//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

let string = "Olá, mundo!";
let numero = 18;

function podeDirigir(numero){
    if(numero >= 18){
        return true;
    }
        return false;
}

console.log(string,numero,podeDirigir(numero));