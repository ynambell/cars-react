import {RouterProvider, createHashRouter} from 'react-router-dom';
import {CatalogPage} from '../pages/CatalogPage';
import {HomePage} from '../pages/HomePage';
import {processItemData} from '../helpers/processItemData';
import {ItamPage} from '../pages/ItamPage';

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
                return data.map(processItemData);
            },
        },
        {
            path: '/catalog/:itemId',
            element: <ItamPage/>,
            loader: async ({params}) => {
                const res = await fetch(`${apiUrl}/${params.itemId}`);
                const data = await res.json();
                return processItemData(data);
            },
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}
