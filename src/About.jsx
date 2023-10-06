import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import myImage from "D:/coding/New/react-app/src/image2.png"

export default function About() {
    return (
        <div className="about">
            <div>
                <nav className="navbar">
                    <Link className="nav-title" to="/">#VANLIFE</Link>
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/Vans" className="nav-links">Vans</Link>
                </nav>
            </div>

            <div>
                <img src={myImage} className="about-img" />
            </div>
            <div className="about-content">
                <div className="about-info">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p> Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="about-vans">
                    <h2 className="about-vans-text">Your destination is waiting. Your van is ready.</h2>
                    <Link className="about-btn" to="/vans">Explore your vans</Link>
                </div>
            </div>
            <div>
                <footer className="foot">
                    @2023 #VANLIFE
                </footer>
            </div>
        </div>

    )
}