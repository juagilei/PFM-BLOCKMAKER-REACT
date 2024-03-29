import { useAccount } from "wagmi";
import AltaPrestamistaCliente from "../components/AltaPrestamistaCliente";


export default function Altas() {
  const {isConnected } = useAccount();
  return (
    <div className=" mx-auto min-h-[85vh] flex justify-center items-center text-white">
      {isConnected ? (
        <AltaPrestamistaCliente />
      ) : (
         <h1 className="text-2xl text-gray-400 ">🔒 Conecta tu wallet para comenzar </h1>
      )}
    </div>

  );
}
