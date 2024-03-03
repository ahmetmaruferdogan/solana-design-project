"use client"

import React, {useState, ReactNode} from "react";
import {LeftSide} from "../components/LeftSide";
import {RightSide} from "../components/RightSide";
import "./BlockchainContents.css"
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {staticDataBlockchain} from "../extensions/StaticDataBlockchain";
import {Data1_1} from "../explanations/blockchain/1_1";
import NavigationBar from "../components/NavigationBar";

const BlockchainContents = () => {
    const [selectedText, setSelectedText] = useState<ReactNode>(Data1_1);
    return (
        <>
            <NavigationBar/>
            <div className={"main"}>
                <LeftSide>
                    <Menu>
                        {
                            staticDataBlockchain.map((item, i) => (
                                item.content.length > 1 ? (
                                    <SubMenu key={i} label={i + ". " + item.title}>
                                        {
                                            item.content.map((subItem, j) => (
                                                    <MenuItem key={`${i}-${j}`} onClick={() => setSelectedText(subItem.content)}>
                                                        <div>{i + "." + j + " - " + subItem.title}</div>
                                                    </MenuItem>
                                                )
                                            )
                                        }
                                    </SubMenu>
                                    )
                                    : (
                                        <MenuItem key={i} onClick={() => setSelectedText(item.content[0].content)}>
                                            <div>{i + " - " + item.title}</div>
                                        </MenuItem>
                                    )
                            ))
                        }
                    </Menu>

                </LeftSide>
                <RightSide>
                    {selectedText}
                </RightSide>
            </div>
        </>
    )
}

export default BlockchainContents;