import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";
import "./Portfolio.style.css";

const PortfolioList = [
    {
        image: 'image-1',
        category: 'Pago Mensual',
        title: 'Contable Básico ',
        description:'Declaración Mensual de IVA (F29),Libro de Compras,Ventas Asesoría Contable.'
    },
    {
        image: 'image-2',
        category: 'Pago Mensual',
        title: 'Contable Full',
        description:'Declaración Mensual de IVA (F29),Libro de compras y ventas Asesoría Contable,Entrega de EEFF Semestral,(Estado de Situación Financiera y Estado de Resultado).'
    },
    {
        image: 'image-3',
        category: 'Pago Mensual',
        title: 'Remuneraciones Básico',
        description:'Calculo de remuneración (con liquidaciones), Finiquitos, comprobantes de vacaciones y anticipos, Generación de Pagos de Imposiciones -PREVIRED,Nota: Entre 1 hasta 15 trabajadores.'
    },
    {
        image: 'image-4',
        category: 'Pago Mensual',
        title: 'Remuneraciones Full',
        description:'Emisión de contratos de trabajo. Calculo de remuneración (con liquidaciones). Finiquitos, comprobantes de vacaciones y anticipos. Generación de pagos de imposiciones-PREVIRED Carta de avisos a la Inspección del trabajo. Libro de Remuneraciones. Asesoría Laboral. Nota: Entre 1 hasta 15 trabajadores.'
    },
    {
        image: 'image-3',
        category: 'Pago Mensual',
        title: 'Contable + Remuneraciones básico',
        description:'Contable Básico + Remuneraciones básico. '
    },
    {
        image: 'image-4',
        category: 'Pago Mensual',
        title: 'Contable + Remuneraciones full',
        description:'Contable Full + Remuneraciones Full'
    },
    {
        image: 'image-3',
        category: 'Pago Mensual',
        title: 'Plan Subcontratistas',
        description:'Recaudar información para empresa mandante:Certificado de Mutual (Afiliación y tasas). F30 y F30-1. Planillas de LLSS (PREVIRED). Liquidaciones de sueldo trabajadores. Finiquitos (cuando corresponda). Manejo de SubcontrataLey. '
    },
    {
        image: 'image-4',
        category: 'Pago Variable',
        title: 'Plan creación de empresa',
        description:'Oficina virtual, Seis meses precio con iva. Un año precio con iva. Constitución Sociedad en un día con RUT e inicio de actividad Integral. Un solo pago. Certificado Digital SII para poder facturar. Pago anual'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Nuesrtos Planes',
        description = 'Podemos adaptar planes a tus requerimientos.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content portfoliocontent mb-4">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h3 className="title"><a href="/portfolio-details">{value.title}</a></h3>
                                            <p>{value.description}</p>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Contactar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to="/portfolio-details"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;