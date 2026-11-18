import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { DocumentCard, VideoCard} from "../components/Showcase";
import { proposito, documentos, videos, equipo } from "../data/contenido";
import "./inicio.css";

function Inicio() {
  return (
    <>
      <Navbar />

      <div className="inicio-page">
        {/* HERO */}
        <HeroBanner />

        {/* PROPÓSITO */}
        <section className="seccion" id="proposito">
          <SectionTitle title="Propósito" subtitle="" />
          <div className="about-content">
            <h2>{proposito.titulo}</h2>
            <p>{proposito.intro}</p>
          </div>
          <div className="grid grid--3">
            {proposito.puntos.map((p) => (
              <div className="tarjeta" key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className="seccion" id="documentos">
          <SectionTitle title="Documentos" subtitle="La base del proyecto, lista para leer o descargar" />
          <div className="grid grid--1">
            {documentos.map((d) => <DocumentCard key={d.titulo} {...d} />)}
          </div>
        </section>

        {/* VIDEOS */}
        <section className="seccion" id="videos">
          <SectionTitle title="Videos" subtitle="Apoyo Visual" />
          <div className="grid grid--3">
            {videos.map((v) => <VideoCard key={v.titulo} {...v} />)}
          </div>
        </section>

        {/* EQUIPO */}
<section className="seccion" id="equipo">
  <SectionTitle title="Quiénes lo hicimos" subtitle="El equipo detrás de Mundo a la Carta" />
  <div className="equipo-grupo">
    {equipo.foto && <img className="equipo-grupo__foto" src={equipo.foto} alt="Foto grupal del equipo de Mundo a la Carta" />}
    <ul className="equipo-grupo__lista">
      {equipo.integrantes.map((nombre) => <li key={nombre}>{nombre}</li>)}
    </ul>
  </div>
</section>
      </div>

      <Footer />
    </>
  );
}


export default Inicio;


