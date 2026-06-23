import Hero from '../components/Hero.jsx';
import Equipo from '../components/Equipo.jsx';
import Adopciones from '../components/Adopciones.jsx';
import MascotasGrid from '../components/MascotasGrid.jsx';
import Cta from '../components/Cta.jsx';

import banner1 from '@images/banner-1.png';
import banner2 from '@images/banner-2.png';
import banner3 from '@images/banner-3.png';

function Home() {
	return (
		<>
			<Hero />

			<div className="banner">
				<img src={banner1} alt="Banner 1" />
			</div>

			<MascotasGrid />

			<div className="banner">
				<img src={banner2} alt="Banner 2" />
			</div>

			<Cta />

			<Equipo />

			<div className="banner">
				<img src={banner3} alt="Banner 3" />
			</div>

			<Adopciones />
		</>
	);
}

export default Home;