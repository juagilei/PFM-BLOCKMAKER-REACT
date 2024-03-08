import { useReadContract, useAccount } from "wagmi";
import { PrestamoDefiABI } from "../contracts/ABIs";
import { OperacionesPrestamista, OperacionesCliente } from "./";

export default function AltaPrestamistaCliente() {
  const { address } = useAccount();
  const Prestamista = useReadContract({
    abi: PrestamoDefiABI,
    address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
    functionName: "empleadosPrestamista",
    args: [address]
  });
  const Cliente = useReadContract({
    abi: PrestamoDefiABI,
    address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
    functionName: "clientes",
    args: [address]
  });


  const { data: ClienteData } = Cliente;
  const { data: PrestamistaData } = Prestamista;

  return (
      <div>
          {/* compruebo si es socio principal o prestamista para dar altas */}
      {ClienteData === address ? (
        <OperacionesPrestamista />
      ) : PrestamistaData === address ? (
        <OperacionesCliente />
      ) : (
        <p>No estás autorizado</p>
      )}
    </div>
  );
}
