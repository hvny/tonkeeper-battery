import "./Battery.css";

import lightningIcon from "../../images/lightning.svg";

export default function Battery({ additionalClassName }) {
    return (
        <div className="battery">
            <div className={`battery__content ${additionalClassName}`}>
                <img src={lightningIcon} alt="молния" className="battery__image"></img>
            </div>
        </div>
    );
}