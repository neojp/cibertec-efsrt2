import Equipo from '../components/Equipo';
import Adopciones from '../components/Adopciones';
import banner3 from '@images/banner-3.png';
import '@css/acerca.css'

function Acerca() {
  return (
    <>
      <div className="container acerca">
        <section className="hero text-hero">
          <div className="content hero-content">
            <h1>TU HOGAR COMIENZA <br /> CON UNA HUELLA </h1>
          </div>
        </section>

        <section class="cta">
          <div class="inner-container">
            <p>Trabajamos día a día para transformar vidas, brindando refugio, salud y una segunda oportunidad a quienes más lo necesitan mientras esperan a su familia ideal.</p>
          </div>
        </section>

        <Equipo />

        <section className="question-seccion">
          <div className="inner-container">
            <h2 className="question-titulo">Preguntas frecuentes</h2>
            
            <div className="question-list">
              
              <details className="question-item">
                <summary>¿Cuáles son los pasos para adoptar?</summary>
                <p>Completa el formulario, pasa una entrevista personal y firma el contrato de adopción responsable.</p>
              </details>

              <details className="question-item">
                <summary>¿Qué cuidados médicos reciben?</summary>
                <p>Todas nuestras mascotas se entregan vacunadas, desparasitadas y esterilizadas por nuestro veterinario.</p>
              </details>

              <details className="question-item">
                <summary>¿Cómo puedo contribuir sin adoptar?</summary>
                <p>Puedes ser padrino con una donación mensual, donar alimento o unirte a nuestro equipo de voluntarios.</p>
              </details>

              <details className="question-item">
                <summary>¿Existe seguimiento post-adopción?</summary>
                <p>Sí, mantenemos contacto para asesorarte en la adaptación y asegurar el bienestar de la mascota.</p>
              </details>

            </div>
          </div>
        </section>
      </div>

      <div className="banner">
              <img src={banner3} alt="Banner 3" />
            </div>

      <Adopciones />
    </>
  );
}

export default Acerca;