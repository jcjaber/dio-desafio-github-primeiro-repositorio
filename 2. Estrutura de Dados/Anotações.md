# 2. Estrutura de Dados

### O que é estrutura de dados?

- Estrutura de Dados é uma estrutura organizada de dados na memória de um computador ou em qualquer dispositivo de armazenamento, de forma que os dados possam ser utilizados de forma correta.
- Essas estruturas encontram muitas aplicações no desenvolvimento de sistemas, sendo que algumas são altamente especializadas e utilizadas em tarefas específicas.
- Usando as estruturas adequadas através dos algoritmos, podemos trabalhar com um grande quantidade de dados, como aplicações em banco de dados e serviços de busca.

### Algoritmos

- Um algoritmo é um conjunto de instruções estruturadas e ordenadas, seu objetivo é realizar uma tarefa ou operação específica.
- Os algoritmos são utilizados para manipular dados nas estruturas de várias formas, como por exemplo: inserir, excluir, procurar e ordenar dados.
- Em uma estrutura de dados devemos saber como realizar um detemrindao conjunto de operações básicas, como por exemplo:
- inserir Dados
- Excluir Dados
- Localizar um elemento
- Percorrer todos os itens constituintes da estrutura para visualização
- Classificar, que se resume em colocar os itens de dos em uma determinada ordem (numérica, alfabética, etc.)

### Principais Estruturas de Dados

- Vetores e Matrizes (Array)
- Registro
- Lista
- Pilha
- Fila
- Árvore
- Tabela Hash
- Grafos

# Vetores e matrizes

também conhecidos como Arrays

- São estruturas de dados simples que podem auxiliar quando há muitas variáveis do mesmo tipo em um algoritmo.

### Vetor

- Vetor ou Array uni-dimensional é uma variável que armazena várias variáveis do mesmo tipo.
- O vetor é uma estrutura de dados indexada, que pode armazenar uma determinada quantidade de valores do mesmo tipo.

### Matriz

- Matriz o Array multidimensional é um vetor de vetores.
- Uma matriz é um vetor que possui duas ou mais dimensões.

# Registro

- Enquanto Arrays nos permitem armazenar vários dados de um único tipo de dados, o recurso de Registro nos permite armazenar mais de um tipo de dado.
- Toda estrutura e registros te um nome, e seus campos podem ser acessados por meio do uso do operador ponto (.). Ex: preco.livro

# Listas

- Armazena dados de um determinado tipo em uma ordem específicas.
- A diferença do Array é  que listas possuem tamanho ajustável, enquanto Array possuem tamanho fixo.
- Lista Ligada: existem os nós onde cada um dos nós conhece o valor qu está sendo armazenado em seu interior além de conhecer o elemento posterior a ele: por isso ela é chamada de lista ligada, pois os nós são amarrados com essa indicação de qual é o próximo nó.
- Duplamente ligada: são bidirecionais. Sabemos qual o próximo elemento e também o elemento anterior.

# Pilha

- serve como uma coleção de elementos, e permite o acesso a somente um item de dados armazenado.
- acesso de uma pilha é restrito - somente um item pode ser lido e removido por vez.
- LIFO ou UEPS: o primeiro elemento a ser retirado é o último que tiver sido inserido.
- FIFO ou PEPS: o primeiro elemento a ser retirado ó primeiro que tiver sido inserido.

# Fila

- admite a remoção de elementos e inserção de novos sujeita a seguinte regra de operação.
- O elemento  removido é o que está a estrutura há mais tempo, ou seja, o primeiro objeto inserido na fila é também o primeiro a ser removido seguindo o conceito FIFO.

# Árvores

- organiza seus elementos de forma hireárquica, onde existe um elemento que fica no topo, chamado de raiz e existem os elementos subordinados a ele, que são chamados de nós ou folhas.

# Hash

- é uma generalização da ideia array, utiliza um função denominada hashing para espalhar os elementos, fazendo com que os mesmo fiquem de forma não ordenada dentro do array que define a tabela.
- permite a associação de valores a chaves.
- valores é a posição ou indice os elemento se encontra.
- chave é a parte da informação que compoe o elemento a ser manipulado.

# Grafo

- Estruturas que permite programar a relação entre os objetos.
- os objetos são vértices ou nós do grafo.
- os relacionamentos são as arestas.