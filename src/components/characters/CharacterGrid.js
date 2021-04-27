import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => { //destructure props.items and props.isLoading
    return isLoading ? (<Spinner />) : (<section className="cards">
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
    </section>)
}

export default CharacterGrid;
