import { useState } from "react";
import { useProductos } from "../context/ProductosContext";
import { useNavigate } from "react-router-dom";

export default function NuevoProducto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const { agregarProducto } = useProductos();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !stock) return;
    agregarProducto({ nombre, precio: Number(precio), stock: Number(stock) });
    navigate("/productos");
  };

  return (
    <div className="flex-1 flex flex-col items-center py-12 bg-black min-h-screen">
      <div className="bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 rounded-lg px-8 py-12 shadow max-w-4xl w-full">
        <h1 className="text-5xl font-semibold mb-8 text-white text-left">Registrar Nuevo Producto</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-fuchsia-100 text-lg mb-2">Nombre:</label>
            <input
              className="w-full rounded px-4 py-3 bg-black bg-opacity-60 border border-fuchsia-900 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-fuchsia-100 text-lg mb-2">Precio:</label>
            <input
              type="number"
              className="w-full rounded px-4 py-3 bg-black bg-opacity-60 border border-fuchsia-900 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
              value={precio}
              onChange={e => setPrecio(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-fuchsia-100 text-lg mb-2">Stock:</label>
            <input
              type="number"
              className="w-full rounded px-4 py-3 bg-black bg-opacity-60 border border-fuchsia-900 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
              value={stock}
              onChange={e => setStock(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-8 py-3 rounded mt-4 transition"
          >
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
}