import "./CardsContainer.css";
import Card from "../Card/Card";

export default function CardsContainer({cardsArr}) {
    return (
        <section className="cards">
            <ul className="cards__list">
                {cardsArr.map((card) => (
                    <li key={card.id} className="cards__list-item">
                        <Card card={card} />
                    </li>
                ))}
            </ul>        
        </section>
    )
}