# 1. Introdução a lógica de programação

## Entendendo o que é lógica

- Programar é resolver problemas.
- É preciso entender a lógica antes de digitar os códigos.
- Lógica é coerência de raciocínio de ideias; sequência coerente, regular e necessária de acontecimentos e coisas.
- Lógica de programação significa apenas contextualizar a lógica na programação de computadores, buscando melhor a sequência de ações para solucionar um problema.
- Metacognição: pensar como você pensa.
- Abstração: é a habilidade de concentrar nos aspectos essenciais de um contexto qualquer, ignorando características menos importantes ou acidentais.

## Algorismos e pseudocódigos

- Algoritmo: é uma sequência de passos que resolve um problema”
- exemplo:

```jsx
inicio-dia
	acordei

Levantei da cama

Troquei de roupa

Escovei os dentes

Fui a padaria

Tomei café

Escovei os dentes

Fui ao trabalho

...
fim-diA
```

- Pseudocódigo: é uma forma genérica de escrever um algoritmo, utilizando uma linguagem simples (nativa, ou seja, em português a quem o escreve, de forma ser entendida por qualquer pessoa).

## DESAFIOS

- Site com alguns desafios de lógica de programação com algoritmos

[Check out what I made](https://studio.code.org/s/mc/lessons/1/levels/1)

- [x]  completado

- Site com desafios de lógica para se criar um pseudocódigo

[Wolf, Sheep And Cabbage Game](https://www.proprofsgames.com/wolf-sheep-and-cabbage/)

```jsx
INICIO DO JOGO
PEGAR CARNEIRO
CRUZAR BARCO
DEIXAR CARNEIRO
CRUZAR BARCO
PEGAR REPOLHO
CRUZAR BARCO
DEIXAR REPOLHO
PEGAR CARNEIRO
CRUZAR BARCO
DEIXAR CARNEIRO
PEGAR LOBO
CRUZAR BARCO
DEIXAR LOBO 
CRUZAR BARCO
PEGAR CARNEIRO
CRUZAR BARCO
DEIXAR CARNEIRO
FIM DO JOGO
```

- [x]  completado

- Site com mais um desafio para se resolver criando um pseudocódigo

[](https://rachacuca.com.br/jogos/pinguins-numa-fria/)

```jsx
INICIO
PEGAR FILHO_VERMELHO E PAI_VERMELHO
CRUZAR
DEIXAR PAI_VERMELHO
CRUZAR
PEGAR FILHO_VERDE
CRUZAR
DEIXAR FILHO_VERMELHO
CRUZAR
PEGAR PAI_VERDE
CRUZAR
DEIXAR PAI_VERDE
CRUZAR
PEGAR FILHO_AZUL
CRUZAR
DEIXAR FILHO_VERDE
CRUZAR 
PEGAR PAI_AZUL
CRUZAR
DEIXAR PAI_AZUL E FILHO AZUL
FIM
```

- [x]  completado

## APRENDENDO FLUXOGRAMA, VARIÁVEIS E CONSTANTES

- Fluxograma é uma ferramenta utilizada para representar graficamente o algoritmo, isto é, a sequência lógica e coerente do fluxo de dados.
- é um tipo de diagrama e pode ser entendido como uma representação esquemática de um processo. Podemos entendê-lo, na prática, como a documentação dos passos necessários para a execução de um processo qualquer.
- na programação, uma variável é um objeto(uma posição, frequentemente localizada na memória) capaz de reter e representar um valor ou expressão.
- Uma variável é um espaço na memória do computador destinado a um dado que é alterado durante a execução do algoritmo.

```jsx
INICIO
DECLARA nota1: numero
DECLARA nota2: numero
DECLARA nota3: numero
DECLARA nota4: numero
DECLARA media: numero
LEIA (nota1)
LEIA (nota2)
LEIA (nota3)
LEIA (nota4)
media=(nota1+nota2+nota3+nota4)/4
IMPIRMIR(media)
FIM
```

- As variáveis e as contstantes podem ser classificadas basicamente de quatro tipos: Numéricas, Caracteres, Alfanuméricas ou  Lógicas
- As constantes são valores imutáveis e não são alterados durante a vida útil do programa.

```jsx
INICIO
DECLARA pi=3,14
DECLARA raio: número
FIM
```

## Tomadas de decisões e Expressões

- Expressões aritméticas são expressões que utilizam operadores aritméticos e funções aritméticas envolvendo constantes e variáveis.

```jsx
soma +
Subtração -
Multiplicação *
Divisão /
Potenciação 
Porcentagem %
```

- Expressões literais são expressões com constantes e/ou variáveis que tem como resultado valores literais. Iremos utilizar as expressões literais na atribuição de valor para uma variável ou constantes

```jsx
variáveis
A B C
comando de atribuição / Operação
A= = 2 
B = A +3
C = A + B
```

- operadores relacionais: São expressões composta por outras expressões ou variáveis numéricas com operadores relacionais. As expressões relacionais retornam valores lógicos (verdadeiro/falso)

```jsx
> maior que 
>= maior ou igual
< menor que
<= menor ou igual
== <> igualdade
!= diferente
```

 

- Tomadas de decisão: quando escrevemos programas, geralmente ocorre a necessidade de decidir o que fazer dependendo de alguma condição encontrada durante a execução.

## Concatenação

- é um termo usado em computação para designar a operação de unir o conteúdo de duas strings.
- String é uma sequência de caracteres.
- Concatenação: Agrupamento de duas ou mais células que, incluindo fórmulas, textos ou outras informações contidas no seu interior, e que dá origem a um único resultado

## Estrutura de Repetição

- Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos de acordo com uma condição ou com um contador.

# Linguagens de Promação e o Portugol

### O que são Linguagens de Programação

- É uma linguagem escrita e formal que especifica um conjunto de instruções e regras usadas para gerar programas (software). Um software pode ser desenvolvido para rodar em um computador, dispositivo móvel ou em qualquer equipamento que permita sua execução.
- O que é óbvio para você, certamente não é óbvio para uma máquina. E se você quer que a má2quina faça algo para você, precisa “falar com ela”.
- A função das linguagens de programação é servir de um meio de comunicação entre computadores e humanos

### Linguagens de alto nível

8 Essas são aquelas cuja sintaxe se próxima mais da nossa linguagem e se distanciam mais da linguagem de máquina

### Linguagens de baixo nível

- É aquela que se aproxima mais da linguagem de máquina. Essas são as que você precisa ter conhecimento direto da arquitetura do computador para fazer alguma coisa.

### Linguagens compiladas

- linguagem em que o código fonte é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido por meio de um processo chamado compilação.

### Interepretadas

- É uma linguagem em que o código fonte é executado por um programa de computador chamado interpretador, que em seguida é executado pelo sistema operacional ou processador.

### O que é POrtugol

- Pseudolinguagem que permite o leitor desenvolver algoritmos estruturados em português.
- Permite pensar o problema em si e não no equipamento que irá execturar o algoritmo.

# Desvios Condicionais e boas práticas de programação

### Desvio condicional - Se

- É utilizada a palavra reservada se, a condição a ser testada entre parênteses e as instruções que devem ser executadas entre chaves caso o desvio seja verdadeiro.

### Desvio condicional - Caso

- Reduz a complexidade na escolha de diversas opções. Neste comando não é possível o uso de operadores lógicos, ele apenas trabalha com valores definidos.

# Laços de Repetição no Portugol

- é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou contador.

# Matrizes e vetores

- Uma matriz é uma coleção de variáveis de mesmo tipo, acessíveis com um único nome e armazenados contiguamente na memória.
- A individualização de cada variável de um vetor é feita através de índices.
- Os vetores são matrizes de uma só dimensão.