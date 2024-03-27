import './Button.scss';
import clsx from 'clsx';

export function Button({
    text,
    auxClass = '',
    ...props
}) {
    return (
        <div
            className={clsx([['Button', auxClass]])}
            {...props}
        >
            {text}
        </div>
    );
}
