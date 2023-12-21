import React from 'react';
import '../styes.css';
export const Button = (props) => {
    const { children } = props;
    return (React.createElement("button", Object.assign({}, props, { className: " bg-slate-900" }), children));
};
//# sourceMappingURL=Button.js.map