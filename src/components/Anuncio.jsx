import { Link } from 'react-router-dom';
import '@css/anuncio.css';

function Anuncio() {
	return (
		<section className="anuncio container">
			<p>
				No todos podemos adoptar, pero todos podemos ayudar.
				<Link to="/contacto" className='link-underline'>Únete a nuestro equipo →</Link>
			</p>
		</section>
	);
}

export default Anuncio;
