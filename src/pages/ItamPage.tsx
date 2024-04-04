import {useLoaderData} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';
import type {CarItemData} from '../api/types';
import {useAppSelector} from '../store/hooks';


export function ItamPage() {
    const {
        id,
        image,
        title,
        description,
    } = useLoaderData() as CarItemData;

    const isFavorite = useAppSelector((state) => (state.favorites.includes(id)));

    return (
        <>
            <Menu/>
            <MainContent>
                <img src={image} alt={`${title} photo`}/>
                <h1>{title} {isFavorite && <small>(favorite!)</small>}</h1>
                <div>{description}</div>
            </MainContent>
        </>
    );
}
