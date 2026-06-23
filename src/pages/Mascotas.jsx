import '@css/mascotas.css'
import { PetCard } from "../components/PetCard";
import { Discurso } from '../components/Discurso';
import { PetsAdoption } from '../components/PetsAdoption';
import { PetSlider } from '../components/PetSlider';

function Mascotas() {
	return (
		<div className='mascotas-container container'>
			<PetSlider />
			<Discurso>
				<p>
					Adoptar no es solo abrir las puertas de tu casa, es abrir un capítulo de lealtad que no conoce condiciones.
				</p>
			</Discurso>
			<PetsAdoption />
		</div>
	);
}

export default Mascotas;