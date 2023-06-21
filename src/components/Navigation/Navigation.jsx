import React from "react";
import SidebarMenu from "../SideBar/Sidebar";
import './Navigation.css'
import Card from "../CardComponent/Card";
import Footer from "../Footer/Footer";
import Carousel from "../Slider/Carousel";


export default function NavBar({ title }) {
    return (
        <>
            <div className="nav-container">
                <SidebarMenu />
                <input type="text" className="searchbar"/>
                <h1 className="nav-logo">{title}</h1>
            </div>
            <Carousel />
            <Card />
            <Footer />
        </>
    )
}