import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-10">
      <img
        src="/public/PrestamoDefi.png"
        alt="PrestamoDefiTittle"
        width={200}
        className="py-3"
        />
          
          {/* Diseño de la barra de navegacion para pantallas desktop */}
          
      <nav className="hidden md:ml-6 md:block">
        <ul className="flex gap-5 justify-between">
          <li>
            <Link
              to="/"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Altas"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Altas
            </Link>
          </li>
          <li>
            <Link
              to="/Operaciones"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Operaciones
            </Link>
          </li>
          <li>
            <Link
              to="/Info"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
            >
              Info
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
