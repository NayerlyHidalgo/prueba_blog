import { useProductos } from "../context/ProductosContext";

export default function Productos() {
  const { productos } = useProductos();

  return (
    <div className="flex-1 flex flex-col items-center py-12 bg-black min-h-screen">
      <h1 className="text-5xl font-semibold mb-8 w-full max-w-6xl mx-auto text-white">Listado de Productos</h1>
      <div className="overflow-x-auto w-full max-w-6xl mx-auto">
        <div className="rounded-lg border-2 border-fuchsia-900 bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 p-1">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-4 font-bold text-left text-fuchsia-100">ID</th>
                <th className="px-6 py-4 font-bold text-left text-fuchsia-100">Nombre</th>
                <th className="px-6 py-4 font-bold text-left text-fuchsia-100">Precio</th>
                <th className="px-6 py-4 font-bold text-left text-fuchsia-100">Stock</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id} className="bg-black bg-opacity-60">
                  <td className="px-6 py-4 text-white border-t border-fuchsia-900">{p.id}</td>
                  <td className="px-6 py-4 text-white border-t border-fuchsia-900">{p.nombre}</td>
                  <td className="px-6 py-4 text-white border-t border-fuchsia-900">{p.precio}</td>
                  <td className="px-6 py-4 text-white border-t border-fuchsia-900">{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}