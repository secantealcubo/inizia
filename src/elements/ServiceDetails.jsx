import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

class ServiceDetails extends Component{
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
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Servicios</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                        {/* Start Single Area */}
                        <div className="row sercice-details-content pb--80 align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="thumb">
                                    <img className="w-100" src="/assets/images/service/service-01.png" alt="Service Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="details mt_md--30 mt_sm--30">
                                    <p>Contamos con diversos servicios que se pueden adaptar a tu requerimiento, para ello nuestros profesionales cuentan con amplia experiencia para guiar y asesorar en la tomas decisiones y hacer crecer su empresa.</p>
                                    <p>Somos un equipo multidisciplinario de profesionales resilientes, con la dedicación de apoyar en labores administrativas, en desarrollo TI y obligaciones legales a pequeñas y medianas empresas, con el objetivo de dar valor agregado a nuestros clientes, ofreciendo servicios con flexibilidad a sus necesidades.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Area */}
                     {/* Start Faq Area */}
                     <div className="rn-accordion-area pv-feaq-area bg_color--1 ptb--120">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 className="title">¿Tienes una <span className="theme-color">Pregunta?</span>
                                        </h2>
                                        <p>Preguntas frecuentes</p>
                                    </div>
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        1. ¿Cuáles son los principales servicios que ofreces?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Asesoría Contable, remuneraciones, soporte técnico de computadoras, asesoría comercial, tributaria, tramites personales, entre otros.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        2. ¿Cómo puedo solicitar en un servicio y/o plan?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Escribiendo su consulta o requerimiento por el correo o mediante el whatsApp.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        3. Caracteristica de Sociedad de Responsabilidad Limitada y Sociedad por Acciones
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div>
                                                        <p>
                                                           <b>Sociedad de Responsabilidad Limitada:</b> 
                                                        </p>
                                                        <ul>
                                                            <li>Constituye una persona jurídica con patrimonio distinto al de los socios.</li>
                                                            <li>Sólo puede ser constituida por dos o más personas.</li>
                                                            <li>Limita la responsabilidad de los socios hasta el monto de sus aportes</li>
                                                            <li>Puede realizar todo tipo de actividades, salvo las que la ley ha destinado exclusivamente para las Sociedades Anónimas.</li>
                                                        </ul>
                                                        <br></br>
                                                        <p>
                                                           <b>Sociedad por Acciones:</b> 
                                                        </p>
                                                        <ul>
                                                            <li>Constituye una persona jurídica, con personalidad y patrimonio distinto al del o los socios que la componen.</li>
                                                            <li>Permite la posibilidad de una sociedad con un solo socio.</li>
                                                            <li>El capital de estas estructuras se divide en acciones.</li>
                                                            <li>El ingreso y salida de socios es de carácter dinámico, siendo necesaria la compra o venta de su participación.</li>
                                                            <li>La responsabilidad se encuentra limitada sólo hasta el monto de los aportes.</li>
                                                            <li>Tiene el carácter de mercantil.</li>
                                                        </ul>
                                                    
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        4. ¿Cuál es la diferencia entre una SPA y LTDA?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>la Sociedad de Responsabilidad Limitada pone el acento en las personas. Es muy recomendable para los negocios en que quieres asociarte solo con personas de tu exclusiva confianza, como por ejemplo en un negocio familiar, en el que se desea que no ingresen como socios, personas ajenas a la familia. O en una sociedad de profesionales en que escoges a tus socios por sus cualidades personales.</p>
                                                    <p>Como contrapartida a esto, si quieres modificar la sociedad, terminarla o ingresar a un nuevo socio, todos deberían estar de acuerdo.</p>
                                                    <p>Por otro lado, la Sociedad por Acciones es una sociedad de capital, el acento está puesto en el aporte en dinero que realiza cada socio, aquí la persona de cada socio pierde importancia, y la cesibilidad de acciones es mucho más sencilla, salvo que exista un acuerdo entre los socios, para que entre un nuevo socio, bastará una compra venta de acciones y que esta se asiente correctamente en el registro de accionistas.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        5. ¿Qué es Empresa en un Día?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Este sitio es un servicio que pone a tu disposición el Estado para que constituyas una sociedad en tan solo un día y de manera remota. La página en cuestión se encuentra en la del Registro de Empresas y Sociedades, y en ella podrás abrir tu cuenta con un correo electrónico vigente y tu Clave Única, crear tu perfil y optar por una de las opciones de negocios que el Estado de Chile dispone para ti. Entre las que puedes escoger se hallan las siguientes:
                                                    </p>
                                                    <ul>
                                                        <li>Empresa Individual de Responsabilidad Limitada (E.I.R.L.).</li>
                                                        <li>Sociedad de Responsabilidad Limitada (Ltda.).</li>
                                                        <li>Sociedad por Acciones (SpA).</li>
                                                        <li>Sociedad Anónima Cerrada (S.A.).</li>
                                                        <li>Sociedad Anónima de Garantía Recíproca (S.A.G.R.).</li>
                                                        <li>Sociedad Colectiva Comercial (SCC).</li>
                                                        <li>Sociedad en Comandita Simple (SCS).</li>
                                                        <li>Sociedad en Comandita por Acciones (SCA).</li>
                                                    </ul>
                                                    <p><b>Ventajas y desventajas:</b></p>
                                                    <p>Entre las principales ventajas de este método se halla la facilidad de acceso y la velocidad con la que se constituye la sociedad, independiente del tipo que hayas seleccionado. Todo se hará directamente por Internet.</p>
                                                    <p>Otra ventaja importante es que tienes la opción de constituir tu negocio desde donde sea, siempre que cuentes con los documentos necesarios. Eso te ahorrará los viajes al notario y otras instituciones.</p>
                                                    <p>Respecto a las desventajas, recalcamos la necesidad de tener a mano todos los documentos necesarios debidamente digitalizados. Eso puede resultarle complicado a las personas que no manejan muy bien la tecnología. Además, es necesario contar con una firma electrónica. (esta firma se puede comprar para firmar 1 vez y ya)</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        6. ¿Qué es el método tradicional?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Corresponde a la manera antigua de constituir un negocio en Chile, una forma que conlleva varias semanas y que puede ser un poco burocrática. Involucra instancias con notarios, entregas de documentos e inscripciones en el diario oficial, lo que significa más recursos.
                                                    </p>
                                                    <p><b>Ventajas y desventajas:</b></p>
                                                    <p>Una ventaja notable es que ostentarás un mayor control sobre los procesos, documentación y cada uno de los pasos. De esta forma accederás de forma directa a los contratos y escrituras, y podrás modificar de primera mano los aspectos que no te parezcan pertinentes.</p>
                                                    <p>
Otra ventaja es que la escritura de constitución de tu empresa será hecha a medida. Gracias a un abogado experto en estos temas, esta será redactada en torno a la especificidad de tu negocio.</p>
                                                    <p>En cuanto a las desventajas, la documentación impresa que requieres es bastante, y puede resultar algo agobiante. Además es tu deber presentarla de manera física en las instituciones requeridas, lo que te tomará bastante tiempo tomando en cuenta la movilidad y los días requeridos para la aprobación de la documentación. Otra desventaja son los gastos asociados, ya que invertirás dinero en acudir al notario, en la legalización de la escritura de constitución, y habrá gastos vinculados a la movilización y cuestiones asociadas.</p>
                                                    <p>Por lo demás, cualquier error en el papeleo o gestión de la documentación, o un posible vencimiento en el plazo para iniciar actividades, puede significar que tengas que comenzar todo el proceso nuevamente. Esto equivale a gastos adicionales que, en gran medida, suelen no estar previstos.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        7. ¿Cuál es la diferencia entre empresa en un día y tradicional?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        <b>Vía notaría (tradicional):</b> el trámite es más largo, más completo y tiene un costo monetario. Crear una empresa otorgando una escritura pública mediante notaría permite que la empresa sea constituida de acuerdo a las necesidades específicas de los socios y el giro de la empresa. Es apto para cualquier tipo de empresa.
                                                    </p>
                                                    <p>
                                                        <b>Empresa en un día:</b> el trámite es gratis y muchísimo más rápido, ya que solo consta de completar un formulario en línea. Esta modalidad requiere asesoría de un abogado o al menos tener conocimientos legales, ya que hay muchos tecnicismos que podrían dificultar el proceso. Además, es limitante si es que más adelante se quiere modificar la escritura de la sociedad.
                                                    </p>
                                                    <p>
                                                        <b>Nota importante:</b>Las empresas creadas con una u otra modalidad son válidas y pueden operar correctamente ante el Servicio de Impuestos Internos (SII).
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                     {/* Start Faq Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;