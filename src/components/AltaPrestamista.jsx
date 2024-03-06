import { Tittle, TextInput, Button } from "../components/ui";
export default function AltaPrestamista() {
  return (
    <div className="border shadow rounded-xl p-5 border-fuchsia-600">
      <Tittle>Alta Prestamista</Tittle>

      <form>
        <div className=" flex flex-col justify-center gap-3">
          <h2> Introduce la direccion del nuevo prestamista</h2>
          <TextInput type="text" placeholder="Address" />
          <Button>Dar de alta</Button>
        </div>
      </form>
    </div>
  );
}
