import React, { useState } from 'react';
import { IMGURL, img_config } from '../../utility/urlconfig';
import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ArtworkDetails.css';

const ArtworkEntry = (props) => {
    const { artId } = props;

    const [artworks, dispatch] = useStore(false);
    console.log(
        '🚀 ~ file: ArtworkDetails.js ~ line 11 ~ ArtworkEntry ~ artworks',
        artworks
    );
    const targetArtwork = artworks.products.filter(
        (artwork) => artwork.id === Number(artId)
    )[0];
    console.log(
        '🚀 ~ file: ArtworkDetails.js ~ line 13 ~ ArtworkEntry ~ targetArtwork',
        targetArtwork
    );

    const [isFavLocal, setIsFavLocal] = useState(targetArtwork.isFavorite);

    const toggleFavHandler = () => {
        dispatch('TOGGLE_FAV', artId);
    };

    const imgSrc = IMGURL + '/' + targetArtwork.image_id + img_config;

    return (
        <Card style={{ marginBottom: '1rem' }}>
            <div className="product-item">
                <h2 className={isFavLocal ? 'is-fav' : ''}>
                    {targetArtwork.title}
                </h2>
                <p>{targetArtwork.date_start}</p>
                <p>
                    {' '}
                    <img alt={targetArtwork.title} src={imgSrc}></img>
                </p>
                <button
                    className={!isFavLocal ? 'button-outline' : ''}
                    onClick={() => {
                        toggleFavHandler();
                        setIsFavLocal((state) => !state);
                    }}
                >
                    {isFavLocal ? 'Un-Favorite' : 'Favorite'}
                </button>
            </div>
        </Card>
    );
};

export default ArtworkEntry;
