import React from 'react';
import {useDispatch} from 'react-redux';
import './CardCat.css';
import {addLikeAction, deleteFromLikedAction} from '../../redux/likeCats-reducer';
import {showLikedCardAction, removeLikeAction} from '../../redux/cats-reducer';

const CardCat = ({card, onCardClick}) => {
    const dispatch = useDispatch();

    const handleCardClick = () => {
        onCardClick(card);
    };

    const handleLikeButton = () => {
        dispatch(addLikeAction({
            id: card.id,
            url: card.url,
            isLiked: true,
        }));

        dispatch(showLikedCardAction(card.id))
    }

    const handleDislikeButton = () => {
        dispatch(removeLikeAction(card.id));
        dispatch(deleteFromLikedAction(card.id));
    }

    return (
        <div onClick={handleCardClick} className="card">
            <img className="card__image" src={card?.url} alt="картинка с котиком"/>
            <button
                className={card.isLiked ? "card__button-like card__button-like_active" : "card__button-like"}
                onClick={card.isLiked ? handleDislikeButton : handleLikeButton}
            >
            </button>
        </div>
    );
};

export default CardCat;