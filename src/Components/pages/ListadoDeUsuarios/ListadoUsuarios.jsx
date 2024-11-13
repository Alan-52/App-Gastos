import { useState, useEffect } from "react";
import { Usuarios } from "../Usuarios/Usuarios";

export function ListadoUsuario() {
  // Simulando un conjunmto de datos que viene del back

  let usuarios = [
    {
      id: 5,
      nombre: "Alan Betancur Bedoya",
      telefono: "3023901138",
      ciudad: "Medellin",
    },
    {
      id: 85,
      nombre: "Thomas Betancur",
      telefono: "123450987",
      ciudad: "Bello",
    },
    {
      id: 100,
      nombre: "Jaime Galvis",
      telefono: "3219004992",
      ciudad: "Medellin",
    },
    {
      id: 120,
      nombre: "Maria Jazmin Bedoya",
      telefono: "3122647036",
      ciudad: "Bello",
    },
    {
      id: 285,
      nombre: "Samuel Bedoya",
      telefono: "123450987",
      ciudad: "Ovejas",
    },
  ];

  const [datosApi, setDatosApi] = useState(null);
  const [estadoDeCarga, SetEstadoDeCarga] = useState(true);

  // Programo el useEffect para garantizar que llamare al servicio y voy a traer los datos

  useEffect(function () {}, [
    // Aca se llama al servicio (back)

    function () {
      // Se carga la variable de estado con los datos del servicio
      setDatosApi(usuarios);
      // Se cambia la variable de estado de la carga
      SetEstadoDeCarga(false);
    },
  ]);

  return (
    <>
      <br />
      <br />
      <br />
      {console.log(usuarios)}

      <h3>Listado de Usuarios</h3>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-3 ">
          {
            // Renderizando un arreglo de objetos
            usuarios.map(function (usuario) {
              return (
                <div className="col">
                  <div className="card h100 shadow p-5">
                    <h5> {usuario.nombre} </h5>
                    <p>
                        Id: {usuario.id} <br />
                        Ciudad:  {usuario.ciudad} <br />
                        Telefono: {usuario.telefono}
                    </p>
                    
                    
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
