import "./Battery.css";

import lightningIcon from "../../images/lightning.svg";

export default function Battery({ additionalClassName }) {
    return (
        <div className="battery">
            <img src={lightningIcon} alt="молния" className="battery__image"></img>
            <div className={`battery__content ${additionalClassName}`}></div>
        </div>
    );
}