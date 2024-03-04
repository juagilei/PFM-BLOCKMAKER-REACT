import { AltaPrestamista } from "../components";
import { Button, ErrorInfo, TextInput, Tittle } from "../components/ui";


export default function Altas() {
  return (
    <div className="bg-black w-auto h-[85vh]">
      <Button isLoading>
        click click
      </Button>
      <ErrorInfo message='mensaje de error' />
      <TextInput />
      <Tittle> Esto es el Tittle</Tittle>
      <AltaPrestamista />
     </div>
  )
}
