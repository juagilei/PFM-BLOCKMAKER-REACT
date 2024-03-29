
import { Routes, Route } from "react-router-dom";
import { Home, Altas, Operaciones, Info, NotFound } from "./pages";
import AppLayout from "./components/ui/Layouts/AppLayout";
import { Web3Provider } from "./config/Web3Provider";

export default function App() {
  return (
    <Web3Provider>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Altas" element={<Altas />} />
          <Route path="Operaciones" element={<Operaciones />} />
          <Route path="Info" element={<Info />} />

          {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Web3Provider>
  );
}
