import React from 'react';
import { useParams } from 'react-router-dom';
import ArtworkDetails from '../components/ArtworkDetails/ArtworkDetails';

const ArtDetailsPage = () => {
    const { artId } = useParams();

    return <ArtworkDetails artId={artId} />;
};

export default ArtDetailsPage;
