# 29. Explorando o Estilo Arquitetural REST com NodeJS

# Objetivos

Micro Serviço de Autenticação em nodeJS

JWT - token que conseguimos garantir uma consistência.

Aplicações clientes

## Ideia:

Login no sistema →

← Token JWT de autenticação

## API REST

| APLICAÇÃO DE CLIENTES |  | MS DE PRODUTOS |  | MS DE AUTENTICAÇÃO |
| --- | --- | --- | --- | --- |
|  | Lista de produtos → |  | Token válido? → |  |
|  | ←Lista de Produtos |  | ← Sim ou não |  |

## MS de autenticação

### CRUD de Usuários

- GET /users
- GET/users/:uuid
- POST/users
- PUT/users,/:uuid

### Autenticação

- POST//token
- POST/token/validate