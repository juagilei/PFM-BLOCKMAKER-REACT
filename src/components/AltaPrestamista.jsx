import { useState } from "react";
import { Tittle, TextInput, Button } from "../components/ui";
import { useWriteContract } from "wagmi"; /
import { PrestamoDefiABI } from "../contracts/ABIs";

export default function AltaPrestamista() {
  const [address, setAddress] = useState("");

  const handlerAddressInputChange = (event) => {
    setAddress(event.target.value);
  };

  const { writeContract } = useWriteContract(); 

  const handlerOnClick = () => {
    
    writeContract({
      abi: PrestamoDefiABI,
      address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
      functionName: "altaPrestamista", 
      args: [address],
    }).then((response) => {
      // Maneja la respuesta de la transacción
      console.log("Transaction response:", response);
    }).catch((error) => {
      // Maneja los errores de la transacción
      console.error("Transaction error:", error);
    });
  };

  return (
    <section className="flex flex-col justify-center border shadow rounded-xl p-5 border-fuchsia-600">
      <Tittle>Alta Prestamista</Tittle>

      <form>
        <div className=" flex flex-col justify-center gap-3">
          <h2> Introduce la dirección del nuevo prestamista </h2>
          <TextInput
            type="text"
            placeholder="Address"
            onChange={handlerAddressInputChange}
          />
          <Button onClick={handlerOnClick}>Dar de alta </Button>
        </div>
      </form>
    </section>
  );
}
