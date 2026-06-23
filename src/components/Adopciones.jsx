import adopcion1 from '@images/adopciones/1.png';
import adopcion2 from '@images/adopciones/2.png';
import adopcion3 from '@images/adopciones/3.png';
import adopcion4 from '@images/adopciones/4.png';
import adopcion5 from '@images/adopciones/5.png';
import adopcion6 from '@images/adopciones/6.png';
import adopcion7 from '@images/adopciones/7.png';
import adopcion8 from '@images/adopciones/8.png';
import adopcion9 from '@images/adopciones/9.png';
import '@css/adopciones.css';

function Adopciones() {
	return (
		<section className="adopciones">
			<h2>Adopciones Completadas</h2>
			<div className="ticker-container">
				<div className="ticker-wrapper">
					<ul className="ticker-list">
						<li><img src={adopcion1} alt="" /></li>
						<li><img src={adopcion2} alt="" /></li>
						<li><img src={adopcion3} alt="" /></li>
						<li><img src={adopcion4} alt="" /></li>
						<li><img src={adopcion5} alt="" /></li>
						<li><img src={adopcion6} alt="" /></li>
						<li><img src={adopcion7} alt="" /></li>
						<li><img src={adopcion8} alt="" /></li>
						<li><img src={adopcion9} alt="" /></li>
						{/* repetir la lista */}
						<li><img src={adopcion1} alt="" /></li>
						<li><img src={adopcion2} alt="" /></li>
						<li><img src={adopcion3} alt="" /></li>
						<li><img src={adopcion4} alt="" /></li>
						<li><img src={adopcion5} alt="" /></li>
						<li><img src={adopcion6} alt="" /></li>
						<li><img src={adopcion7} alt="" /></li>
						<li><img src={adopcion8} alt="" /></li>
						<li><img src={adopcion9} alt="" /></li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Adopciones;
