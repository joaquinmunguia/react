import React from 'react'
import ventiladorLasko from "../fotos/ventiladorLasko.jpg"
import heladera from "../fotos/heladera.jpg"
import Card from './Card'
import boostrap from 'bootstrap'


const cartas = [
    {
        id: 1,
        titulo: 'ventilador',
        image: ventiladorLasko,
        Text: "ventilador"
    },
    {
        id:2,
        titulo:'heladera',
        image: ventiladorLasko,
        Text: "heladera"
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            
            <div className="row">
            {
                cartas.map(carta => 
                    (
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={carta.id}>
                        <Card title={carta.titulo} imageSource={carta.image} text={carta.Text}/>
                    </div>
                ))
            }    
            </div>
        </div>
    )
}

export default Cards
