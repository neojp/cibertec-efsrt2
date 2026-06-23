import { Link } from 'react-router-dom';
import '@css/cta.css';

function Cta() {
    return (
        <section className="cta container">
            <div className="inner-container">
                <p>Con cada aporte, logramos rehabilitar a mascotas rescatadas de las calles y darles el cuidado que merecen</p>
                <Link to="/mascotas" className="button">Se parte del cambio</Link>
            </div>
        </section>
    );
}

export default Cta;
