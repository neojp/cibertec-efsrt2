import team1 from '@images/team-1.png';
import team2 from '@images/team-2.png';
import team3 from '@images/team-3.png';
import team4 from '@images/team-4.png';
import team5 from '@images/team-5.png';
import '@css/equipo.css';

function Equipo() {
	return (
		<section className="equipo container">
			<div className="inner-container">
				<h2>Nuestro Equipo</h2>
				<ul>
					<li>
						<img src={team1} alt="Luis Quispe" />
						<dl>
							<dt>Luis Quispe</dt>
							<dd>Director de Operaciones</dd>
						</dl>
					</li>
					<li>
						<img src={team2} alt="Carmen Vargas" />
						<dl>
							<dt>Carmen Vargas</dt>
							<dd>Coordinadora de Rescate</dd>
						</dl>
					</li>
					<li>
						<img src={team3} alt="Antonio Flores" />
						<dl>
							<dt>Antonio Flores</dt>
							<dd>Veterinario Principal</dd>
						</dl>
					</li>
					<li>
						<img src={team4} alt="Bertha Mamani" />
						<dl>
							<dt>Bertha Mamani</dt>
							<dd>Gerente de Adopciones</dd>
						</dl>
					</li>
					<li>
						<img src={team5} alt="Javier Solís" />
						<dl>
							<dt>Javier Solís</dt>
							<dd>Especialista de Bienestar Animal</dd>
						</dl>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Equipo;
