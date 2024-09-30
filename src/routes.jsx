import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastrar from "./pages/cadastrar/cadastro"
import Consultar from "./pages/consulta/consulta"

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar/>} />
        <Route path="/cadastrar/:id" element={<Cadastrar/>} />
        <Route path="/consultar" element={<Consultar/>} />
      </Routes>
    </BrowserRouter>
  )
}