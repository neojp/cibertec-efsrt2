import { useState } from 'react';
import '@css/contacto-form.css';
import mascotas from '../data/mascotas';

// ordenar por nombre
mascotas.sort((a, b) => a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()));


function ContactoForm() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const regex = {
        nombre1: /^.{3,}$/, // min 3 caracteres
        nombre2: /^.{0,35}$/, // max 35 caracteres
        correo1: /^.{5,}$/, // min 5 caracteres
        correo2: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // email básico
        celular1: /^\d+$/, // solo números
        celular2: /^.{9}$/, // 9 digitos
        mensaje1: /^.{5,}$/, // min 5 caracteres
        mensaje2: /^.{0,250}$/, // min 250 caracteres
    };

    function validarNombre(value) {
        return {
            nombre1: !regex.nombre1.test(value),
            nombre2: !regex.nombre2.test(value),
        };
    }

    function validarCorreo(value) {
        return {
            correo1: !regex.correo1.test(value),
            correo2: !regex.correo2.test(value),
        };
    }

    function validarCelular(value) {
        return {
            celular1: !regex.celular1.test(value),
            celular2: !regex.celular2.test(value),
        };
    }

    function validarMensaje(value) {
        return {
            mensaje1: !regex.mensaje1.test(value),
            mensaje2: !regex.mensaje2.test(value),
        };
    }

    function handleChange(e) {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        switch (name) {
            case 'nombre':
                newErrors = { ...validarNombre(value) };
                break;
            case 'correo':
                newErrors = { ...validarCorreo(value) };
                break;
            case 'celular':
                newErrors = { ...validarCelular(value) };
                break;
            case 'mascota':
                newErrors = { ...validarMascota(value) };
                break;
            default:
                newErrors = { ...validarMensaje(value) };
                break;
        }

        setErrors(newErrors);
    }

    // validar formulario y emular envio de datos
    function submit(e) {
        // evitar que submit recargue la pagina
        e.preventDefault();

        let newErrors = {};

        // obtener todos los datos
        const nombre = e.target.elements.nombre.value.trim();
        const correo = e.target.elements.correo.value.trim();
        const celular = e.target.elements.celular.value.trim();
        const mascota = e.target.elements.mascota.value.trim();
        const mensaje = e.target.elements.mensaje.value.trim();

        // validar todos los datos
        newErrors = { ...newErrors, ...validarNombre(nombre) };
        newErrors = { ...newErrors, ...validarCorreo(correo) };
        newErrors = { ...newErrors, ...validarCelular(celular) };
        newErrors = { ...newErrors, ...validarMensaje(mensaje) };
        setErrors(newErrors);

        console.log('Validar', { nombre, correo, celular, mascota, mensaje }, { newErrors, errors });

        // hay error de validación, no continuar con la función
        if (Object.keys(newErrors).find((key) => newErrors[key])) {
            return;
        }

        // emular envío del formulario con estos datos
        console.log('Emular envio', { nombre, correo, celular, mascota, mensaje });

        // mostrar animación de carga
        setLoading(true);

        // mostrar mensaje de éxito después de 2 segundos
        setTimeout(() => {
            // mensaje de éxito
            alert('Mensaje enviado');

            // ocultar animación de carga
            setLoading(false);

            // limpiar formulario
            e.target.reset();
        }, 2000);
    }

    return <section className="contacto-form container">
        <h2>Contacto</h2>
        <form noValidate method="post" onSubmit={submit} className={`${loading ? 'loading' : ''}`}>
            <p>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required onChange={handleChange} />
            </p>
            {(errors.nombre1 || errors.nombre2) && 
                <ul className="errors">
                    {errors.nombre1 && <li>Debe tener al menos 3 caracteres.</li>}
                    {errors.nombre2 && <li>Debe tener un máximo de 35 caracteres.</li>}
                </ul>
            }

            <p>
                <label htmlFor="correo">Correo</label>
                <input type="email" id="correo" name="correo" required onChange={handleChange} />
            </p>
            {(errors.correo1 || errors.correo2) && 
                <ul className="errors">
                    {errors.correo1 && <li>Debe tener al menos 5 caracteres.</li>}
                    {errors.correo2 && <li>Debe ser un correo.</li>}
                </ul>
            }

            <p>
                <label htmlFor="celular">Celular</label>
                <input type="tel" id="celular" name="celular" required onChange={handleChange} />
            </p>
            {(errors.celular1 || errors.celular2) && 
                <ul className="errors">
                    {errors.celular1 && <li>Debe ser solo números.</li>}
                    {errors.celular2 && <li>Debe ser 9 dígitos.</li>}
                </ul>
            }

            <p class="input-mascota">
                <label htmlFor="mascota">Mascota <small>(opcional)</small></label>
                <select name="mascota" id="mascota">
                    <option value=""></option>
                    {mascotas.map((m, i) => <option value={m.nombre} key={i}>{m.nombre}</option>)}
                </select>
            </p>
            
            <p>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" required onChange={handleChange}></textarea>
            </p>
            {(errors.mensaje1 || errors.mensaje2) && 
                <ul className="errors">
                    {errors.mensaje1 && <li>Debe tener al menos 5 caracteres.</li>}
                    {errors.mensaje2 && <li>Debe tener un máximo de 250 caracteres.</li>}
                </ul>
            }

            <p className="buttons"><button className="button" type="submit">Enviar</button></p>

            <div className="overlay">
                <span className="loader"></span>
            </div>
        </form>
    </section>
}

export default ContactoForm;