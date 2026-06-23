import { useState, useEffect } from 'react'
import { PetCard } from "./PetCard"
import mascotas from '../data/mascotas'
import '../assets/css/slider.css'

export const PetSlider = () => {
    // Tomar las primeras 3 mascotas como destacadas
    const mascotasDestacadas = mascotas.slice(0, 3)
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-mover el slider cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % mascotasDestacadas.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [mascotasDestacadas.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <section className="slider">
            <div className="slider-content" key={currentSlide}>
                <PetCard datos={mascotasDestacadas[currentSlide]} />
            </div>
            <div className='slider-navigator'>
                {mascotasDestacadas.map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        ●
                    </span>
                ))}
            </div>
        </section>
    )
}
