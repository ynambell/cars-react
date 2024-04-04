import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {CatalogPage} from '../pages/CatalogPage';
import {HomePage} from '../pages/HomePage';
import {ItamPage} from '../pages/ItamPage';
import type {RootState} from '../store/store';
import {store} from '../store/store';
import {loadCarsList} from '../api/loadCarsList';
import {loadCarItem} from '../api/loadCarsItem';

export function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: '/catalog',
            element: <CatalogPage/>,
            loader: loadCarsList,
        },
        {
            path: '/catalog/:itemId',
            element: <ItamPage/>,
            loader: async ({params}) => {
                const data = await loadCarItem(params.itemId as string);
                return data;
            },
        },
        {
            path: '/favorites',
            element: <CatalogPage/>,
            loader: async () => {
                const {favorites} = store.getState() as RootState;
                const data = await loadCarsList();
                return data.filter(({id}) => (favorites.includes(id)));
            },
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
