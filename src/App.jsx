import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mi Blog</h1>
          <nav>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Sobre mí</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 px-3">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Perfil */}
      <section className="bg-white shadow mt-4 rounded-lg mx-auto max-w-2xl w-full">
        <div className="flex items-center p-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Perfil"
            className="w-20 h-20 rounded-full border-4 border-blue-500"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800">Francisco Higuera</h2>
            <p className="text-gray-600">Desarrollador Frontend | React | Tailwind CSS</p>
            <div className="mt-2">
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm"
              >
                Ver perfil completo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Posts */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ejemplo de post */}
          <article className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Título del Post</h2>
            <p className="text-gray-600 mb-4">Descripción breve del post...</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Leer más
            </button>
          </article>
          {/* Puedes duplicar el bloque <article> para más posts */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-gray-500">
          © 2025 Mi Blog. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;