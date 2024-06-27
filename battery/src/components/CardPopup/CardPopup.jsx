import "./CardPopup.css";

export default function CardPopup({ card, isOpen, onClose }) {

    const handleWindowClick = (evt) => {
        if (evt.target.classList.contains("popup")) {
            onClose();
        }
    };

    return (
        <div className={`popup ${isOpen && "popup_opened"}`} onClick={handleWindowClick}>
            <div className="popup__container">
                <h2 className="popup__title">{card.title}</h2>
                <div className="popup__description-container">
                    <p className="popup__description">{card.description}</p>
                </div>
                <button className="button popup__button popup__button_close" onClick={onClose}>&#10006;</button>
            </div>
        </div>
    )
}