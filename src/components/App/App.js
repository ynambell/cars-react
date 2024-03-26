import React, {useEffect, useState} from 'react';
import {CatalogContent} from '../CatalogContent/CatalogContent';
import './App.css';
import data from './data.json';

export function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        setGalleryItems(data);
    }, [data]);

    // const apiUrl = 'https://demo5394722.mockable.io/cars';
    // useEffect(() => {
    //     fetch('')
    //         .then((res) => (res.json()))
    //         .then((data) => {
    //             setGalleryItems(data);
    //         });
    // }, [apiUrl]);

    return (
        <CatalogContent galleryItems={galleryItems}/>
    );
}
