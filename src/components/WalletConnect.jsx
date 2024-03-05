import { useAccount } from "wagmi";
import { Tittle } from "./ui";

export default function WalletConnect() {
  const {isConnected } = useAccount();
  return (
    <div className="text-white">
      {isConnected ? (
        <Tittle> Wallet conectada </Tittle>
      ) : (
        <Tittle> 🔒 Conecta tu wallet para comenzar </Tittle>
      )}
    </div>
      
  );
}
