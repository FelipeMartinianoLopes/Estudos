# FastAPI
### Quem é o FastAPi?
Framework FastAPI, alta performance, fácil de aprender, fácil de codar, pronto para produção.
FastAPI é um moderno e rápido (alta performance) framework web para construção de APIs com Python 3.6 ou superior, baseado nos type hints padrões do Python.

### Async
Código assíncrono apenas significa que a linguagem tem um jeito de dizer para o computador / programa que em certo ponto, ele terá que esperar por algo para finalizar em outro lugar

# Projeto
## WorkoutAPI

Esta é uma API de competição de crossfit chamada WorkoutAPI (isso mesmo rs, eu acabei unificando duas coisas que gosto: codar e treinar). É uma API pequena, devido a ser um projeto mais hands-on e simplificado nós desenvolveremos uma API de poucas tabelas, mas com o necessário para você aprender como utilizar o FastAPI.

## Stack da API

A API foi desenvolvida utilizando o `fastapi` (async), junto das seguintes libs: `alembic`, `SQLAlchemy`, `pydantic`. Para salvar os dados está sendo utilizando o `postgres`, por meio do `docker`.

## Execução da API

Para executar o projeto, utilizei a [pyenv](https://github.com/pyenv/pyenv), com a versão 3.11.4 do `python` para o ambiente virtual.

Caso opte por usar pyenv, após instalar, execute:

```bash
pyenv virtualenv 3.11.4 workoutapi
pyenv activate workoutapi
pip install -r requirements.txt
```
Para subir o banco de dados, caso não tenha o [docker-compose](https://docs.docker.com/compose/install/linux/) instalado, faça a instalação e logo em seguida, execute:

```bash
make run-docker
```
Para criar uma migration nova, execute:

```bash
make create-migrations d="nome_da_migration"
```

Para criar o banco de dados, execute:

```bash
make run-migrations
```

## API

Para subir a API, execute:
```bash
make run
```
e acesse: http://127.0.0.1:8000/docs

## Sobre o desafio

Esse foi um dos desafios mais dificeis que ja fiz até o momento. Para a execução usei o auxilio do chatGPT e das aulas (Ainda ainda esta com erros )

# Desafio
    - adicionar query parameters nos endpoints
        - atleta
            - nome
            - cpf
    - customizar response de retorno de endpoints
        - get all
            - atleta
                - nome
                - centro_treinamento
                - categoria
    - Manipular exceção de integridade dos dados em cada módulo/tabela
        - sqlalchemy.exc.IntegrityError e devolver a seguinte mensagem: “Já existe um atleta cadastrado com o cpf: x”
        - status_code: 303
    - Adicionar paginação utilizando a lib: fastapi-pagination
        - limit e offset

#IMPLEMENTAÇÕES

✅ 1. Adição de Query Parameters nos Endpoints (GET /atletas)

Foi adicionado suporte a filtros opcionais diretamente na rota de listagem de atletas.

🔍 Query Parameters implementados

nome → filtra atletas pelo nome (busca parcial)

cpf → filtra atletas pelo CPF (busca exata)

✔ Objetivo

Permite consultas mais flexíveis, sem a necessidade de rotas adicionais.

✅ 2. Customização da Response do GET ALL

O endpoint GET /atletas foi ajustado para retornar uma resposta customizada, contendo apenas:

nome

categoria

centro_treinamento

✔ Novo schema criado:

AtletaListOut

✔ Objetivo

Reduzir carga de dados e fornecer um retorno mais objetivo para listagens gerais.

✅ 3. Tratamento Específico de IntegrityError (CPF duplicado)

O endpoint de criação de atletas (POST /atletas) agora captura a exceção:

sqlalchemy.exc.IntegrityError


Quando o CPF já está cadastrado, a API responde com:

status_code: 303

mensagem:

"Já existe um atleta cadastrado com o cpf: X"

✔ Objetivo

Melhorar clareza do erro e fornecer feedback adequado ao usuário/cliente.

✅ 4. Implementação de Paginação com fastapi-pagination

Foi adicionado um endpoint específico com paginação:

GET /atletas/paginated

✔ Paginação no formato limit/offset

A resposta segue o padrão:

limit: quantidade de itens por página

offset: deslocamento da consulta

✔ Exemplo:

GET /atletas/paginated?limit=5&offset=10

✔ Objetivo

Melhorar desempenho e organização em listagens grandes.

# Referências

FastAPI: https://fastapi.tiangolo.com/

Pydantic: https://docs.pydantic.dev/latest/

SQLAlchemy: https://docs.sqlalchemy.org/en/20/

Alembic: https://alembic.sqlalchemy.org/en/latest/

Fastapi-pagination: https://uriyyo-fastapi-pagination.netlify.app/
