import React from 'react';
import "./RightSide.css"

export const RightSide = ({ children }) => {
    return (
        <div className={"right-side"}>
            {children}
        </div>
    );
};