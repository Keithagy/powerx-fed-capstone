import React from 'react';

import ArtworkEntry from '../components/Artwork/ArtworkEntry';
import { useStore } from '../hooks-store/store';
import './Artwork.css';

const ArtworkPage = (props) => {
    const state = useStore()[0];

    return (
        <ul className="products-list">
            {state.products.map((prod) => (
                <ArtworkEntry
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    );
};

export default ArtworkPage;
