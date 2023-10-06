import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { makeServer } from "./server";

export default function Vans() {
    if (process.env.NODE_ENV === 'development') {
        makeServer({ environment: 'development' });
    }

    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    console.log(vans)
    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <img className="van-img" src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))



    return (
        <div>
            <div>
                <nav className="navbar">
                    <Link className="nav-title" to="/">#VANLIFE</Link>
                    <Link to="/About" className="nav-links">About</Link>
                    <Link to="/Vans" className="nav-links">Vans</Link>
                </nav>
            </div>
            <div className="van-list-container">
                <h1 className="vans-text">Explore our van options</h1>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )
}