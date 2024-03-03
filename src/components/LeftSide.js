import React from "react";
import "./LeftSide.css"
import { Sidebar } from 'react-pro-sidebar';
export const LeftSide = ({ children }) => {
    return (
        <Sidebar className={"left-side"}>
            {children}
        </Sidebar>
    );
}