import { useState } from 'react'
import { PetCard } from "./PetCard"
import { PetCardMini } from "./PetCardMini"
import mascotas from '../data/mascotas.js'

const ITEMS_PER_PAGE = 12

export const PetsAdoption = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(mascotas.length / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentMascotas = mascotas.slice(startIndex, endIndex)

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return (
        <section className="petsadoption">
            <h2>Mascotas en adopción</h2>
            <div className="petsadoption-pets">
                {currentMascotas.map((mascota) => (
                    <PetCard key={mascota.id} mini datos={mascota} />
                ))}
            </div>
            <div className="navigator adoption">
                <span
                    className="page-btn prev"
                    onClick={() => goToPage(currentPage - 1)}
                    style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                    ‹
                </span>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <span
                        key={page}
                        className={`page-num ${page === currentPage ? 'active' : ''}`}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </span>
                ))}
                <span
                    className="page-btn next"
                    onClick={() => goToPage(currentPage + 1)}
                    style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                    ›
                </span>
            </div>
        </section>
    )
}
