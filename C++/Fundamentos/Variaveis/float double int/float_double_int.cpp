// Estudo de variaveis. Float, double e int
#include <iostream>

int main() {
    // Cadastro do usuario
    std::string nome;
    int idade;
    float altura;
    double peso;  

    std::cout << " Ola, bem vindo a academia! Vamos realizar seu cadastro. \n";
    std::cout << " Digite seu nome, sua idade, sua altura e seu peso: \n";
    std::cin >> nome >> idade >> altura >> peso;
    std::cout << " Muito obrigado" << nome << ", seu cadastro foi realizado com sucesso! \n";
    
    // Mensalidade e desconto
    double mensalidade = 99.90; 
   
    std::cout << " O valor da mensalidade e de: R$ " << mensalidade << "o mes. \n";
    double desconto = mensalidade * 0.20;
    std::cout << " Ao assinar o plano trimestral, voce ganha 20% de desconto, e pagara R$: " << mensalidade - desconto << ". Deseja assinar o plano trimestral?  (s/n) \n";
    char resposta;
    std::cin >> resposta;
        if (resposta == 's' || resposta == 'S') {
            std::cout << " Voce assinou o plano trimestral! Com esse plano voce ganha uma avaliacao fisica gratuita por mes. Fale com um de nossos treinadores para agendar sua avaliacao. \n";}
            else {
                std::cout << " Seu plano mensal foi ativado! Aproveite nossas instalacoes e bons treinos! \n";}
            
    // Calculo do IMC
    std::cout << " Deseja calcular seu IMC (Indice de Massa Corporal)? (s/n) \n";
    std::cin >> resposta;
    if (resposta == 's' || resposta == 'S') {
        double imc = peso / (altura*altura);
        std::cout << " Seu IMC e: " << imc << ". \n";}
        else {
            std::cout << " Caso queira calcular seu IMC depois, basta entrar na opcao IMC no menu em nosso aplicativo. Bons treinos! \n";
        }
    return 0;

}