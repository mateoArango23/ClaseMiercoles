 import { useState } from "react"

 export function FormularioGasto(){

const [categoria, setCategoria] = useState('');
const [descripcion, setDescripcion] = useState('');
const [monto, setMonto] = useState('');
const [fecha, setFecha] = useState('');

function procesarFormulario(evento) {
    evento.preventDefault();  

    let datosFormulario = {
        categoria:categoria,
        descripcion:descripcion,
        monto:monto,
        fecha:fecha
    }

    console.log(datosFormulario);  
}
return (
    <>
        <br />
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <h3>Registro de Gastos: </h3>
                    <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                        <div className="row">
                            <div className="col-12">
                                <label className="form-label">Categoría: </label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={categoria}
                                    onChange={function(evento) { setCategoria(evento.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label">Descripción: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={descripcion}
                                    onChange={function(evento) { setDescripcion(evento.target.value) }}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Monto: </label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    value={monto}
                                    onChange={function(evento) { setMonto(evento.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label">Fecha: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fecha}
                                    onChange={function(evento) { setFecha(evento.target.value) }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
 



 }