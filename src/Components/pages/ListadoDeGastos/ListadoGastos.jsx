import { useState, useEffect } from "react";
import { Usuarios } from "../Usuarios/Usuarios";
import '../../../assets/commonStyles/Cards.css'

export function ListadoGastos() {
  // Simulando un conjunmto de datos que viene del back

  let gastos = [
    {
      id: 105,
      descripcion: "Compra comida perro",
      monto: "$2.500",
      fechaGasto: "25/08/2023",
    },
    {
      id: 33,
      descripcion: "Pago servicios electricos",
      monto: "$60.000",
      fechaGasto: "15/12/2010",
    },
    {
      id: 12,
      descripcion: "Pago arriendo",
      monto: "$800.000",
      fechaGasto: "31/07/2024",
    },
    {
      id: 56,
      descripcion: "Pago de netflix",
      monto: "$14.500",
      fechaGasto: "23/02/2022",
    },
    {
      id: 203,
      descripcion: "Compras supermercado",
      monto: "$320.700",
      fechaGasto: "13/11/2021",
    },
    {
      id: 203,
      descripcion: "Salida a cine",
      monto: "$120.000",
      fechaGasto: "24/10/2022",
    },
  ];

  const [datosApi, setDatosApi] = useState(null);
  const [estadoDeCarga, SetEstadoDeCarga] = useState(true);

  // Programo el useEffect para garantizar que llamare al servicio y voy a traer los datos

  useEffect(function () {}, [
    // Aca se llama al servicio (back)

    function () {
      // Se carga la variable de estado con los datos del servicio
      setDatosApi(gastos);
      // Se cambia la variable de estado de la carga
      SetEstadoDeCarga(false);
    },
  ]);

  return (
    <>
      <br />
      <br />
      <br />
      {console.log(gastos)}

      <h3 className = "text-center mt-3 text-danger">Listado de Gastos</h3>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-3 ">
          {
            // Renderizando un arreglo de objetos
            gastos.map(function (gasto) {
              return (
                <div className="col">
                  <div className="card h100 shadow p-5 mb-3 card">
                    <h5> {gasto.descripcion} </h5>
                    <p>
                        Id: {gasto.id} <br />
                        Ciudad:  {gasto.monto} <br />
                        Fecha: {gasto.fechaGasto}
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