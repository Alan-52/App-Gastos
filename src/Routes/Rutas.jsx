import { Routes, Route } from "react-router-dom";
import { Menu } from "../Components/common/Menu/Menu";
import { Home } from "../Components/pages/Home/Home";
import {Usuarios} from '../Components/pages/Usuarios/Usuarios';
import {Gastos} from '../Components/pages/Gastos/Gastos';
import {Listado} from '../Components/pages/ListadoUsuario/Listado';
import {ListadoGasto} from '../Components/pages/ListadoGasto/ListadoGasto';


export function Rutas() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/listadoUsuarios" element={<Listado />} />
        <Route path="/lista2" element={<ListadoGasto />} />
      </Routes>
    </>
  );
}
