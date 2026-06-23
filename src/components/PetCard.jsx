import male from '@icons/male.svg'
import female from '@icons/female.svg'
import pet3 from '@images/pet-3.png'
import { Link } from 'react-router-dom'

export const PetCard = ({ mini = false, datos = {} }) => {

	const extendclass = mini ? 'mini' : 'main'

	// Usar datos de la prop o valores por defecto
	const nombre = datos?.nombre || 'Sin nombre'
	const edad = datos?.edad || '1 año'
	const genero = datos?.sexo === 'H' ? female : male
	const imagen = datos?.foto || pet3
	const descripcion = datos?.descripcion || ''

	return (
		<Link to={`/mascotas/${datos.id}`} className={`card card--${extendclass} classCard`}>
			<div className='content-img'>
				<img src={`${import.meta.env.BASE_URL}src/images/mascotas/${imagen}`} alt={nombre} />
			</div>
			<div className="data">
				<h3>{nombre}</h3>
				<p className="edad">{edad}</p>
				<div className='genero'>
					<img src={genero} alt="genero" />
				</div>
				{!mini && descripcion && <p className="descripcion">{descripcion}</p>}
			</div>
		</Link>
	)
}
