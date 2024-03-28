import {useLoaderData} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';


export function ItamPage() {
    const {
        image,
        title,
        description,
    } = useLoaderData();
    return (
        <>
            <Menu/>
            <MainContent>
                <img src={image} alt={`${title} photo`}/>
                <h1>{title}</h1>
                <div>{description}</div>
            </MainContent>
        </>
    );
}
