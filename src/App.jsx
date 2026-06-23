import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Mascotas from './pages/Mascotas.jsx';
import Mascota from './pages/Mascota.jsx';
import Acerca from './pages/Acerca.jsx';
import Contacto from './pages/Contacto.jsx';
import Header from './components/Header.jsx';
import Anuncio from './components/Anuncio.jsx';
import Footer from './components/Footer.jsx';
import '@css/global.css';

function App() {
	const basename = import.meta.env.DEV ? '/' : '/cibertec-efsrt2';
	return (
		<Router basename={basename}>
			<Header />
			<Anuncio />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mascotas" element={<Mascotas />} />
					<Route path="/mascotas/:id" element={<Mascota />} />
					<Route path="/acerca" element={<Acerca />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
