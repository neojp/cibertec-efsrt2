import { useState } from "react";
import "@css/card.css";

/**
 * Componente Card
 * 
 * Componente de tarjeta reutilizable que muestra una imagen, título y contenido.
 * La tarjeta soporta interacciones al pasar el mouse con callbacks personalizables.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {string} props.titulo - Título
 * @param {string} props.contenido - Contenido
 * @param {string} props.img - URL de la imagen
 * @param {Function} [props.onMouseEnter] - Función callback activada al pasar el mouse sobre la tarjeta. Recibe la función `setActive` como parámetro
 * @param {Function} [props.onMouseLeave] - Función callback activada al quitar el mouse de la tarjeta. Recibe la función `setActive` como parámetro
 * @returns {React.ReactElement} El elemento tarjeta renderizado
 * 
 * @example
 * // Uso básico
 * <Card 
 *	 titulo="Mi Tarjeta"
 *	 contenido="Descripción del contenido"
 *	 img="/path/to/image.jpg"
 *	 onMouseEnter={(setActive) => setActive(true)}
 *	 onMouseLeave={(setActive) => setActive(false)}
 * />
 */
function Card({ titulo, contenido, img, onMouseEnter, onMouseLeave }) {
	const [active, setActive] = useState(false);

	return <>
		<div
			// mostrar la clase `is-active` en base al estado `active`
			className={`card ${active ? 'is-active' : ''}`}

			// función callback para el evento mouse enter
			onMouseEnter={() => {
				if (typeof onMouseEnter === 'function') {
					onMouseEnter(setActive);
				}
			}}

			// función callback para el evento mouse leave
			onMouseLeave={() => {
				if (typeof onMouseLeave === 'function') {
					onMouseLeave(setActive);
				}
			}}
		>
			<img src={img} alt="{titulo}" />
			<h3>{titulo}</h3>
			<p>{contenido}</p>
		</div>
	</>;
}

export default Card;