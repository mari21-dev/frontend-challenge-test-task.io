import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Cats from '../Cats/Cats';
import FavouriteCats from '../FavoriteCats/FavoriteCats';
import {useDispatch} from 'react-redux';
import {getCatsAsync} from '../../redux/cats-reducer';
import ImagePopup from "../ImagePopup/ImagePopup";


function App() {
    const [selectedCard, setSelectedCard] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsAsync());
    }, [])

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closePopup = () => {
        setSelectedCard({});
    };

    return (
        <div className="app">
            <Header/>
            <ImagePopup card={selectedCard} onClose={closePopup}/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Cats onCardClick={handleCardClick}/>
                    }
                />
                <Route
                    path="/liked-cats"
                    element={<FavouriteCats/>}
                />
            </Routes>
        </div>
    );
}

export default App;
