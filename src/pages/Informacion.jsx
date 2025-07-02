export default function Informacion() {
  return (
    <div className="flex-1 flex flex-col items-center py-12 bg-black min-h-screen">
      <div className="bg-gradient-to-r from-purple-900 via-fuchsia-800 to-rose-900 rounded-lg px-8 py-12 shadow max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Información del Sistema</h1>
        <p className="text-lg text-fuchsia-100">
          Este sistema permite gestionar productos y realizar cálculos básicos como valor total, IVA y descuentos.<br />
          Utiliza React, React Router y TailwindCSS para una experiencia moderna y responsiva.<br/>
            <br /> 
          Se hara mucho mas facil la reorganizacion de productos para mascotas calculando su precio al mayoria, su iba en unitario y en caso de descuentos
        </p>
      </div>
    </div>
  );
}