import pet1 from '@images/pet-1.png';
import pet2 from '@images/pet-2.png';
import pet3 from '@images/pet-3.png';
import pet4 from '@images/pet-4.png';
import pet5 from '@images/pet-5.png';
import '@css/mascotasGrid.css';
import { Link } from 'react-router-dom';

function MascotasGrid() {
	return (
		<section className="mascotas-grid container">
			<h2>Mascotas en Adopción</h2>
			<Link to="/mascotas"><img src={pet1} alt="" /></Link>
			<Link to="/mascotas"><img src={pet2} alt="" /></Link>
			<Link to="/mascotas"><img src={pet3} alt="" /></Link>
			<Link to="/mascotas"><img src={pet4} alt="" /></Link>
			<Link to="/mascotas"><img src={pet5} alt="" /></Link>
		</section>
	);
}

export default MascotasGrid;