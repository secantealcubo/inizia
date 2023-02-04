import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import Helmet from "../component/common/Helmet";
import { FiChevronUp , FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import SliderOne from "../component/slider/SliderOne";
import About from "../component/HomeLayout/homeOne/About";

const ServiceListOne = [
    {
        image: '01',
        title: 'Asesoría Comercial, tributaria y tramites personales',
        description: 'Asesoría y apoyo en creación de empresa en un día (firma desde casa) / Sociedades tradicionales, modificaciones, rectificaciones, saneamientos, disolución de todo tipo de sociedades, creación de Sociedades de la organización civil (ONGs), Cooperativas y más.'
    },
    {
        image: '02',
        title: 'Asesoría contable y remuneraciones',
        description: 'Ofrecemos asesoría y apoyo en declaración mensual del IVA – (Formulario 29), regímenes tributarios, Formularios F30 y F30-1, PREVIRED, Rectificación de IVA y declaraciones fuera de plazo, entre otros.'
    },
    {
        image: '03',
        title: 'Asesoría ti',
        description: 'Protocolos de protección de datos y sistemas, gestión de antivirus y software malicioso, mantenimiento preventivo y correctivo de computadoras. Instalación Suit, entre otros.'
    }
]

class CorporateBusiness extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){

        return(
            <Fragment> 
                <Helmet pageTitle="Inizia E Cresce" />

                {/* Start Header Area  */}
                    <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                  <div className="about-area about-position-top pb--120">
                    <About />
                </div>
                {/* End About Area */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                <div className="thumbnai">
                                                    <img src={`/assets/images/featured/corporate-${val.image}.jpg`} alt="Corporate Images"/>
                                                </div>
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
                {/* End Service Area */}
                {/* Start Counterup Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start Pricing Tbale Area  */}
                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Nuestros Planes</h2>
                                    <p>Contamos con diversos servicios que se pueden adaptar a tu requerimiento, para ello nuestros profesionales cuentan con amplia experiencia para guiar y asesorar en la tomas decisiones y hacer crecer su empresa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Asesoría Comercial, tributaria y tramites personales</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago Mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Declaración Mensual de IVA (F29).</li>
                                                <li><FiCheck /> Libro de Compras.</li>
                                                <li><FiCheck /> Ventas Asesoría Contable. </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Contable Full</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Declaración Mensual de IVA (F29).</li>
                                                <li><FiCheck /> Libro de compras y ventas Asesoría Contable.</li>
                                                <li><FiCheck /> Entrega de EEFF Semestral</li>
                                                <li><FiCheck /> (Estado de Situación Financiera y Estado de Resultado). </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Remuneraciones Básico</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago Mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Calculo de remuneración (con liquidaciones).</li>
                                                <li><FiCheck /> Finiquitos, comprobantes de vacaciones y anticipos.</li>
                                                <li><FiCheck /> Generación de Pagos de Imposiciones -PREVIRED. </li>
                                                <li><b>Nota:</b> Entre 1 hasta 15 trabajadores. </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Remuneraciones Full</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Emisión de contratos de trabajo.</li>
                                                <li><FiCheck /> Calculo de remuneración (con liquidaciones). Finiquitos, comprobantes de vacaciones y anticipos.</li>
                                                <li><FiCheck /> Generación de pagos de imposiciones-PREVIRED Carta de avisos a la Inspección del trabajo.</li>
                                                <li><FiCheck /> Libro de Remuneraciones.</li>
                                                <li><FiCheck /> Asesoría Laboral.</li>
                                                <li><b>Nota:</b> Entre 1 hasta 15 trabajadores. </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Contable + Remuneraciones básico</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Contable Básico + Remuneraciones básico. </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Contable + Remuneraciones full</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pagos mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Contable Full + Remuneraciones Full </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-6 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Plan Subcontratistas</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago mensual</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li>Recaudar información para empresa mandante:</li>
                                                <li><FiCheck /> Certificado de Mutual (Afiliación y tasas).</li>
                                                <li><FiCheck /> F30 y F30-1. Planillas de LLSS (PREVIRED).</li>
                                                <li><FiCheck /> Liquidaciones de sueldo trabajadores. Finiquitos (cuando corresponda).</li>
                                                <li>Manejo de SubcontrataLey. </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-6 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Plan creación de empresa</h4>
                                            <div className="pricing">
                                                <span className="price"></span>
                                                <span className="subtitle">Pago variable</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> Oficina virtual</li>
                                                <li><FiCheck /> Seis meses precio con iva.</li>
                                                <li><FiCheck /> Un año precio con iva.</li>
                                                <li><FiCheck /> Constitución Sociedad en un día con RUT e inicio de actividad Integral. Un solo pago.</li>
                                                <li><FiCheck /> Certificado Digital SII para poder facturar. Pago anual</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="mailto:contacto@icresce.cl">Contactar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                        </div>
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}

                {/* Start Footer Style  */}
                <Footer />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default CorporateBusiness;