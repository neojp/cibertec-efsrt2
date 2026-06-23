import { useState } from 'react'
import { LabelInput } from "./LabelInput"
import { LabelTextArea } from "./LabelTextArea"

export const FichaAdopcion = () => {
    const [state, setState] = useState({
        errors: {}, fields: {
            nombre: '',
            edad: '',
            dni: '',
            ocupacion: '',
            direccion: '',
            distrito: '',
            correo: '',
            celular: '',
            argumento: '',
            fecha: '',
        }
    })
    const { errors, fields } = state

    const regex = {
        nombre: /^.{10,}$/,
        edad: /^.{1,}$/,
        dni: /^\d{8}$/,
        ocupacion: /^.{3,}$/,
        direccion: /^.{5,}$/,
        distrito: /^.{3,}$/,
        correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        celular: /^\d{9}$/,
        argumento: /^.{10,}$/,
        fecha: /^.{1,}$/,
    };

    function validarCampo(name, value) {
        switch (name) {
            case 'nombre':
                return { nombre: !regex.nombre.test(value) }
            case 'edad':
                return { edad: !regex.edad.test(value) }
            case 'dni':
                return { dni: !regex.dni.test(value) }
            case 'ocupacion':
                return { ocupacion: !regex.ocupacion.test(value) }
            case 'direccion':
                return { direccion: !regex.direccion.test(value) }
            case 'distrito':
                return { distrito: !regex.distrito.test(value) }
            case 'correo':
                return { correo: !regex.correo.test(value) }
            case 'celular':
                return { celular: !regex.celular.test(value) }
            case 'argumento':
                return { argumento: !regex.argumento.test(value) }
            case 'fecha':
                return { fecha: !regex.fecha.test(value) }
            default:
                return {}
        }
    }

    function onChange(e) {
        const { name, value } = e.target
        const newErrors = { ...errors, ...validarCampo(name, value) }
        setState({ ...state, fields: { ...fields, [name]: value }, errors: newErrors })
    }

    function submit(e) {
        e.preventDefault()

        const form = e.target
        const nombre = form.elements.nombre.value.trim()
        const edad = form.elements.edad.value.trim()
        const dni = form.elements.dni.value.trim()
        const ocupacion = form.elements.ocupacion.value.trim()
        const direccion = form.elements.direccion.value.trim()
        const distrito = form.elements.distrito.value.trim()
        const correo = form.elements.correo.value.trim()
        const celular = form.elements.celular.value.trim()
        const argumento = form.elements.argumento.value.trim()
        const fecha = form.elements.fecha.value.trim()

        let newErrors = {}
        newErrors = { ...newErrors, ...validarCampo('nombre', nombre) }
        newErrors = { ...newErrors, ...validarCampo('edad', edad) }
        newErrors = { ...newErrors, ...validarCampo('dni', dni) }
        newErrors = { ...newErrors, ...validarCampo('ocupacion', ocupacion) }
        newErrors = { ...newErrors, ...validarCampo('direccion', direccion) }
        newErrors = { ...newErrors, ...validarCampo('distrito', distrito) }
        newErrors = { ...newErrors, ...validarCampo('correo', correo) }
        newErrors = { ...newErrors, ...validarCampo('celular', celular) }
        newErrors = { ...newErrors, ...validarCampo('argumento', argumento) }
        newErrors = { ...newErrors, ...validarCampo('fecha', fecha) }

        setState({ ...state, errors: newErrors })

        if (Object.keys(newErrors).find((key) => newErrors[key])) {
            return
        }

        alert('Solicitud de adopción enviada')
        form.reset()
    }

    console.log({ fields, errors })

    return (
        <section className="fichaadopcion">
            <h2>Ficha de adopción</h2>
            <form className="mascota-form" onSubmit={submit}>
                <LabelInput label="Nombre" name="nombre" onChange={onChange} defaultValue={fields.nombre} />
                {errors.nombre &&
                    <ul className="errors">
                        <li>Debe tener al menos 10 caracteres.</li>
                    </ul>
                }

                <LabelInput label="Edad" name="edad" type='number' onChange={onChange} defaultValue={fields.edad} />
                {errors.edad &&
                    <ul className="errors">
                        <li>Ingrese su edad.</li>
                    </ul>
                }

                <LabelInput label="DNI" name="dni" type='number' onChange={onChange} defaultValue={fields.dni} />
                {errors.dni &&
                    <ul className="errors">
                        <li>Debe tener 8 dígitos.</li>
                    </ul>
                }

                <LabelInput label="Ocupación" name="ocupacion" onChange={onChange} defaultValue={fields.ocupacion} />
                {errors.ocupacion &&
                    <ul className="errors">
                        <li>Debe tener al menos 3 caracteres.</li>
                    </ul>
                }

                <LabelInput label="Dirección" name="direccion" onChange={onChange} defaultValue={fields.direccion} />
                {errors.direccion &&
                    <ul className="errors">
                        <li>Debe tener al menos 5 caracteres.</li>
                    </ul>
                }

                <LabelInput label="Distrito" name="distrito" onChange={onChange} defaultValue={fields.distrito} />
                {errors.distrito &&
                    <ul className="errors">
                        <li>Debe tener al menos 3 caracteres.</li>
                    </ul>
                }

                <LabelInput label="Correo" name="correo" type='email' onChange={onChange} defaultValue={fields.correo} />
                {errors.correo &&
                    <ul className="errors">
                        <li>Ingrese un correo válido.</li>
                    </ul>
                }

                <LabelInput label="Celular" name="celular" type='number' onChange={onChange} defaultValue={fields.celular} />
                {errors.celular &&
                    <ul className="errors">
                        <li>Debe tener 9 dígitos.</li>
                    </ul>
                }

                <LabelTextArea label="¿Por qué desea adoptar una mascota?" name="argumento" onChange={onChange} defaultValue={fields.argumento} />
                {errors.argumento &&
                    <ul className="errors">
                        <li>Debe tener al menos 10 caracteres.</li>
                    </ul>
                }

                <LabelInput label="Agendar cita" name="fecha" type='date' onChange={onChange} defaultValue={fields.fecha} />
                {errors.fecha &&
                    <ul className="errors">
                        <li>Seleccione una fecha.</li>
                    </ul>
                }

                <button className="button" type="submit">Enviar</button>
            </form>
        </section>
    )
}
