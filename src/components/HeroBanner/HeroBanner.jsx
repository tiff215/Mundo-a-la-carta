import "./HeroBanner.css";
import heroImg from "../../assets/mundo-hero.png";
import { hero } from "../../data/contenido";

function HeroBanner() {
  return (
    <section className="hero" id="inicio">
      <h2>{hero.titulo}</h2>
      <p>{hero.texto}</p>

      <img className="hero__img" src={heroImg} alt="Una familia sonríe frente al restaurante Mundo a la Carta" />
    </section>
  );
}
export default HeroBanner;
