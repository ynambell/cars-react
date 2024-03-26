import React from 'react';
import './Button.css';
import clsx from 'clsx';

export function Button({
    text,
    auxClass = '',
}) {
    return <div className={clsx([['Button', auxClass]])}>{text}</div>;
}
