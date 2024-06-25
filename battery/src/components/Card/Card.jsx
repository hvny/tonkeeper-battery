import "./Card.css";

import Battery from "../Battery/Battery";

export default function Card({ card }) {
    const modifiedTitle = card.title.replace(' и ', '\nи ');

    return ( 
        <article className="card">
            <h2 className="card__title">{modifiedTitle}</h2>
            <Battery additionalClassName={card.animationClassName} />
        </article>
    );
}