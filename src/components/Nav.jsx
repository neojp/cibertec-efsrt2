import { Link } from 'react-router-dom';
import '@css/nav.css';

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/mascotas">Mascotas</Link>
				</li>
				<li>
					<Link to="/acerca">Acerca</Link>
				</li>
				<li>
					<Link to="/contacto">Contacto</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
