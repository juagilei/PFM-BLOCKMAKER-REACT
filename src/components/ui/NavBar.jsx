import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-10">
      <img
        src="/public/PrestamoDefi.png"
        alt="PrestamoDefiTittle"
        width={300}
        className="py-3"
      />
      <nav className="hidden md:ml-6 md:block">
        <ul className="flex gap-5 justify-between text-white">
          <li>
            <Link
              to="/"
              className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Altas"
              className="text-pink-500 hover:bg-gray-700 hover:text-fuchsia-700 rounded-md px-3 py-2 text-sm font-medium"
            >
              Altas
            </Link>
          </li>
          <li>
            <Link
              to="/Operaciones"
              className="text-pink-500 hover:bg-gray-700 hover:text-fuchsia-700 rounded-md px-3 py-2 text-sm font-medium"
            >
              Operaciones
            </Link>
          </li>
          <li>
            <Link
              to="/Info"
              className="text-pink-500 hover:bg-gray-700 hover:text-fuchsia-700 rounded-md px-3 py-2 text-sm font-medium"
            >
              Info
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
