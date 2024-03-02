"use client"

import React from "react";
import "./Blockchain.css"
import styles from './MilestoneTimeline.module.css'
import { Chrono } from "react-chrono";

const MilestoneTimeline = () => {
    

    const items = [
    {
        title: "October 2023",
        cardTitle: "Gain knowledge about blockchain",
        cardSubtitle: "We tried to gain knowledge about web3 concepts",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <ul>
        <li>
            Done researchs about Blockchain, Solana, smart contracts etc.
        </li>
        <li>
            Research results about topics above added to a website and deployed.
        </li>
        <li>
            Solana SDK, Rust, cargo and nodejs installed on devices for development
        </li>
    </ul>,
    },
    {
        title: "November 2023",
        cardTitle: "Solana Fork",
        cardSubtitle:
          "",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <ul></ul>,
    },{
        title: "December 2023",
        cardTitle: "Solana Test-Token creation",
        cardSubtitle:
          "",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent:  <div>
        <li>
            Created account on private server.
        </li>
        <li>
            After acount is created, minted token by its creator with 
            desired amount and given to specific user
        </li>
        <li>
            Solana SDK, Rust, cargo and nodejs installed on devices for development
        </li>
    </div>,
    },
    

    {
        title: "March 2024",
        cardTitle: "Solana Benchmark",
        cardSubtitle:
          "",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <ul></ul>,
    },{
        title: "April 2024",
        cardTitle: "Solana Multiserver",
        cardSubtitle:
          "",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <ul></ul>,
    },{
        title: "May 2024",
        cardTitle: "Solana Visualization",
        cardSubtitle:
          "",
        cardDetailedText: ["paragraph1", "paragraph2"],
        timelineContent: <ul></ul>,
    },
    
    ]


    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <Chrono items={items} mode="VERTICAL_ALTERNATING" />
            </div>
        </>
    )
}

export default MilestoneTimeline;