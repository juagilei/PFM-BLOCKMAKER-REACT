import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="ml-4 flex items-center">
      <Link
        to="/"
        className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
      >
        Home
      </Link>
      <Link
        to="/Altas"
        className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
      >
        Altas
      </Link>
      <Link
        to="/Operaciones"
        className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
      >
        Operaciones
      </Link>
      <Link
        to="/Info"
        className="text-fuchsia-700 hover:bg-gray-700 hover:text-pink-500 rounded-md px-3 py-2 text-xl font-medium"
      >
        Info
      </Link>
    </div>
  );
}
