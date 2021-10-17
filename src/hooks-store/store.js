import { useState, useEffect } from 'react';
import { BASEURL, artworks_endpoint } from '../utility/urlconfig';
import { fetchJson } from '../utility/fetchJson';

let globalState = { products: [] };
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter((li) => li !== setState);
            }
        };
    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = async (userActions) => {
    const artworkFetch = await fetchJson(BASEURL + artworks_endpoint).then(
        (res) => res.data
    );
    console.log("🚀 ~ file: store.js ~ line 40 ~ initStore ~ artworkFetch", artworkFetch)

    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("🚀 ~ file: store.js ~ line 42 ~ initStore ~ existingFavorites", existingFavorites)

    const prepareFavorites = artworkFetch.map((artwork) => {
        if (existingFavorites.includes(String(artwork.id))) {
            console.log(`${artwork.title} is a existing favorite`)
            return {
                ...artwork,
                isFavorite: true,
            };
        }

        return {
            ...artwork,
            isFavorite: false,
        };
    });

    globalState = { products: [...globalState.products, ...prepareFavorites] };
    actions = { ...actions, ...userActions };
};
