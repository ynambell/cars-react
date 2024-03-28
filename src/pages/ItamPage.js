import {useLoaderData} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';


export function ItamPage() {
    const {
        image,
        title,
        description,
    } = useLoaderData();
    return (
        <MainContent>
            <img src={image} alt={`${title} photo`}/>
            <h1>{title}</h1>
            <div>{description}</div>
        </MainContent>
    );
}
