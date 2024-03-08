import { useState } from "react";
import { Tittle, TextInput, Button } from "../components/ui";
import { useWriteContract } from "wagmi";
import { PrestamoDefiABI } from "../contracts/ABIs";

export default function AltaCliente() {
  {
    /* ojo al declarar las variables del useState son un array asi que va entre [] */
  }
  const [address, setAddress] = useState("");
  {
    /* creo una variable para manejar el dat que introducimos en el input como address */
  }

  const handlerAddressInputChange = (event) => {
    {
      /* En este caso el valor de address se aplica con setAddress y que guardado en address para eso se usa el useState  */
    }
    setAddress(event.target.value);
  };

  {
    /* Usamos el hook useWriteContract para escribir en el contrato */
  }
  const { writeContract } = useWriteContract();

  const handlerOnClick = () =>
    writeContract({
      abi: PrestamoDefiABI,
      address: import.meta.env.VITE_PRESTAMO_DEFI_CONTRACT_ADDRESS,
      functionName: "altaCliente (0x425743bc)",
      args: [address],
    });

  return (
    <section className="flex flex-col justify-center border shadow rounded-xl p-5 border-fuchsia-600">
      <Tittle>Alta Cliente</Tittle>

      <form>
        <div className=" flex flex-col justify-center gap-3">
          <h2> Introduce la direccion del nuevo cliente </h2>
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
