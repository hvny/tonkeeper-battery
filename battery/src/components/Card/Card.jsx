import "./Card.css";

import Battery from "../Battery/Battery";

export default function Card({ card }) {
    return (
        <article className="card">
            {/* <img src={card.image} alt={card.title} className="card__image" /> */}
            <h2 className="card__title">{card.title}</h2>
            <Battery />
        </article>
    );
}