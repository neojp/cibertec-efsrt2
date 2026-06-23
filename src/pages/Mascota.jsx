import { PetCard } from '@components/PetCard.jsx'
import { Discurso } from '../components/Discurso';
import { FichaAdopcion } from '../components/FichaAdopcion';
import mascotas from '../data/mascotas'
import { useParams } from 'react-router-dom';
import '@css/mascota-form.css'

function Mascota() {
	const { id } = useParams();
	const mascota = mascotas.find(m => m.id === parseInt(id))

	return (
		<div className='mascota container'>
			<section className='info'>
				<PetCard datos={mascota} />
			</section>
			<Discurso withButton>
				<p>
					Adoptar es mucho más que rescatar; es permitir que una vida que conoció la soledad te enseñe lo que significa la gratitud en su estado más puro.
				</p>
			</Discurso>
			<FichaAdopcion />
		</div>
	);
}

export default Mascota;