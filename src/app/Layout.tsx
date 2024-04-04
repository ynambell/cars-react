import {Outlet} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';

export function Layout() {
    return (
        <>
            <Menu/>
            <MainContent>
                <Outlet/>
            </MainContent>
        </>
    );
}
