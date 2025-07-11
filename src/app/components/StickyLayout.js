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
                    <img src="/assets/img/transformarts.png" width={1000} alt="Logo Transmi" />
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
                        Nuestros proyectos se desarrollan con un fuerte enfoque en la generación de impacto real y sostenible, alineados con estándares internacionales y respondiendo a las necesidades de las comunidades a las que servimos. Contamos con el respaldo de equipos de investigadores universitarios con amplia experiencia, lo que asegura la calidad y pertinencia de cada resultado.

                        Sin embargo, somos conscientes de que la entrega de productos y resultados no siempre garantiza cambios duraderos. Por eso, concebimos la sostenibilidad como un eje fundamental: diseñamos estrategias para que los beneficios de cada proyecto se mantengan en el tiempo, integrando este enfoque en nuestros procesos de formación y desarrollo curricular.

                        Un claro ejemplo de esto es el proyecto TransMigrArts, financiado por la Unión Europea mediante la subvención Marie Skłodowska-Curie. En él, aplicamos metodologías de investigación participativas e iterativas para fortalecer la sostenibilidad de iniciativas artísticas y sociales que impactan directamente a comunidades migrantes en situación de vulnerabilidad.

                        Fruto de este trabajo interdisciplinario, desarrollamos Transform-ARTS, un cuestionario innovador compuesto por quince preguntas que permite evaluar el impacto transformador de talleres artísticos en estas comunidades. Este instrumento se ha materializado en una aplicación web accesible y disponible en español, francés e inglés, diseñada por un equipo de estudiantes de ingeniería, expertos en diseño web y educadores comprometidos con la inclusión y la interactividad.

                        De esta forma, unimos investigación, tecnología y compromiso social para que cada proyecto trascienda su fase inicial y contribuya a una transformación real y sostenible.
                    </h3>
                </section>

                <section className="et-slide" id="tab-flexbox">
                    <h1>OBJETIVOS E IMPACTO DEL PROYECTO</h1>
                    <ul className="left-aligned-list">

                        <li><h3>Garantizar la relevancia y sostenibilidad de los proyectos</h3></li>
                        <h3>Asegurar que los proyectos propuestos respondan a necesidades reales y mantengan sus beneficios a largo plazo, mediante estrategias de sostenibilidad integradas desde su diseño.</h3>

                        <li><h3>Fortalecer la cooperación interdisciplinaria</h3></li>
                        <h3>
                            Impulsar la colaboración entre investigadores, comunidades y expertos de distintas disciplinas para enriquecer el desarrollo y la implementación de soluciones innovadoras.
                        </h3>

                        <li><h3>Desarrollar capacidades de sostenibilidad en contextos universitarios</h3></li>
                        <h3>
                            Integrar la sostenibilidad como competencia transversal en los currículos universitarios, formando profesionales capaces de mantener y ampliar los impactos de los proyectos.
                        </h3>

                        <li><h3>Aplicar metodologías participativas e iterativas</h3></li>
                        <h3>
                            Utilizar enfoques de investigación basados en diseño, con la participación activa de las comunidades beneficiarias, para garantizar que los resultados sean pertinentes y adaptables.
                        </h3>
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
