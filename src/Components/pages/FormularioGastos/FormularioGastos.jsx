import { useState } from "react";

export function FormularioGastos () {
    const [categoriaGasto, setCategoriaGasto] = useState('');
    const [descripcionGasto, setDescripcionGasto] = useState('');
    const [montoGasto, setMontoGasto] = useState('');
    const [fechaGasto, setFechaGasto] = useState('');
    

    function procesarFormularioGasto (e) {
        e.preventDefault();
        let datosGasto = {
            Categoria: categoriaGasto,
            Descripcion: descripcionGasto,
            Monto: montoGasto,
            Fecha: fechaGasto
   
        }
        console.log(datosGasto);  
    }

    return (
        <>

            <br /> <br />
            <div className = "container my-5">
                <div className = "row">
                    <div className = "col-12">
                        <h3 className = "text-center">Registro de Gastos</h3>
                        <br />
                        <form className = "p-5 border rounded shadow" onSubmit = {procesarFormularioGasto} >
                            <div className = "row">
                                <div className = "col-6 col-md-6">
                                    <label className = "form-label">Categoria: </label>
                                    <select className = "form-control"  name="" id="">
                                        <option value = "Estudio">Estudio</option>
                                        <option value = "">Vacaciones</option>
                                        <option value = "">Trabajo</option>
                                        <option value = "">Diversion</option>
                                        <option value = "">Otro</option>
                                        <input 
                                            type="text" 
                                            className = "form-control" 
                                            value = {categoriaGasto}
                                            onChange = {function (e) {
                                                setCategoriaGasto(e.target.value)
                                            }}                                          
                                        />
                                    </select>
                                                                
                                </div>
                                <div className = "col-6 col-md-6">
                                    <label className = "form-label">Descripcion: </label>
                                    <input 
                                        type="text" 
                                        className = "form-control"
                                        value = {descripcionGasto}
                                        onChange = {function (e) {
                                            setDescripcionGasto(e.target.value)
                                        }}                                                                                                             
                                    />
                                   
                                </div>
                            </div>                     
                            <div className = "row mt-3">
                                <div className = "col-6 col-md-6">
                                    <label className = "form-label">Monto: </label>
                                    <input 
                                        type="number" 
                                        className = "form-control"
                                        value = {montoGasto}
                                        onChange = {function (e) {
                                            setMontoGasto(e.target.value)
                                        }}                                
                                    />
                                    
                                </div>
                                <div className = "col-6 col-md-6">
                                    <label className = "form-label">Fecha: </label>
                                    <input 
                                        type="date" 
                                        className = "form-control"
                                        value = {fechaGasto}
                                        onChange = {function (e) {
                                            setFechaGasto(e.target.value)
                                        }}                                        
                                    />                         
                                </div> 
                                
                            </div>                   
                            <br />
                            <button type = "submit" className = "btn btn-outline-success p-2 my-3 w-100">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
            
    )
}