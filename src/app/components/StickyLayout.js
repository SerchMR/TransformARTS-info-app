// components/StickyLayout.js
'use client';
import StickyNav from './StickyNav';

export default function StickyLayout() {
    return (
        <>
            <StickyNav />
            {/* Hero */}

            <section className="et-hero-tabs">
                <a href="https://www.transmigrarts.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/logotransmi-removebg.png" width={500} alt="Logo Transmi" />
                </a>
                <div className="et-hero-tabs-container">
                    <a className="et-hero-tab" href="#tab-es6">Acerca de</a>
                    <a className="et-hero-tab" href="#tab-flexbox">Objetivos e impacto</a>
                    {/*<a className="et-hero-tab" href="#tab-react">TITULO 3</a>
                    <a className="et-hero-tab" href="#tab-angular">TITULO 4</a>
                    <a className="et-hero-tab" href="#tab-other">TITULO 5</a>*/}
                    <span className="et-hero-tab-slider"></span>
                </div>
            </section>
            {/* Main */}
            <main className="et-main">
                <section className="et-slide" id="tab-es6">
                    <h1>Relevancia del proyecto</h1>
                    <h3>

                        La hipótesis de nuestro programa de investigación es que las artes escénicas, a través de las herramientas de investigación-creación pueden contribuir a transformar y mejorar los modos de existencia que han sido adscritos a los migrantes en situaciones de vulnerabilidad.
                    </h3>
                </section>
                
                <section className="et-slide" id="tab-flexbox">
                    <h1>OBJETIVOS E IMPACTO DEL PROYECTO</h1>
                    <ul className="left-aligned-list">
                        <li><h3>Transformar el daño</h3></li>
                        <li><h3>Demostrar la capacidad de las artes para innovar socialmente</h3></li>
                        <li><h3>Estimular la creación de una comunidad internacional</h3></li>
                        <li><h3>Observar, evaluar, modelar e implementar </h3></li>
                    </ul>
                    

                </section>
                {/* 
                <section className="et-slide" id="tab-react">
                    <h1>TITULO 3</h1>
                    <h3>Algo del titulo 3</h3>
                </section>
                <section className="et-slide" id="tab-angular">
                    <h1>TITULO 4</h1>
                    <h3>Algo del titulo 4</h3>
                </section>
                <section className="et-slide" id="tab-other">
                    <h1>TITULO 5</h1>
                    <h3>Algo del titulo 5</h3>
                </section>
                */}
            </main>
        </>
    );
}
