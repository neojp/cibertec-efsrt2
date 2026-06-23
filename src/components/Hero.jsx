import { Link } from 'react-router-dom';
import heroImg from '@images/hero.png';
import '@css/hero.css';

function Hero() {
	return (
		<section className="hero container">
			<div className="content">
				<h1>Sé el héroe de <br />su historia</h1>
				<Link className="button" to="/mascotas">Adopta ya</Link>
			</div>
			<img src={heroImg} alt="Hero" />
		</section>
	);
}

export default Hero;
