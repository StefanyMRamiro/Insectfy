import { Route, Routes } from "react-router";
import TopBar from "./components/TopBar";
import InsectRecognition from "./pages/InsectRecognition";
import IIR from "./pages/IIR";
import Dashboard from "./pages/Dashboard";
import IS from "./pages/IS";
import Manejo from "./pages/Manejo";
import DiarioC from "./pages/DiarioC";
import Monitoramento from "./pages/Monitoramento";
import Predadores from "./pages/Predadores";
import Especialistas from "./pages/Especialistas"
import Mapa from "./pages/Mapa"

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopBar />} >
        <Route index element={<Dashboard />} />
        <Route path="recognition" element={<InsectRecognition />} />
        <Route path="iir" element={<IIR />} />
        <Route path="is" element={<IS />} />
        <Route path="manejo" element={<Manejo />} />
        <Route path="diarioc" element={<DiarioC />} />
        <Route path="monitoramento" element={<Monitoramento />} />
        <Route path="predadores" element={<Predadores />} />
        <Route path="especialistas" element={<Especialistas />} />
        <Route path="mapa" element={<Mapa />} />
      </Route>
    </Routes>
  )
}

export default App;
