import "./CardPopup.css";

export default function CardPopup({ card, isOpen, onClose }) {
    return (
        <div className={`popup ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__title">{card.title}</h2>
                <div className="popup__description-container">
                    <p className="popup__description">{card.description}</p>
                </div>
            </div>
        </div>
    )
}