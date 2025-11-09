# Jogo da Adivinhação 

## Descrição
Este é um jogo de adivinhação em C++ onde o jogador tenta descobrir um número secreto entre 1 e 100. O programa oferece dois modos de jogo: Single Player e Multiplayer, além de funcionalidades avançadas como sistema de recordes e dicas matemáticas.

## Como Compilar e Executar
Para compilar e executar o jogo, use os seguintes comandos no terminal:

```bash
g++ jogodaadivinhacao.cpp -o jogo
./jogo.exe
```

## Funcionalidades Principais

### 1. Modos de Jogo
- **Single Player**: Um jogador contra o computador
  - Escolha de dificuldade (Fácil, Médio, Difícil)
  - Sistema de recordes com nome do jogador
  - Dicas matemáticas personalizadas

- **Multiplayer**: Até 4 jogadores competindo
  - Turnos alternados entre jogadores
  - Histórico de palpites mostrado ao final
  - Mesmo sistema de recordes e dicas

### 2. Sistema de Dicas Matemáticas
O jogo fornece dicas inteligentes baseadas em:
- Proximidade ao número secreto (quente/frio)
- Paridade (se o número é par ou ímpar)
- Diferencial numérico

### 3. Sistema de Recordes
- Armazena o menor número de tentativas para acertar
- Mostra o nome do recordista
- Atualiza automaticamente quando um novo recorde é estabelecido

### 4. Interface de Usuário
- Menu interativo com opções numeradas
- Feedback claro sobre cada palpite
- Contagem de tentativas restantes
- Mensagens personalizadas de vitória/derrota

## Estrutura do Código

O programa está organizado em várias funções:

1. **mostrar_recorde()**: Exibe o recorde atual
2. **verificar_recorde()**: Compara e atualiza recordes
3. **dica_matematica()**: Gera dicas baseadas na lógica matemática
4. **modo_single_player()**: Lógica do modo um jogador
5. **modo_multiplayer()**: Lógica do modo multiplayer
6. **main()**: Função principal que controla o fluxo do programa

## Variáveis Globais
- `recorde_tentativas`: Armazena o menor número de tentativas
- `recordista`: Armazena o nome do jogador com o recorde

## Dificuldades Disponíveis
1. **Fácil**: 15 tentativas
2. **Médio**: 10 tentativas
3. **Difícil**: 5 tentativas

## Requisitos
- Compilador C++ (g++ recomendado)
- Sistema operacional compatível com a biblioteca padrão C++

## Observações
- O número secreto é gerado aleatoriamente a cada partida
- O programa valida entradas para garantir que estejam no intervalo 1-100
- O histórico de palpites é mostrado apenas no modo multiplayer

Divirta-se jogando!
