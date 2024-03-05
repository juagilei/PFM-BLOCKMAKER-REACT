import { useAccount } from "wagmi";
import { Tittle } from "../components/ui";
import AltaPrestamistaCliente from "../components/AltaPrestamistaCliente";


export default function Altas() {
  const {isConnected } = useAccount();
  return (
    <div className=" mx-auto min-h-[85vh] flex justify-center items-center">
      {isConnected ? (
        <AltaPrestamistaCliente />
      ) : (
        <Tittle> 🔒 Conecta tu wallet para comenzar </Tittle>
      )}
    </div>

  );
}
