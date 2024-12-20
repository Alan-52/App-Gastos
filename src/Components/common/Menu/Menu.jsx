import "./Menu.css"
import { Link } from "react-router-dom"

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className = "navbar-brand" to = "/" >
            Gastos App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to = "/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/usuarios">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/gastos">
                  Gastos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/listadoUsuarios">
                  Lista de Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/lista2">
                  Lista de Gastos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
