# padroes_Arquitetura_Software_2022.2

## Participantes
#|nome|matrícula
----|----|-----
1| ARTHUR MOURA BERNARDO|201905523
2|FLAVIMAR DA SILVA ALMEIDA|201905529
3|GIANCARLO OLIVEIRA SILVA|201905531
4|PIETRO NIERO ROQUE|201905550

## Objetivo
Projetar e implementar uma arquitetura de um sistema que viabilize a transferência de pacientes entre unidades hospitalares no contexto da web 3.0. Deverá atender aos atributos de qualidade de usabilidade (facilidade de aprender e de uso) e segurança.

## Passo a passo de execução do software
### Requisitos

nodejs instalado

Postgresql

Postman ou semelhante


Raiz do projeto
```
npm install
node index.js
```
Pasta p-avatar
```
cd .\p-avatar\
npm install
node index.js
```
Pasta prontuario
```
cd .\prontuario\
npm install
node index.js
```
**ps: os 3 serviços tem que estar rodando para a aplicação funcionar com todas as funcionalidades**
### URLs
* localhost:3000 - index
* localhost:3000/p-avatar - aplicação p-avatar
* localhost:3000/prontuario metodo POST aplicação prontuario
![img](image.png)

### Query de criação do banco
```
create database "nome do banco"

CREATE TABLE pront (
	nome VARCHAR ( 50 ) NOT NULL,
	idade int NOT NULL,
	situacao VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO pront(nome,idade,situacao) values ('teste',20,'testando');
```
para adicionar os dados de conexão do banco mude os dados do arquivo doenv(.env) dentro da pasta **\prontuario**
```
DATABASE_URL=postgres://user:password@localhost:5432/db-name
```
