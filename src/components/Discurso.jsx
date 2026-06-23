import whatsAppBtn from '@icons/whatsapp-btn.svg';

export const Discurso = ({ withButton = false, children }) => {
    return (
        <section className='discurso'>
            {children}
            {withButton && <p className="whatsapp-btn">
                <a href="https://wa.me/51999123456" target="_blank"><img src={whatsAppBtn} alt="WhatsApp" /></a>
            </p>}
        </section>
    )
}
