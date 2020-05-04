# gostack-conceitos-reactjs
### Desafio 2 Bootcamp ###

Repositorio com os fontes do desafio (gostack-conceitos-nodejs). 

<h4> Para execução do projeto execute o seguinte comando: </h4>

 - `` yarn dev ``
 
### Métodos HTTP
<strong>GET</strong> /repositories `` Retornar lista ``<br />
<strong>POST</strong> /repositories `` Gravar novo ``
 - body
  ``` json 
  {
	  "title": "gostack-conceitos-nodejs",
	  "url": "https://github.com/denismend/gostack-conceitos-nodejs",
	  "techs": ["javascript", "nodejs"] 
  }
  ```
 
 <br /> <strong>PUT</strong> /repositories/:id `` Atualizar por ID `` <br />
 <strong>DELETE</strong> /repositories/:id `` Deletar por ID `` <br />
 <strong>POST</strong> /repositories/:id/likes `` Atualizar número de likes `` 
