# 3. Git & GitHub

### Introdução

- Sistema de versionamento de código.
1. Controle de Versão
2. Armazenamento em nuvem
3. Trabalho em equipe
4. Melhorar seu código
5. Reconhecimento

[Comando básicos Terminal](https://www.notion.so/Comando-b-sicos-Terminal-8cb282413b724aa181be78ce45457986)

# Entedendo como o GIT funciona por baixo dos panos

### SHA1

Secure HAsh Algorithm, é um conjunto de funções  hash criptográficas projetadas pela NSA (Agênncia de Segurança Nacional do EUA).

A encriptação gera conjunto de characteres identificador de 40 dígitos.

```powershell
openssl  sha1 arquivo.txt
```

## Objetos fundamentais

- BLOBS
- TREES
- COMMITS

### BLOBS

- Os arquivos ficam guardados dentro do objeto BLOB
- Sua estrutura, contém os metadados:
1. Tipo de objeto: blob
2. Tamnanho
3. \0
4. conteúdo do arquivo

### TREE

- Armazena os blobs
- Aponta para blobs e outras árvores.
- armazena o nome do arquivo.
- Ele monta a estrutura de onde estão os arquivos.
- funciona como as pastas dos diretórios.
- As arvores tbm geram sha1.

### COMMIT

- Aponta para uma árvore, para um parente(ultimo commit antes dele), autor, para a mensagem e timestramp.
- Tem seu próprio sha1.

### Guit é um sistema distribuído seguro

## Chave SSH e Token

### Chave SSH

gerar uma chave SSH no Git

```powershell
ssh-keygen -t ed22519 -c jcjaber@gmail.com
```

ir até a pasta com o terminal e digitar (apara mostrar a chave e copiar a chave)

```powershell
cat id_ed25519.pub
```

Aí entrar no site do GIT para cadastrar a chave SSH

ativar o ssh agent, ainda na pasta

```powershell
$ eval $(ssh-agent -s)
```

adicionar identidade por fim

```powershell
ssh-add id_ed25519
```

### Token de acesso pessoal

- Git
- Developer settings
- Personal acess tokens
- Criar e copiar token
- git clone https
- Colar token

## Primeiros comandos com GIT

### Criando o primeiro repositório

- Criar pasta
- comando git init
- qd damos init inciamos um repositório

### Ciclo de vida

- Untracked
- Unmodified
- Modified
- Staged
- Untracked → criar arquivo → git add → Staged
- Unmodified → alteração → modified
- Modified → git add → Staged
- Unmodified → remover arquivo →untreacked

### Repositórios

servidor:

- remote repository

ambiente de desenvolvimento

- working directory
- Staging area
- Local repository

Working Directory → Staging area

- Untracked → criar arquivo → git add → Staged
- Modified → git add → Staged

 Staging area → local repository

- Staged → commit → Unmodified

### 

# comandos para tirar configuração

```powershell
git config --global unset user.email
git config --global unset user.name
```