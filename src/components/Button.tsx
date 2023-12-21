import React from 'react';
import '../styes.css';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children } = props;

    return (
        <button {...props} className=" bg-slate-900 text-white">
            {children}
        </button>
    );
};
