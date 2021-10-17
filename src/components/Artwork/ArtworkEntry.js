import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import './ArtworkEntry.css';

const ArtworkEntry = React.memo((props) => {
    return (
        <Card style={{ marginBottom: '1rem' }}>
            <div className="product-item">
                <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
                <p>{props.description}</p>
                <button className={!props.isFav ? 'button-outline' : ''}>
                    {
                        <Link to={`/artwork/${props.id}`}>
                            View Artwork Details
                        </Link>
                    }
                </button>
            </div>
        </Card>
    );
});

export default ArtworkEntry;
