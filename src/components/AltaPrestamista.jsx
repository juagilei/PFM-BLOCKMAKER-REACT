import { useState } from "react";
import { Tittle, TextInput, Button } from "../components/ui";
export default function AltaPrestamista() {
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
  return (
    <section className="flex flex-col justify-center border shadow rounded-xl p-5 border-fuchsia-600">
      <Tittle>Alta Prestamista</Tittle>

      <form>
        <div className=" flex flex-col justify-center gap-3">
          <h2> Introduce la direccion del nuevo prestamista </h2>
          <TextInput
            type="text"
            placeholder="Address"
            onChange={handlerAddressInputChange}
          />
          <Button>Dar de alta </Button>
          {address}
        </div>
      </form>
    </section>
  );
}
