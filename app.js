const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5050;

app.use(bodyParser.json());


const todoList = [
  {
    Descripcion: 'Tarea 1',
    Estado: 'Pendiente',
  },
  {
    Descripcion: 'Tarea 2',
    Estado: 'Pendiente',
  },
];


app.get('/api/todo', (req, res) => {
  res.json(todoList);
});

app.post('/api/todo/create', (req, res) => {
  const nuevaTarea = {
    Descripcion: req.body.Descripcion,
    Estado: req.body.Estado,
  };

  todoList.push(nuevaTarea);

  res.json({ Mensaje: 'Tarea creada con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto 5050`);
});
