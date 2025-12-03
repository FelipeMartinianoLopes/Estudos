# Resumo: Tipos, Variáveis e Exercícios

**Escopo**
- **Descrição:** Arquivo `escopo.js` demonstra conceitos de escopo em JavaScript (global, de função e de bloco) e como `var`, `let` e `const` se comportam em cada contexto.
- **Pontos-chave:**
- **Global:** variáveis declaradas fora de funções/blocks são acessíveis em todo o código.
- **Função:** variáveis declaradas dentro de uma função só existem ali.
- **Bloco:** `let` e `const` ficam dentro do bloco `{ }`; `var` ignora bloco e vaza para função/global.

**Variáveis**
- **Descrição:** Arquivo `Variaveis.js` mostra diferenças entre `const`, `let` e `var`, reatribuição e redeclaração, e exibe valores com `console.log`.
- **Pontos-chave:**
- `const`: não pode ser reatribuída;
- `let`: pode ser reatribuída mas não redeclarada no mesmo escopo;
- `var`: pode ser redeclarada e tem comportamento de escopo menos previsível — evitar quando possível.

**Exercícios**
- **Local:** `exercicios_da_aula/`

- **`exercicio1.js`**: Declara três variáveis (string, número, booleano) e exibe o resultado — inclui função `podeDirigir(numero)` que retorna `true` se `numero >= 18`.

- **`exercicio2.js`**: Junta `primeiroNome` e `ultimoNome` em `nomeCompleto` usando concatenação (`+`) e em `nomeCompletoTemplate` usando template string (``${primeiroNome} ${ultimoNome}``).

- **`exercicio3.js`**: Cria mensagem usando template string juntando uma string com um número (`idade`) para formar uma frase.

- **`exercicio4.js`**: Mostra reatribuição de variável — declara `reatribuir`, imprime valor inicial, reatribui e imprime novo valor.

- **`exercicio5.js`**: Demonstra diferença de escopo entre `var` e `let` — declara variáveis fora e dentro de um bloco `if` e imprime para observar quais são acessíveis fora do bloco (o `let` dentro do bloco causa `ReferenceError` fora).

- **`exercicio6.js`**: Implementação para verificar se "está chovendo" de forma aleatória (cara ou coroa). Usa `Math.random() >= 0.5` para decidir booleanamente se está chovendo e exibe mensagens instrutivas (levar guarda-chuva ou não).


**Notas e dicas rápidas**
- Cada execução de `exercicio6.js` gera um resultado aleatório para "está chovendo" (50% de chance cada).
- Use `console.log` para inspecionar valores durante aprendizado.
- Prefira `let` e `const` em código moderno; reserve `var` para compatibilidade legada apenas.

