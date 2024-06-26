import "./Card.css";

import Battery from "../Battery/Battery";
import CardPopup from "../CardPopup/CardPopup";

export default function Card({ card, cardOnClick }) {
    const modifiedTitle = card.title.replace(' и ', '\nи ');

    function handleClick() {
        cardOnClick(card);
    }

    return ( 
        <article className="card" onClick={handleClick}>
            <h2 className="card__title">{modifiedTitle}</h2>
            <Battery additionalClassName={card.animationClassName} />
        </article>
    );
}