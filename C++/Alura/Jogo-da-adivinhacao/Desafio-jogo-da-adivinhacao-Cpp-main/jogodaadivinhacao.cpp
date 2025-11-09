//Para compilar e executar o jogo = g++ jogodaadivinhacao.cpp -o jogo / .\jogo.exe
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <algorithm>
#include <limits>

using namespace std;

// Variaveis globais para recordes
int recorde_tentativas = numeric_limits<int>::max();
string recordista = "Ninguem";

void mostrar_recorde() {
    if (recorde_tentativas != numeric_limits<int>::max()) {
        cout << "\nRECORDE ATUAL: " << recorde_tentativas 
             << " tentativas (por " << recordista << ")\n";
    } else {
        cout << "\nAinda nao ha recorde estabelecido!\n";
    }
}

void verificar_recorde(int tentativas, const string& nome) {
    if (tentativas < recorde_tentativas) {
        recorde_tentativas = tentativas;
        recordista = nome;
        cout << "\nPARABENS! Voce estabeleceu um novo recorde!\n";
    }
}

void dica_matematica(int palpite, int numero_secreto) {
    int diferenca = abs(palpite - numero_secreto);
    
    if (diferenca == 0) return;
    
    cout << "Dica matematica: ";
    
    if (diferenca <= 5) {
        cout << "Esta MUITO QUENTE! (diferenca < 5)";
    } 
    else if (diferenca <= 15) {
        cout << "Esta quente (diferenca < 15)";
    }
    else if (diferenca <= 30) {
        cout << "Esta frio (diferenca < 30)";
    }
    else {
        cout << "Esta MUITO FRIO! (diferenca > 30)";
    }
    
    if (palpite % 2 == numero_secreto % 2) {
        cout << " - O numero tem a mesma paridade que seu palpite";
    } else {
        cout << " - O numero tem paridade diferente do seu palpite";
    }
    
    cout << endl;
}

void modo_single_player() {
    srand(time(0));
    int numero_secreto = rand() % 100 + 1;
    int tentativas = 0, palpite, max_tentativas;
    int dificuldade;
    string nome;

    cout << "\nDigite seu nome: ";
    cin.ignore();
    getline(cin, nome);

    cout << "\nEscolha a dificuldade:\n1 - Facil (15 tentativas)\n2 - Medio (10 tentativas)\n3 - Dificil (5 tentativas)\n";
    cin >> dificuldade;

    switch (dificuldade) {
        case 1: max_tentativas = 15; break;
        case 2: max_tentativas = 10; break;
        case 3: max_tentativas = 5; break;
        default: max_tentativas = 10;
    }

    mostrar_recorde();

    while (tentativas < max_tentativas) {
        cout << "\nTentativa " << tentativas + 1 << "/" << max_tentativas << ". Digite seu palpite (1-100): ";
        cin >> palpite;
        
        if (palpite < 1 || palpite > 100) {
            cout << "Por favor, digite um numero entre 1 e 100.\n";
            continue;
        }

        tentativas++;

        if (palpite == numero_secreto) {
            cout << "\n*** " << nome << " acertou em " << tentativas << " tentativas! ***\n";
            verificar_recorde(tentativas, nome);
            break;
        } else {
            if (palpite < numero_secreto) {
                cout << "Muito baixo!\n";
            } else {
                cout << "Muito alto!\n";
            }
            dica_matematica(palpite, numero_secreto);
        }
    }

    if (palpite != numero_secreto) {
        cout << "\nFim de jogo! O numero era: " << numero_secreto << "\n";
    }
}

void modo_multiplayer() {
    srand(time(0));
    int numero_secreto = rand() % 100 + 1;
    int tentativas = 0, palpite, max_tentativas = 15;
    vector<string> jogadores;
    vector<int> palpites;
    int num_jogadores;

    cout << "\nQuantos jogadores? (2-4): ";
    cin >> num_jogadores;
    
    if (num_jogadores < 2 || num_jogadores > 4) {
        cout << "Numero invalido. Definindo para 2 jogadores.\n";
        num_jogadores = 2;
    }

    cin.ignore();
    for (int i = 0; i < num_jogadores; i++) {
        string nome;
        cout << "Nome do jogador " << i+1 << ": ";
        getline(cin, nome);
        jogadores.push_back(nome);
    }

    cout << "\nMODO MULTIPLAYER ATIVADO!\n";
    cout << "Cada jogador tera ate " << max_tentativas << " tentativas no total.\n";

    bool acertou = false;
    string vencedor;
    
    while (tentativas < max_tentativas && !acertou) {
        for (int i = 0; i < num_jogadores && !acertou && tentativas < max_tentativas; i++) {
            cout << "\nVez de " << jogadores[i] << " (Tentativa " << tentativas + 1 << "/" << max_tentativas << "): ";
            cin >> palpite;
            
            if (palpite < 1 || palpite > 100) {
                cout << "Por favor, digite um numero entre 1 e 100.\n";
                i--; // Repete a vez do mesmo jogador
                continue;
            }

            palpites.push_back(palpite);
            tentativas++;

            if (palpite == numero_secreto) {
                cout << "\n*** " << jogadores[i] << " acertou em " << tentativas << " tentativas! ***\n";
                acertou = true;
                vencedor = jogadores[i];
                verificar_recorde(tentativas, vencedor);
                break;
            } else {
                if (palpite < numero_secreto) {
                    cout << "Muito baixo!\n";
                } else {
                    cout << "Muito alto!\n";
                }
                dica_matematica(palpite, numero_secreto);
            }
        }
    }

    if (!acertou) {
        cout << "\nFim de jogo! Ninguem acertou. O numero era: " << numero_secreto << "\n";
    }

    // Mostrar historico de palpites
    cout << "\nHistorico de palpites:\n";
    for (size_t i = 0; i < palpites.size(); i++) {
        cout << "Jogador " << jogadores[i % num_jogadores] << ": " << palpites[i] << endl;
    }
}

int main() {
    char opcao;
    char jogar_novamente;
    
    do {
        cout << "\n**************************************";
        cout << "\n*      JOGO DA ADIVINHACAO AVANCADO  *";
        cout << "\n**************************************";
        cout << "\n1 - Modo Single Player";
        cout << "\n2 - Modo Multiplayer";
        cout << "\n3 - Ver Recorde";
        cout << "\n4 - Sair";
        cout << "\nEscolha uma opcao: ";
        cin >> opcao;

        switch (opcao) {
            case '1':
                do {
                    modo_single_player();
                    cout << "\nJogar novamente no modo single player? (s/n): ";
                    cin >> jogar_novamente;
                } while (jogar_novamente == 's' || jogar_novamente == 'S');
                break;
            case '2':
                do {
                    modo_multiplayer();
                    cout << "\nJogar novamente no modo multiplayer? (s/n): ";
                    cin >> jogar_novamente;
                } while (jogar_novamente == 's' || jogar_novamente == 'S');
                break;
            case '3':
                mostrar_recorde();
                break;
            case '4':
                cout << "\nObrigado por jogar!\n";
                return 0;
            default:
                cout << "\nOpcao invalida!\n";
        }
    } while (opcao != '4');

    return 0;
}