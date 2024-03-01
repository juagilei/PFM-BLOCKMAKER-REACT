import { Button, ErrorInfo } from "../components/ui";


export default function Altas() {
  return (
    <div className="bg-black w-auto h-[85vh]">
      <Button isLoading>
        click click
      </Button>
      <ErrorInfo message='mensaje de error'/>
     </div>
  )
}
