import React from "react";
import {Link} from "react-router-dom";


export const Dashboard = () => {
    return (
        <>
        <div>
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
        <div><Link to="/display">View Display</Link></div>
        </>
    )
}