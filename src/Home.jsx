import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import myImage from "D:/coding/New/react-app/src/image.png"

export default function Home() {
    return (
        <div className="home">
            <div>
                <nav className="navbar">
                    <Link className="nav-title" to="/">#VANLIFE</Link>
                    <Link to="/About" className="nav-links">About</Link>
                    <Link to="/Vans" className="nav-links">Vans</Link>
                </nav>
            </div>
            <div className="image">
                <h1 className="img-head-text">You got the travel plans, we got the travel vans.</h1>
                <p className="img-para-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link className="img-btn" to="/vans">Find Your Van</Link>
            </div>
            <div>
                <footer className="foot-home">
                    @2023 #VANLIFE
                </footer>
            </div>
        </div>

    )
}