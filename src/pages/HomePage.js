import {Link} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';

export function HomePage() {
    return (
        <>
            <Menu/>
            <MainContent>
                <Link to="/catalog">Go to catalog</Link>;
            </MainContent>
        </>
    );
}

