import {Outlet, useNavigation} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';
import {Menu} from '../components/Menu/Menu';
import {Loading} from '../components/Loading/Loading';

export function Layout() {
    const navigation = useNavigation();
    const isLoading = (navigation.state === 'loading');

    return (
        <>
            <Menu/>
            <MainContent>
                {isLoading ? <Loading/> : <Outlet/>}
            </MainContent>
        </>
    );
}
