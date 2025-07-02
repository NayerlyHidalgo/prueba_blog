import { useState } from "react";

export default function Calculos() {
  // Estados para los cálculos
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [total, setTotal] = useState(null);

  const [precioIva, setPrecioIva] = useState("");
  const [iva, setIva] = useState(null);

  const [original, setOriginal] = useState("");
  const [descuento, setDescuento] = useState("");
  const [final, setFinal] = useState(null);

  // Funciones de cálculo
  const calcularTotal = (e) => {
    e.preventDefault();
    setTotal(Number(precio) * Number(stock));
  };

  const calcularIVA = (e) => {
    e.preventDefault();
    setIva(Number(precioIva) * 0.12);
  };

  const calcularFinal = (e) => {
    e.preventDefault();
    setFinal(Number(original) * (1 - Number(descuento) / 100));
  };

  return (
    <div className="flex-1 flex flex-col items-center py-12 bg-black min-h-screen">
      <div className="bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 rounded-lg px-8 py-12 shadow max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-white text-left">Cálculos de Inventario</h1>
        
        {/* 1. Valor total */}
        <form onSubmit={calcularTotal} className="mb-8">
          <h2 className="text-2xl font-semibold text-fuchsia-100 mb-2">1. Valor Total de un Producto</h2>
          <label className="block text-fuchsia-100 mb-1">Precio Unitario:</label>
          <input
            className="w-full rounded px-4 py-2 mb-2 bg-black bg-opacity-60 border border-fuchsia-900 text-white"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
            type="number"
            required
          />
          <label className="block text-fuchsia-100 mb-1">Cantidad en Stock:</label>
          <input
            className="w-full rounded px-4 py-2 mb-2 bg-black bg-opacity-60 border border-fuchsia-900 text-white"
            value={stock}
            onChange={e => setStock(e.target.value)}
            type="number"
            required
          />
          <button
            type="submit"
            className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-6 py-2 rounded transition mb-2"
          >
            Calcular Valor Total
          </button>
          {total !== null && (
            <div className="text-fuchsia-100 mt-2">Valor total: <span className="font-bold">${total}</span></div>
          )}
        </form>

        {/* 2. Calcular IVA */}
        <form onSubmit={calcularIVA} className="mb-8">
          <h2 className="text-2xl font-semibold text-fuchsia-100 mb-2">2. Calcular IVA (12%)</h2>
          <label className="block text-fuchsia-100 mb-1">Precio del Producto:</label>
          <input
            className="w-full rounded px-4 py-2 mb-2 bg-black bg-opacity-60 border border-fuchsia-900 text-white"
            value={precioIva}
            onChange={e => setPrecioIva(e.target.value)}
            type="number"
            required
          />
          <button
            type="submit"
            className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-6 py-2 rounded transition mb-2"
          >
            Calcular IVA
          </button>
          {iva !== null && (
            <div className="text-fuchsia-100 mt-2">IVA: <span className="font-bold">${iva.toFixed(2)}</span></div>
          )}
        </form>

        {/* 3. Calcular Precio con Descuento */}
        <form onSubmit={calcularFinal}>
          <h2 className="text-2xl font-semibold text-fuchsia-100 mb-2">3. Calcular Precio con Descuento</h2>
          <label className="block text-fuchsia-100 mb-1">Precio Original:</label>
          <input
            className="w-full rounded px-4 py-2 mb-2 bg-black bg-opacity-60 border border-fuchsia-900 text-white"
            value={original}
            onChange={e => setOriginal(e.target.value)}
            type="number"
            required
          />
          <label className="block text-fuchsia-100 mb-1">Porcentaje de Descuento:</label>
          <input
            className="w-full rounded px-4 py-2 mb-2 bg-black bg-opacity-60 border border-fuchsia-900 text-white"
            value={descuento}
            onChange={e => setDescuento(e.target.value)}
            type="number"
            required
          />
          <button
            type="submit"
            className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold px-6 py-2 rounded transition mb-2"
          >
            Calcular Precio Final
          </button>
          {final !== null && (
            <div className="text-fuchsia-100 mt-2">Precio final: <span className="font-bold">${final.toFixed(2)}</span></div>
          )}
        </form>
      </div>
    </div>
  );
}