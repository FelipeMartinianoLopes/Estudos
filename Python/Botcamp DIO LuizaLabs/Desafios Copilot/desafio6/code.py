# Desafio 6 - Verificando Palíndromos

palavra = input("Digite uma palavra: ")

limpa = palavra.replace(" ", "").lower()

if limpa == limpa[::-1]:
    print("É um palíndromo!")
else:
    print("Não é um palíndromo.")
