import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'Misión, Visión y Valores',
        description = 'Responsabilidad, puntualidad, diferencias, saber escuchar, resolución, pasión y lealtad.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title"></h3>
                                                <p>Apoyar a las pequeñas y medianas empresas, con el asesoramiento continuo en sus labores administrativas, de forma oportuna y objetiva, mediante servicios de calidad basados en sus necesidades y metas.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title"></h3>
                                                <p>Mejorar la gestión administrativa de las PYMES, con servicios profesionales a costos razonables, que optimicen los procesos de nuestros clientes, ser una empresa resiliente y conocida en el mercado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;