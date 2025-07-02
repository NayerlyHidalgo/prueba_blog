export default function Productos() {
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
              <tr className="bg-black bg-opacity-60">
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">1</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">Rascador</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">50</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">10</td>
              </tr>
              <tr className="bg-black bg-opacity-60">
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">2</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">Arnes</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">80</td>
                <td className="px-6 py-4 text-white border-t border-fuchsia-900">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}