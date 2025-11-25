# Sistema de Academia
🏋️‍♂️ Sobre o Projeto
Sistema simples de cadastro para academia que gerencia informações do usuário, calcula descontos e IMC (Índice de Massa Corporal).

# ✨ Funcionalidades

## ✅ Cadastro do Usuário

Coleta dados pessoais: nome, idade, altura e peso

Usa tipos de variáveis apropriados para cada informação

## 💰 Sistema de Mensalidade

Mensalidade padrão: R$ 99,90

Oferece desconto de 20% para plano trimestral

Calcula automaticamente o valor com desconto

## 🧮 Calculadora de IMC

Calcula o Índice de Massa Corporal

Fórmula: IMC = peso / (altura × altura)

Opcional - usuário decide se quer calcular

# 🗃️ Estrutura de Variáveis

| Variável | Tipo | Descrição | Exemplo |
|----------|------|-----------|---------|
| `nome` | `std::string` | Nome completo do usuário | "João Silva" |
| `idade` | `int` | Idade em anos | 25 |
| `altura` | `float` | Altura em metros | 1.75 |
| `peso` | `double` | Peso em kg | 68.5 |
| `mensalidade` | `double` | Valor da mensalidade | 99.90 |
| `desconto` | `double` | Valor do desconto | 19.98 |
| `resposta` | `char` | Resposta do usuário | 's' |

# 🎯 Fluxo do Programa

Cadastro Inicial → Coleta dados pessoais

Oferece Plano → Proposta de desconto trimestral

Calcula IMC → Opcional, conforme escolha do usuário

Encerramento → Mensagem final personalizada

## 💡 Conceitos de C++ Demonstrados

Tipos de dados: int, float, double, char, std::string

Entrada/Saída: std::cin, std::cout

Estruturas condicionais: if/else

Cálculos matemáticos: operações aritméticas

Interação com usuário: menus e opções

# 🔧 Possíveis Melhorias

Validação de dados de entrada

Loop para tratamento de respostas inválidas

Sistema de persistência de dados

Mais cálculos de saúde (TMB, percentual de gordura, etc.)
