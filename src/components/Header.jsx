import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import '@css/header.css';
import logo from '@images/logo.png';

function Header() {
	return (
		<header className="container">
			<Link to="/">
				<img src={logo} alt="Albergue de Mascotas - Segundo Hogar" />
			</Link>
			<Nav />
		</header>
	);
}

export default Header;
