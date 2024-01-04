import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const [activeTab, setActiveTab] =  useState("Home"); 
    const location =useLocation(); 
    
    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("Home");
        }else if(location.pathname === "/add"){
            setActiveTab("AddEdit");
        }else if (location.pathname === "/about"){
            setActiveTab("About");
        }
      }, [location]); 


    return (
    <div className='header'>
        <p className="logo">Application de contact (HETIC)</p>
        <div className='header-right'>

            <Link to="/">
                <p 
                className={`${activeTab === "Home" ? "active" : ""}`}
                 onClick={() => setActiveTab("Home")}
                 >
                 Accueil
                </p>
            </Link>

            <Link to="/add">
                <p 
                className={`${activeTab === "AddEdit" ? "active" : ""}`}
                 onClick={() => setActiveTab("AddEdit")}
                 >
                 Ajouter un contact
                </p>
            </Link>
            <Link to="/about">
                <p 
                className={`${activeTab === "About" ? "active" : ""}`}
                 onClick={() => setActiveTab("About")}
                 >
                 À propos
                </p>
            </Link>
            <Link to="/Home2">
                <p 
                className={`${activeTab === "Home2" ? "active" : ""}`}
                 onClick={() => setActiveTab("Home2")}
                 >
                Firestore
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Header