import {useLoaderData} from 'react-router-dom';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';
import type {CarItemData} from '../api/types';


export function CatalogPage() {
    const galleryItems = useLoaderData() as CarItemData[];
    return (
        <>
            <Menu/>
            <MainContent>
                <CatalogContent galleryItems={galleryItems}/>
            </MainContent>
        </>
    );
}
