import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {CatalogPage} from '../pages/CatalogPage';
import {HomePage} from '../pages/HomePage';
import {ItemPage} from '../pages/ItemPage';
import {store} from '../store/store';
import {loadCarsList} from '../api/loadCarsList';
import {loadCarItem} from '../api/loadCarsItem';
import {Layout} from './Layout';
import {ErrorBoundary} from '../components/ErrorBoundary/ErrorBoundary';

export function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <HomePage/>,
                },
                {
                    path: '/catalog',
                    element: <CatalogPage/>,
                    loader: loadCarsList,
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/catalog/:itemId',
                    element: <ItemPage/>,
                    loader: async ({params}) => {
                        const data = await loadCarItem(params.itemId as string);
                        return data;
                    },
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/favorites',
                    element: <CatalogPage/>,
                    loader: async () => {
                        const {favorites} = store.getState();
                        const data = await loadCarsList();
                        return data.filter(({id}) => (favorites.includes(id)));
                    },
                    errorElement: <ErrorBoundary/>,
                },
            ],
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
