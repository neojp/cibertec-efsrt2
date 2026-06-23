import Cta from '@components/Cta.jsx';
import ContactoForm from '@components/ContactoForm.jsx';
import Adopciones from '@components/Adopciones.jsx';
import whatsAppBtn from '@icons/whatsapp-btn.svg';
import banner2 from '@images/banner-2.png';

function Contacto() {
	return (
		<>
			<section className="hero text-hero container">
				<div className="content hero-content">
				<h1>Toda gran historia <br /> comienza con un hola</h1>
				</div>
			</section>
			<section className="cta container">
				<div className="inner-container">
					<p>Estamos aquí para resolver todas tus dudas sobre el proceso de adopción.</p>
				</div>
			</section>

			<p className="whatsapp-btn">
				<a href="https://wa.me/51999123456" target="_blank"><img src={whatsAppBtn} alt="WhatsApp" /></a>
			</p>

			<ContactoForm />

			<div className="banner">
				<img src={banner2} alt="Banner 2" />
			</div>

			<Adopciones />
		</>
	);
}

export default Contacto;