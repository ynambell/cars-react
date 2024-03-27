import {useEffect, useState} from 'react';
import {CatalogContent} from '../CatalogContent/CatalogContent';
import './App.css';

export function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    const apiUrl = 'https://demo5394722.mockable.io/cars';

    useEffect(() => {
        fetch('')
            .then((res) => (res.json()))
            .then((data) => {
                setGalleryItems(data);
            });
    }, [apiUrl]);

    return (
        <CatalogContent galleryItems={galleryItems}/>
    );
}
