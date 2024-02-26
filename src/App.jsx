import { Header, Footer } from "./components"
import { Home, Altas, Operaciones, Info, NotFound } from "./pages"
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Altas" element={<Altas />} />
        <Route path="Operaciones" element={<Operaciones />} />
        <Route path="Info" element={<Info />} />

        {/* Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
            actúa como una captura de todas las URL para las cuales no tenemos rutas
            explícitas definidas. */}
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
