import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "About", path: "/about" },
        { id: 3, title: "Services", path: "/services" },
        { id: 4, title: "Contact", path: "/contact" }
    ];

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            {/* <div className="sidebar-header">
                <button className="close-button" onClick={onClose}>
                    {isOpen ? "×" : "☰"}
                </button>
            </div> */}
            <ul className="menu-items">
                {menuItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.path} onClick={onClose}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <Router>
            <div className="app">
                <Sidebar isOpen={isOpen} onClose={closeSidebar} onScroll={closeSidebar } />
                <div className="content">
                    <header className="header">
                        <button className={isOpen ? "close-button":"hamburger"} onClick={toggleSidebar}>
                            {isOpen ? "×" : "☰"}
                        </button>
                    </header>
                    <Routes>
                        <Route path="/" exact render={() => <h1>Home Page</h1>} />
                        <Route path="/about" render={() => <h1>About Page</h1>} />
                        <Route path="/services" render={() => <h1>Services Page</h1>} />
                        <Route path="/contact" render={() => <h1>Contact Page</h1>} /></Routes>
                </div>
            </div>
        </Router>
    );
}
