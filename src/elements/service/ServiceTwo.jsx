import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Asesoría Comercial, tributaria y tramites personales',
        description: 'Asesoría y apoyo en creación de empresa en un día (firma desde casa) / Sociedades tradicionales, modificaciones, rectificaciones, saneamientos, disolución de todo tipo de sociedades, creación de Sociedades de la organización civil (ONGs), Cooperativas y más.'
    },
    {
        icon: <FiLayers />,
        title: 'Asesoría contable y remuneraciones',
        description: 'Ofrecemos asesoría y apoyo en declaración mensual del IVA – (Formulario 29), regímenes tributarios, Formularios F30 y F30-1, PREVIRED, Rectificación de IVA y declaraciones fuera de plazo, entre otros.'
    },
    {
        icon: <FiUsers />,
        title: 'Asesoría ti',
        description: 'Protocolos de protección de datos y sistemas, gestión de antivirus y software malicioso, mantenimiento preventivo y correctivo de computadoras. Instalación Suit, entre otros.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Servicios',
        description = 'Contamos con diversos servicios que se pueden adaptar a tu requerimiento, para ello nuestros profesionales cuentan con amplia experiencia para guiar y asesorar en la tomas decisiones y hacer crecer su empresa.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Ir a Servicios</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
