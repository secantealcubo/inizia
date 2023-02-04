import React, { Component } from "react";

const ServiceList = [
    {
        icon: '02',
        title: 'Esperamos ser testigos de tu desarrollo',
        description: 'Somos un equipo multidisciplinario de profesionales resilientes, con la dedicación de apoyar en labores administrativas, en desarrollo TI y obligaciones legales a pequeñas y medianas empresas, con el objetivo de dar valor agregado a nuestros clientes, ofreciendo servicios con flexibilidad a sus necesidades.'
    }
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                   
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;