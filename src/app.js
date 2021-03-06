const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require('uuidv4');

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repositorio = {
    id: uuid(), 
    title, 
    url, 
    techs, 
    likes: 0 
  };
  
  repositories.push(repositorio);

  return response.json(repositorio);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const { title, url, techs } = request.body;

  const repositorioIndex = repositories.findIndex(repositorio => {
    return repositorio.id === id;
  });

  if(repositorioIndex < 0) {
    return response.status(400).json('Error. Repository not found !');
  }
  
  const repositorioOld = repositories[repositorioIndex];

  const repositorio = { 
    id, 
    title, 
    url,
    techs,
    likes: repositorioOld.likes
  };

  repositories[repositorioIndex] = repositorio;

  return response.json(repositorio);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositorioIndex = repositories.findIndex(repositorio => {
    return repositorio.id === id;
  });

  if(repositorioIndex < 0) {
    return response.status(400).json('Error. Repository not found !');
  }

  repositories.splice(repositorioIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    repository => repository.id === id
  );
  
  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found." });
  }

  repositories[repositoryIndex].likes += 1;

  return response.status(200).json(repositories[repositoryIndex]);
});

module.exports = app;
