import "./Home.css";
import {AcercaDe} from '../../common/AcercaDe/AcercaDe';

export function Home() {
  return (
    <>
      <div className="banner text-white">
        <h2>Gestor App</h2>
        <p>
          ¡Simplifica tu vida financiera con nuestra app de gestión de gastos!
          Lleva el control de tus ingresos y gastos de forma fácil y rápida
          desde tu teléfono. Ya sea que estés planeando un gran proyecto,
          buscando ahorrar, o simplemente organizando tus finanzas diarias,
          nuestra app te ayuda a visualizar tus movimientos y tomar mejores
          decisiones.
          <br />
          Con herramientas intuitivas, podrás categorizar cada
          gasto, establecer presupuestos, y recibir alertas que te mantienen al
          tanto de tus objetivos financieros. Nuestro diseño claro y amigable
          hace que el seguimiento de tus finanzas sea sencillo, mientras que
          nuestros gráficos y reportes detallados te ofrecen una visión general
          de tus hábitos de consumo.
          <br />
          Además, la seguridad de tus datos es
          nuestra prioridad. Con encriptación avanzada, puedes estar seguro de
          que tu información estará siempre protegida. Únete a miles de usuarios
          que ya están transformando su vida financiera con nuestra app de
          gestión de gastos y descubre cómo puedes ahorrar más y gastar mejor.
          ¡Empieza hoy mismo a tomar el control de tu dinero!
        </p>
        <button className = "btn btn-outline-success">Ver Mas</button>
      </div>
      <AcercaDe></AcercaDe>
    </>
  );
}
