import { Routes, Route } from "react-router-dom";
import { Menu } from "../Components/common/Menu/Menu";
import { Home } from "../Components/pages/Home/Home";
import {Usuarios} from '../Components/pages/Usuarios/Usuarios';
import {Gastos} from '../Components/pages/Gastos/Gastos';
import {Listado} from '../Components/pages/Listado/Listado';


export function Rutas() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}
