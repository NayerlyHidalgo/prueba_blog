import { createContext, useContext, useState, useEffect } from "react";

const ProductosContext = createContext();

const productosPorDefecto = [
  { id: 1, nombre: "Rascador", precio: 50, stock: 10 },
  { id: 2, nombre: "Arnes", precio: 80, stock: 5 },
];

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState(productosPorDefecto);

  // Cargar productos desde el backend al iniciar
  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then(res => {
        if (!res.ok) throw new Error("No hay backend");
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(() => setProductos(productosPorDefecto));
  }, []);

  // Agregar producto usando la API o localmente
  const agregarProducto = async (producto) => {
    try {
      const res = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      if (!res.ok) throw new Error("No hay backend");
      const nuevo = await res.json();
      setProductos(prev => [...prev, nuevo]);
    } catch {
      // Si no hay backend, agrega localmente
      setProductos(prev => [
        ...prev,
        { ...producto, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
      ]);
    }
  };

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  return useContext(ProductosContext);
}