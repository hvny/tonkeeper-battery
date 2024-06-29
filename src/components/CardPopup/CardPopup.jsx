import "./CardPopup.css";

import Battery from "../Battery/Battery";

import { useEffect } from "react";

export default function CardPopup({ card, isOpen, onClose }) {
    const handleWindowClick = (evt) => {
        if (evt.target.classList.contains("popup")) {
            onClose();
        }
    };

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }
    // }, [isOpen]);

    return (
        <div className={`popup ${isOpen && "popup_opened"}`} onClick={handleWindowClick}>
            <div className="popup__container">
                <h2 className="popup__title">{card.title}</h2>
                <hr className="popup__line" />
                <div className="popup__description-container">
                    { 
                        card.description instanceof Array ?
                        card.description.map((paragraph, index) => (
                            <p className="popup__paragraph" key={index}>{paragraph}</p>
                        ))
                        :
                        <p className="popup__paragraph">{card.description}</p>
                    }
                </div>
                <div className="popup__battery-container">
                    <Battery additionalClassName={card.animationClassName} />
                </div>
                <button className="button popup__button popup__button_close" onClick={onClose}>&#10006;</button>
            </div>
        </div>
    )
}