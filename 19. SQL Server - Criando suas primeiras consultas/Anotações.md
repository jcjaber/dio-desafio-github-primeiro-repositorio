# 19. SQL SERVER - Criando suas primeiras consultas

# O que são banco de dados?

O banco de dados é a organização e armazenagem de informações sobre um domínio específico. De forma mais simples, é o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura.

# O que são SGBDS?

Um Sistema de Gerenciamento de Banco de Dados (SGBD) – do inglês Data Base Management System (DBMS) – é o conjunto de programas de computador (softwares) responsáveis pelo gerenciamento de uma base de dados. Seu principal objetivo é retirar da aplicação cliente a responsabilidade de gerenciar o acesso, a manipulação e a organização dos dados. O SGBD disponibiliza uma interface para que seus clientes possam incluir, alterar ou consultar dados previamente armazenados. Em bancos de dados relacionais a interface é constituída pelas APIs (Application Programming Interface) ou drivers do SGBD, que executam comandos na linguagem SQL (Structured Query Language).

## Banco de dados relacionais

Um banco de dados relacional é um banco de dados que modela os dados de uma forma que eles sejam percebidos pelo usuário como tabelas, ou mais formalmente relações.

## Bando de dados noSQL

Os **bancos de dados** NoSQL (ou não-relacionais) utilizam um padrão diferente de armazenamento em relação ao SQL. O grande diferencial dessa tecnologia é a capacidade de escalabilidade para as operações das empresas de uma forma mais simples e econômica do que no **banco** relacional.

# Modelo Relacional

- Banco de dados
    - Tabelas
        - Registros - Linhas
        - Atributos - Colunas
        - Chaves
            - As tabelas relacionam-se umas as outras através de **[chaves](https://pt.wikipedia.org/wiki/Chave_(banco_de_dados))**. Uma chave é um conjunto de um ou mais atributos que determinam a unicidade de cada registro.

## Atomicidade

Trata o trabalho como parte indivisível. A transação deve ter todas as suas operações executadas em caso de sucesso ou, em caso de falha, nenhum resultado de alguma operação refletido sobre a base de dados. Ou seja, após o término de uma transação (*commit* ou *rollback*), a base de dados não deve refletir resultados parciais da transação.

## Consistência dos dados

A execução de uma transação deve levar o banco de dados de um estado consistente a um outro estado consistente, ou seja, uma transação deve respeitar as regras de integridade dos dados (como unicidade de chaves, restrições de integridade lógica, etc.).

# Comandos

# create database

```sql
create database MyDataBase
```

## create table

```sql
create table myTable 
(
	ID  int not null,
	name varchar(200) not null,
	TypePerson char(1) not null
)
```

## insert into

```sql
insert into myTable (ID, Name, TypePerson) values (1, 'Maria', 'F');
insert myTable (ID, Name, TypePerson) values (2, 'José', 'F');
insert MyTable (TypePerson, ID, Name) values ('F', 3, 'Gustavo');
insert MyTable values (4, 'Doralice', 'F');
insert MyTable values (5, 'César', 'F'), (6, 'Fátima', 'F');
```

## select

```sql
select * from MyTable;
select column1, column2 from Mytable;

```

## update

```sql
update	myTable
set		TypePerson = 'J',
			Name = 'Nóbrega Empreendimentos'
where	ID = 6
```

## delete

```sql
delete
from myTable
where ID in(5, 4, 3, 2)
```

## insert

```sql
insert Produtos values(1, 'violão', 'Yamaha de Nylon', 860.89);
insert Produtos values(2, 'teclado', 'Casio de 88 teclas', 2499.89);
```

# Especificidades do comando Select

- é possível utilizar funções nativas do SQL para realizar consultas

```sql
select	isnull(DataCriacao, getdate()), *
from	Clientes; 

-- Se a DataCriacao for null, retorne a função getdate() --
```

- também temos estruturas de decisões para select

```sql
select	*,
	case
		when TipoPessoa = 'J' then 'Jurídica'
		when TipoPessoa = 'F' then 'Física'
		else 'Pessoa Indefinida'
	end
from Clientes;
```

- temos funções para converter as informações\

```sql
-- converter DataSolicitacao para varchar --

select *, convert(varchar, DataSolicitacao, 103)
from Pedido;

-- na função convert escolhemos primeiro o tipo a que queremos converter
--  e dpois o nome da coluna do dado que será convertido
-- em um terceiro parâmetro é possível colocarmos o formato da data
```

- Podemos tbm usar uma concatenação

```sql
select	*,
	case
		when TipoPessoa = 'J' then 'Jurídica '
		when TipoPessoa = 'F' then 'Física '
		else 'Pessoa Indefinida'
	end + convert(varchar, getdate(), 103)
from Clientes;
```

# Chaves Primárias e Estrangeiras

## Chave Primária

Chaves primárias (em inglês, Primary keys ou "PK"), sob o ponto de vista de um banco de dados relacional, referem-se aos conjuntos de um ou mais campos, cujos valores, considerando a combinação de valores em caso de mais de uma chave primária, nunca se repetem na mesma tabela e, desta forma, podem ser usadas como um índice de referência para criar relacionamentos com as demais tabela do banco de dados (daí vem o nome banco de dados relacional). Portanto, uma chave primária nunca pode ter valor nulo, nem repetição.

### Tornando um atributo Primary Key utilizando  Alter Table

```sql
alter table Clientes add constraint pk_cliente primary key (Codigo);
```

- SQL constraints(restrições)  são usadas para especificar regras para dados em uma tabela.

### Para adicionar uma primary key auto_increment em uma tabela já existente

```sql
alter table MyTable drop column ID;
alter table MyTable add ID identity(1,1)
alter table MyTable add constraint pk_mytable primary key (ID);
```

## Chave Estrangeira

Uma chave estrangeira é um campo, que aponta para a chave primária de outra tabela ou da mesma tabela. Ou seja, passa a existir uma relação entre duplas de duas tabelas ou de uma única tabela. A finalidade da chave estrangeira é garantir a integridade dos dados referenciais, pois apenas serão permitidos valores que supostamente vão aparecer na base de dados.

### Adicionando uma chave estrangeira

```sql
alter table PedidoItem add constraint fk_pedido foreign key (CodigoPedido) references Pedido (Codigo)
```

- A chave estrangeira é sempre uma cópia de uma chave primária, referenciando outra tabela.

# Normalização

1. Não deve haver um conjunto de colunas repetido ou conjunto de informações em apenas uma propriedade.
    1. ERRADO → Endereço: Rua Uruguai, 4321, Bairro Vila Esperança, CEP 666-66666
    2. CERTO → Endereço: Rua Uruguai; Numero: 4321; Bairro: Vila Esperança; CEP: 666-66666
    3. ERRADO → TABELA Clientes ATRIBUTOS Codigo Nome TipoPessoa Telefone Celular TelefoneTrabalho.
    4. CERTO → TABELA Clientes ATRIBUTOS Codigo Nome TipoPessoa; TABELA Telefones ATRIBUTOS Codigo CodigoCliente Celular Trabalho Residencial
2. Não pode haver informações duplicadas que dependam da chave primária.
    1. Exemplo: ter uma atributo constante como o nome de um produto em outras tabela, pois em uma eventual alteração do nome, devera fazer a alteração em dois lugares, ou mais.
3. Em caso de int que representam status, opções, andamentos, etc. criar uma tabela que servirá como um dicionário para estes números
    1. Exemplo: TABELA pedido COLUNA status (FK relacionado a tabela status coluna codigo); criar TABELA  status COLUNAS Codigo Descricao;
    
    # Trabalhando Com Tabelas Relacionadas
    
    ### Uma forma diferente de fazer insert
    
    ```sql
    insert PedidoItemLog (CodigoPedido, CodigoProduto, CodigoStatusPedidoItem, DataMovimento)
    select	CodigoPedido, CodigoProduto, 1, getdate()
    from	PedidoItem
    ```
    
    ## inner join
    
    - No exemplo, será mostrado todas as colunas de clientes e pedidos que tiverem código do cliente iguais.
    
    ```sql
    select	*
    from	Clientes cli
    inner	join Pedido ped
    on		cli.codigo = ped.CodigoCliente
    ```
    
    ## left join
    
    - No exemplo, será mostrado todas as colunas dos clientes, mas só serão mostradas as colunas dos pedidos onde codigo do cliente da tabela pedido é igual ao código da tabela cliente.
    
    ```sql
    select	*
    from	Clientes cli
    left	join Pedido ped
    on		cli.codigo = ped.CodigoCliente
    ```
    
    ## right join
    
    - No exemplo, será mostrada a mesma coisa que no exemplo acima, pois movemos a ordem das tabelas.
    
    ```sql
    select	*
    from	Pedido ped
    right	join Clientes cli
    on		cli.codigo = ped.CodigoCliente;
    ```
    

### ressalvas

- Quando adicionamos, por exemplo, que queremos pedidos maiores que 1000 dentro do join. O comando where irá agir sobre a formula toda retornando apenas os clientes do join que obedecerem a condição.

```sql
select	*
from	Clientes cli
left	join Pedido ped
on		cli.Codigo = ped.CodigoCliente
where	ped.TotalPedido > 1000
```

- Se adicionarmos ao invés do where, o and, a lista se apresentará completa dos clientes, somente mostrando a informação dos que obedecerem a condição.

```sql
select	*
from	Clientes cli
left	join Pedido ped
on		cli.Codigo = ped.CodigoCliente
and		ped.TotalPedido > 1000
```

- É possível aninhar um case dentro do Select, onde será mostrada uma nova coluna com as condições. ALém disso é possível apelidar colunas(ex. CLientesNome, TipoPessoa).

```sql
select	cli.Nome ClienteNome,
		ped.TotalPedido,
		case	
			when cli.TipoPessoa = 'F' then 'Física'
			else 'Jurídica'
		end TipoPessoa
from	Clientes cli
left	join Pedido ped
on		cli.Codigo = ped.CodigoCliente;
```

- Nesse caso abaixo fazemos o innerjoin obedecendo ao conceito chave primária = chave estrangeira. Aplicamos também outro inner join onde o códigoStatus PedidoItem vai buscar sua correspondência na tabela StatusPedidoItem. Além disso outro comando é apressentado Between.

```sql
select	*
from	PedidoItem t1
inner	join PedidoItemLog t2
on		t1.CodigoPedido = t2.CodigoPedido
and		t1.CodigoProduto = t2.CodigoProduto
inner	join StatusPedidoItem t3
on		t3.Codigo = t2.CodigoStatusPedidoItem
where	Preco between 1 and 1000
```

- Soma total dos produtos

```sql
select	sum(Preco * Quantidade)
from	PedidoItem t1
inner	join PedidoItemLog t2
on		t1.CodigoPedido = t2.CodigoPedido
and		t1.CodigoProduto = t2.CodigoProduto
inner	join StatusPedidoItem t3
on		t3.Codigo = t2.CodigoStatusPedidoItem;
```

- Preço médio dos itens

```sql
select	avg(Preco)
from	PedidoItem t1
inner	join PedidoItemLog t2
on		t1.CodigoPedido = t2.CodigoPedido
and		t1.CodigoProduto = t2.CodigoProduto
inner	join StatusPedidoItem t3
on		t3.Codigo = t2.CodigoStatusPedidoItem;
```

- Group by

```sql
select	t4.Codigo,
		t4.Descricao,
		sum(t1.Preco * t1.Quantidade)
from	PedidoItem t1
inner	join PedidoItemLog t2
on		t1.CodigoPedido = t2.CodigoPedido
and		t1.CodigoProduto = t2.CodigoProduto
inner	join StatusPedidoItem t3
on		t3.Codigo = t2.CodigoStatusPedidoItem
inner	join Produtos t4
on		t4.Codigo = t2.CodigoProduto

group	by t4.Codigo,
		t4.Descricao
```

- Order By

```sql
select	t4.Codigo,
		t4.Descricao,
		sum(t1.Preco * t1.Quantidade) Somatoria
from	PedidoItem t1
inner	join PedidoItemLog t2
on		t1.CodigoPedido = t2.CodigoPedido
and		t1.CodigoProduto = t2.CodigoProduto
inner	join StatusPedidoItem t3
on		t3.Codigo = t2.CodigoStatusPedidoItem
inner	join Produtos t4
on		t4.Codigo = t2.CodigoProduto

group	by t4.Codigo,
		t4.Descricao

order	by Somatoria desc;
```