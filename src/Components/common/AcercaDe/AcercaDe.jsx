import '../AcercaDe/AcercaDe.css'

export function AcercaDe() {
  return (
    <>
      <section className = "container my-5">
        <div className="row ">
          <div className="col-12 col-md-8 info">
            <h1 className = 'text-center text-primary offers-text'>Te Ofrecemos: </h1>
            <p>
            ° Registro Sencillo de Gastos: Añade tus gastos de manera rápida y fácil, ya sea mediante ingreso manual o sincronización con cuentas bancarias.
            <br /> <br />
            ° Categorías Personalizables: Organiza tus gastos en categorías como alimentos, transporte y entretenimiento para un mejor análisis.
            <br /> <br />
            ° Establecimiento de Presupuestos: Define límites de gasto para cada categoría y recibe alertas cuando te acerques a ellos.
            <br /> <br />
            ° Informes y Análisis: Accede a gráficos y reportes mensuales que te permiten visualizar tus hábitos de consumo.
            <br /> <br />
            ° Consejos de Ahorro: Obtén recomendaciones personalizadas para mejorar tu salud financiera y alcanzar tus objetivos de ahorro.
            <br /> <br />
            ° Seguridad de Datos: Disfruta de un entorno seguro con encriptación avanzada que protege tu información financiera.


            </p>
          </div>
          <div className="col-12 col-md-4">
            <img src = "../../../../src/assets/img/Persona_sonriendo.png" alt="" className = "img-fluid info-img"/>
          </div>
        </div>
      </section>
    </>
  );
}
