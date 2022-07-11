import Popup from "../Popup/Popup";
import './ImagePopup.css'

function ImagePopup({ card, onClose }) {
  return (
    <Popup isOpen={card.url} name="image" onClose={onClose}>
      <figure className="popup__figure">
        {card.url && (
          <img
            src={card.url}
            alt="Котик "
            className="popup__image"
          />
        )}
        <figcaption className="popup__subtitle">Котик</figcaption>
      </figure>
    </Popup>
  );
}

export default ImagePopup;
