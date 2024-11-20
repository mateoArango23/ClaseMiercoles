import { useState, useEffect } from "react";

export function ListadoGastos() {
    //Simulando gastos que vienen del back
    let gastos = [
        {
            id: 1,
            monto: 200000,
            descripcion: "Olla arrocera",
            fecha: "14/11/2024"
        },
        {
            id: 2,
            monto: 2000000,
            descripcion: "Play 4",
            fecha: "12 / 11 / 2024"
        },
        {
            id: 3,
            monto: 3000000,
            descripcion: "Nevera",
            fecha: "20 / 9 / 2024"
        },
        {
            id: 4,
            monto: 5000000,
            descripcion: "Lavadora",
            fecha: "14 / 11 / 2024"
        },
        {
            id: 5,
            monto: 400000,
            descripcion: "Olla air frier",
            fecha: "15 / 2 / 2024"
        }
    ]
    const [datosApi, setDatosApi] = useState(null)
    const [setestadoCarga, setEstadoCarga] = useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

    // useEffect(function(){},[
    //     //Aca se llama al sevicio(back)
    //     function(){
    //     //Se carga la variable de estado con los datos del servicio y se cambia la variable de estado de la carga
    //     setDatosApi(usuarios)
    //     setEstadoCarga(false)


    //     }              
    // ])
    
    return (
        <>
            <br /><br /><br />
            {
                console.log(gastos)
            }

            <h3>LISTADO DE GASTOS</h3>
            <div className="container">
                <div className="row row cols-1 row-clos-md-3 g-3">
                    {
                        //Renderizando un arreglo de objetos
                        gastos.map(function (gasto) {
                            return (
                                <div className="col">
                                    <div className="card h-100 shadow p-5">
                                        <h5>Monto: {gasto.monto}</h5>
                                        <h4>Descripcion: {gasto.descripcion}</h4>
                                        <h3>Fecha: {gasto.fecha}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}