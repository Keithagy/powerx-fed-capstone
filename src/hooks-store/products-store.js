import { initStore } from './store';
const configureStore = async () => {
    const actions = {
        TOGGLE_FAV: (curState, productId) => {
            const existingFavorites =
                JSON.parse(localStorage.getItem('favorites')) || [];
            if (existingFavorites.includes(productId)) {
                const newFavorites = existingFavorites.filter(
                    (id) => id !== productId
                );
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
            } else {
                existingFavorites.push(productId);
                localStorage.setItem('favorites', JSON.stringify(existingFavorites));
            }

            const prodIndex = curState.products.findIndex((p) => {
                console.log(p);
                return p.id === Number(productId);
            });

            console.log(
                '🚀 ~ file: products-store.js ~ line 5 ~ configureStore ~ curState.products[prodIndex]',
                curState.products[prodIndex]
            );

            const newFavStatus = !curState.products[prodIndex].isFavorite;
            const updatedProducts = [...curState.products];
            updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: newFavStatus,
            };
            return { products: updatedProducts };
        },
    };
    await initStore(actions);
};

export default configureStore;
