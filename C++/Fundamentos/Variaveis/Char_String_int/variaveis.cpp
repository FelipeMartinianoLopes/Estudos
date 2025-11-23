//Exercicio de variaveis em C++ . Criar um menu com opção de somar,subtrair,multiplicar, dividir.
#include <iostream>

int main () {

    int cadastro;
    char prosseguir;
    std::cout << "Exercicio de variaveis em C++. Cadastro de usuario.Deseja prosseguir ? (s/n)" << std::endl;
    std::cin >> prosseguir;
        if (prosseguir == 's' || prosseguir == 'S') {
        std::cout << "Digite seu nome:" << std::endl;}
        else {
            std::cout << "Encerrando o exercicio." << std::endl;
            return 0;
        }
    
    std::string nome;
    std::cin >> nome;

    int escolha;
    double num1, num2, resultado;
    std::cout << nome << " Escolha uma operacao:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n";
    std::cin >> escolha;


        if (escolha == 1) {
        std::cout << "Operacao de Soma selecionada.Digite dois numeros" << std::endl;
        std::cin >>num1 >> num2;
        resultado = num1 + num2;
        std::cout << "O resultado da soma e: " << resultado << std::endl;}

        else if (escolha == 2) {
        std::cout << "Operacao de Subtracao selecionada.Digite dois numeros"<< std::endl;
        std::cin >>num1 >> num2;
        resultado = num1 - num2;
        std::cout << "O resultado da subtracao e: " << resultado << std::endl;}

        else if (escolha == 3) {
        std::cout << "Operacao de Multiplicacao selecionada.Digite dois numeros" << std::endl;
        std::cin >>num1 >> num2;
        resultado = num1 * num2;
        std::cout << "O resultado da multiplicacao e: " << resultado << std::endl;}

        else if (escolha == 4) {
        std::cout << "Operacao de Divisao selecionada.Digite dois numeros" << std::endl;
        std::cin >>num1 >> num2;
        resultado = num1 / num2;
        std::cout << "O resultado da divisao e: " << resultado << std::endl;};

        
        return 0;
}