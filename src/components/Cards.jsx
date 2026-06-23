import "@css/cards.css";

// componente que recibe contenido y lo muestra dentro un `<div class="cards" />`
function Cards({ children }) {
  return <div className="cards">
    {children}
  </div>;
}

export default Cards;