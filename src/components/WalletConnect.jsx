import { useAccount } from "wagmi";
import { Tittle } from "./ui";
import AltaPrestamistaCliente from "./AltaPrestamistaCliente";

export default function WalletConnect() {
  const {isConnected } = useAccount();
  return (
    <div className="text-white">
      {isConnected ? (
        <AltaPrestamistaCliente/>
      ) : (
        <Tittle> 🔒 Conecta tu wallet para comenzar </Tittle>
      )}
    </div>

  );
}
