import React from 'react';
import './FavoriteCats.css';
import CardCat from '../CardCat/CardCat';
import {useSelector} from 'react-redux';

const FavouriteCats = () => {
    const likedCats = useSelector((state) => state.likedCats.likedCats)

    return (
        <article className="liked-cats">
            <div className="liked-cats__wrapper">
                {likedCats.map((item) => (
                    <CardCat
                        key={item.id}
                        card={item}
                    />
                ))}
                {!likedCats.length && (
                    <p className="saved-cats__text">... у вас нет любимых котиков ...</p>
                )}
            </div>
        </article>
    );
};

export default FavouriteCats;