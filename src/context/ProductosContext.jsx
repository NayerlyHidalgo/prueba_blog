import { createContext, useContext, useState } from "react";

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Rascador", precio: 50, stock: 10 },
    { id: 2, nombre: "Arnes", precio: 80, stock: 5 },
  ]);

  const agregarProducto = (producto) => {
    setProductos((prev) => [
      ...prev,
      { ...producto, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
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