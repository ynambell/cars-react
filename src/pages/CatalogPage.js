import {useLoaderData} from 'react-router-dom';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';
import {MainContent} from '../components/MainContent/MainContent';


export function CatalogPage() {
    const galleryItems = useLoaderData();
    return (
        <MainContent>
            <CatalogContent galleryItems={galleryItems}/>
        </MainContent>
    );
}
