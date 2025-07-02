import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Productos from "./pages/Productos";
import NuevoProducto from "./pages/NuevoProducto";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calculos from "./pages/Calculos";
import Informacion from "./pages/Informacion";

// Página principal (Home)
function Home() {
  return (
    <main className="flex-1 flex flex-col items-center py-8 bg-black w-full">
      {/* Título */}
      <section className="w-full flex justify-center mt-8 mb-6">
        <div className="bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 rounded-lg px-8 py-12 text-center shadow max-w-6xl w-full">
          <h1 className="text-6xl font-light mb-4 leading-tight text-white drop-shadow">
            Bienvenido a la Gestión de Inventario
          </h1>
          <p className="text-2xl text-fuchsia-200">
            Consulta, registra y realiza cálculos sobre los productos del inventario.
          </p>
        </div>
      </section>

      {/* Carrusel */}
      <section className="w-full max-w-4xl mb-6">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          className="rounded overflow-hidden"
        >
          <div>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Walrus 1" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Walrus 2" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80" alt="Walrus 3" />
          </div>
        </Carousel>
      </section>

      {/* Tarjetas */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border border-fuchsia-900 rounded p-6 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-rose-900">
          <h2 className="font-semibold text-lg mb-2 text-white">Listado de Productos</h2>
          <p className="text-fuchsia-200 text-sm mb-2">Consulta el inventario actual.</p>
        </div>
        <div className="border border-fuchsia-900 rounded p-6 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-rose-900">
          <h2 className="font-semibold text-lg mb-2 text-white">Registrar Producto</h2>
          <p className="text-fuchsia-200 text-sm mb-2">Agrega nuevos productos.</p>
        </div>
        <div className="border border-fuchsia-900 rounded p-6 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-rose-900">
          <h2 className="font-semibold text-lg mb-2 text-white">Cálculos de Inventario</h2>
          <p className="text-fuchsia-200 text-sm mb-2">Calcula valores comerciales básicos.</p>
        </div>
      </section>

      {/* Mensaje informativo */}
      <div className="w-full max-w-4xl">
        <div className="bg-fuchsia-900 text-fuchsia-100 rounded p-3 text-sm">
          Recuerda: Mantén actualizado el stock de productos.
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 text-white py-2 px-4 flex items-center">
          <span className="font-semibold text-lg mr-8">Gestión de Productos</span>
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/productos" className="hover:underline">Productos</Link>
            <Link to="/nuevo-producto" className="hover:underline">Nuevo Producto</Link>
            <Link to="/calculos" className="hover:underline">Cálculos</Link>
            <Link to="/informacion" className="hover:underline">Información</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nuevo-producto" element={<NuevoProducto />} />
          <Route path="/calculos" element={<Calculos />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 text-fuchsia-100 text-center py-4 mt-8">
          © 2025 - Sistema de Productos - Taller Académico
        </footer>
      </div>
    </Router>
  );
}

export default App;