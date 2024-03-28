import {RouterProvider, createHashRouter} from 'react-router-dom';
import {CatalogPage} from '../CatalogPage/CatalogPage';
import './App.scss';
import {HomePage} from '../HomePage/HomePage';

export function App() {
    const apiUrl = 'https://660247539d7276a75552f2f5.mockapi.io/cars/list';
    const router = createHashRouter([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: '/catalog',
            element: <CatalogPage/>,
            loader: async () => {
                const res = await fetch(apiUrl);
                const data = await res.json();
                return data;
            },
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}
