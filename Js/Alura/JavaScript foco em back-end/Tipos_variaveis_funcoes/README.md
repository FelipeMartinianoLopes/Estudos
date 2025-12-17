# Resumo: Tipos, Variáveis e Exercícios

## **Escopo**
- **Descrição**: Demonstra conceitos de escopo em JavaScript (global, de função e de bloco) e como `var`, `let` e `const` se comportam em cada contexto.
- **Pontos-chave**:
  - **Global:** variáveis declaradas fora de funções/blocos são acessíveis em todo o código.
  - **Função:** variáveis declaradas dentro de uma função só existem ali.
  - **Bloco:** `let` e `const` ficam dentro do bloco `{ }`; `var` ignora bloco e vaza para função/global.

## **Variáveis**
- **Descrição**: Mostra diferenças entre `const`, `let` e `var`, reatribuição e redeclaração, e exibe valores com `console.log`.
- **Pontos-chave**:
  - `const`: não pode ser reatribuída;
  - `let`: pode ser reatribuída mas não redeclarada no mesmo escopo;
  - `var`: pode ser redeclarada e tem comportamento de escopo menos previsível — evitar quando possível.

## **Tipos de Dados**

### **Strings**
- Representam textos e podem ser criadas com:
  - Aspas simples: `'texto'`
  - Aspas duplas: `"texto"`
  - Template literals (crase): `` `texto` ``
- Template literals permitem interpolação de variáveis usando `${variavel}`
- Exemplo: `` `Seja bem-vindo, ${nome}!` ``

### **Numbers**
- Representam números (inteiros e decimais)
- Importante: Números não usam aspas
- Separador decimal é o ponto (.) - exemplo: `7.5`
- Cuidado com strings que parecem números: `'6.5'` é texto, não número
- Para converter string para número:
  - `Number()` - converte para número
  - `parseInt()` - converte para inteiro
  - `parseFloat()` - converte para decimal
- Para formatar casas decimais: `toFixed(2)` limita a 2 casas

### **Booleans**
- Representam valores lógicos: `true` (verdadeiro) ou `false` (falso)
- São usados em comparações e condições
- Exemplo: `const aprovado = media >= 7;`

## **Exercícios**

### **`exercicio1.js`**
Declara três variáveis (string, número, booleano) e exibe o resultado — inclui função `podeDirigir(numero)` que retorna `true` se `numero >= 18`.

### **`exercicio2.js`**
Junta `primeiroNome` e `ultimoNome` em `nomeCompleto` usando concatenação (`+`) e em `nomeCompletoTemplate` usando template string (`` `${primeiroNome} ${ultimoNome}` ``).

### **`exercicio3.js`**
Cria mensagem usando template string juntando uma string com um número (`idade`) para formar uma frase.

### **`exercicio4.js`**
Mostra reatribuição de variável — declara `reatribuir`, imprime valor inicial, reatribui e imprime novo valor.

### **`exercicio5.js`**
Demonstra diferença de escopo entre `var` e `let` — declara variáveis fora e dentro de um bloco `if` e imprime para observar quais são acessíveis fora do bloco (o `let` dentro do bloco causa `ReferenceError` fora).

### **`exercicio6.js`**
Implementação para verificar se "está chovendo" de forma aleatória (cara ou coroa). Usa `Math.random() >= 0.5` para decidir booleanamente se está chovendo e exibe mensagens instrutivas (levar guarda-chuva ou não).

### **`exercicio7.js`**
Manipulação de Strings - Uso de `length`, `toUpperCase()`

### **`exercicio8.js`**
Null e Undefined - Diferença entre valores intencionalmente vazios (`null`) e não definidos (`undefined`)

### **`exercicio9.js`**
Template Strings - Combinação de diferentes tipos de dados em uma string

### **`exercicio10.js`**
Conversão de Tipos - String para número e número para string

### **`exercicio11.js`**
Métodos de String - `toLowerCase()`, `slice()`, etc.

## **Notas e dicas rápidas**
- Cada execução de `exercicio6.js` gera um resultado aleatório para "está chovendo" (50% de chance cada).
- Use `console.log` para inspecionar valores durante aprendizado.
- Prefira `let` e `const` em código moderno; reserve `var` para compatibilidade legada apenas.
- O operador `+` pode somar números ou concatenar strings.
- Dados de formulários/APIs frequentemente chegam como strings.
- Sempre verifique o tipo de dado com `typeof` quando necessário.
- Template literals são mais legíveis que concatenação com `+`.

## **Boas Práticas**
- Use nomes descritivos para variáveis.
- Converta strings para números antes de cálculos.
- Prefira template literals para strings complexas.
- Comente o código para explicar conversões necessárias.
