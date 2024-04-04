import './MainContent.scss';

interface MainContentProps extends React.HTMLProps<HTMLDivElement> {
}

export function MainContent({
    children,
}: MainContentProps) {
    return (
        <div className='MainContent'>
            {children}
        </div>
    );
}
