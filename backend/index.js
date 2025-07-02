const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let productos = [
  { id: 1, nombre: "Rascador", precio: 50, stock: 10 },
  { id: 2, nombre: "Arnes", precio: 80, stock: 5 },
];

// Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Agregar un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, precio, stock } = req.body;
  const nuevo = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio,
    stock,
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// Modificar producto (PUT)
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio, stock } = req.body;
  const idx = productos.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: "Producto no encontrado" });
  productos[idx] = { id, nombre, precio, stock };
  res.json(productos[idx]);
});

// Eliminar producto (DELETE)
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = productos.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: "Producto no encontrado" });
  const eliminado = productos.splice(idx, 1)[0];
  res.json(eliminado);
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});