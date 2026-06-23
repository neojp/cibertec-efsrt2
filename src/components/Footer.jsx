import { Link } from 'react-router-dom';
import '@css/footer.css';
import logo from '@images/logo.png';
import facebook from '@icons/facebook.svg';
import instagram from '@icons/instagram.svg';
import whatsapp from '@icons/whatsapp.svg';

function Footer() {
	return (
		<footer className="container">
			<div className="footer-top">
				<Link to="/"><img className="footer-logo" src={logo} alt="Albergue de Mascotas" /></Link>
				<p>Ayudanos a salvar vidas</p>
				<ul className="footer-social">
					<li><a href="https://facebook.com/" target="_blank"><img src={facebook} alt="Facebook" /></a></li>
					<li><a href="https://instagram.com/" target="_blank"><img src={instagram} alt="Instagram" /></a></li>
					<li><a href="https://wa.me/51999123456" target="_blank"><img src={whatsapp} alt="WhatsApp" /></a></li>
				</ul>
			</div>
			<div className="footer-bottom">
				<p>&copy; {(new Date()).getFullYear()} Segundo Hogar - Albergue de Mascotas</p>
				<p>EF - Braulio Saloma, Joan Piedra, Rosa Truyenque</p>
			</div>
		</footer>
	);
}

export default Footer;
