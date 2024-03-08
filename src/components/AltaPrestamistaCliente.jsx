import { useReadContract, useAccount } from "wagmi";
import { PrestamoDefiABI } from "../contracts/ABIs";
import { AltaPrestamista, AltaCliente } from "./";

export default function AltaPrestamistaCliente() {

  const socioPrincipal = useReadContract({
    abi: PrestamoDefiABI,
    address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
    functionName: "socioPrincipal",
  });
  const Prestamista = useReadContract({
    abi: PrestamoDefiABI,
    address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
    functionName: "empleadosPrestamista",
  });

  const { address } = useAccount();
  const { data: socioPrincipalData } = socioPrincipal;
  const { data: PrestamistaData } = Prestamista;

  return (
      <div>
          {/* compruebo si es socio principal o prestamista para dar altas */}
      {socioPrincipalData === address ? (
        <AltaPrestamista />
      ) : PrestamistaData ? (
        <AltaCliente />
      ) : (
        <p>No estás autorizado</p>
      )}
    </div>
  );
}
