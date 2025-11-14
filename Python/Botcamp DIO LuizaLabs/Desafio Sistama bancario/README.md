# Sistema-bancario-python

Um sistema bancário básico em Python que permite realizar operações de depósito, saque e consulta de extrato.

## 🚀 Funcionalidades

Depósito: Adicionar valores à conta (apenas valores positivos)

Saque: Realizar retiradas respeitando:

Limite de R$ 500,00 por saque

Máximo de 3 saques diários

Saldo suficiente na conta

Extrato: Visualizar histórico de transações e saldo atual

Sair: Encerrar o sistema

## 🔧 Estrutura do código

saldo: Armazena o saldo atual da conta

limite: Define o valor máximo por saque (R$ 500)

extrato: Registro das transações realizadas

numero_saques: Contador de saques realizados no dia

LIMITE_SAQUES: Constante com o número máximo de saques (3)

# Sistema Bancário Orientado a Objetos

## 🚀 Principais Melhorias em Relação à Versão Anterior

1. Arquitetura Orientada a Objetos

Classes bem definidas com responsabilidades específicas

Herança e polimorfismo para modelagem de entidades

Abstração para definir contratos de comportamento

2. Novas Funcionalidades

Cadastro de clientes com dados completos (nome, CPF, data de nascimento, endereço)

Múltiplas contas por cliente

Sistema de histórico de transações detalhado

Gestão de usuários e contas

Listagem de contas cadastradas

## Gestão de Clientes

Cadastro de novos clientes com CPF único

Validação de duplicidade de CPF

Dados completos: nome, data de nascimento, endereço

## Gestão de Contas

Criação de múltiplas contas por cliente

Numeração automática de contas

Vinculação automática ao cliente

## Operações Bancárias

Depósito: Valores positivos, registrado no histórico

Saque: Com todas as validações (saldo, limite, quantidade)

Extrato: Histórico detalhado com datas e valores

**** Este sistema tem uma evolução significativa em relação à versão anterior, agora oferece uma base sólida e maior organização do código seguindo boas práticas de desenvolvimento.***

##

- Python 3.8+
- Estruturas de dados: Listas e Dicionários
- Funções com parâmetros especiais
