import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {CatalogPage} from '../pages/CatalogPage';
import {HomePage} from '../pages/HomePage';
import {ItemPage} from '../pages/ItemPage';
import {fetchUser} from '../store/slices/user';
import {store} from '../store/store';
import {loadCarsList} from '../api/loadCarsList';
import {loadCarItem} from '../api/loadCarsItem';
import {loginAction} from './loginAction';
import {Layout} from './Layout';
import {ErrorBoundary} from '../components/ErrorBoundary/ErrorBoundary';

export function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Layout/>,
            loader: () => {
                void store.dispatch(fetchUser());
                return null;
            },
            children: [
                {
                    path: '/',
                    element: <HomePage/>,
                    action: loginAction,
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/catalog',
                    element: <CatalogPage/>,
                    loader: loadCarsList,
                    action: loginAction,
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/catalog/:itemId',
                    element: <ItemPage/>,
                    loader: async ({params}) => {
                        const data = await loadCarItem(params.itemId as string);
                        return data;
                    },
                    action: loginAction,
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
                    action: loginAction,
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
