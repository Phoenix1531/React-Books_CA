import { React, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/ParentContext'

const Navbar = () => {
    const { setSearch, signup } = useContext(AppContext)

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            padding: "40px 0",
            backgroundImage: "url(https://kalvium.community/images/livebooks_grid_tablet.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "55vw",
            backgroundColor: "#423653"
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="kalvi logo" />
                <h1 id='logo'>Kalvium Books</h1>
            </div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" style={{ width: "40%", height: "40px", border: "none", padding: "20px 20px", fontSize: "large", outline: "none" }}
                placeholder='🔍   Search Books....' />
            {signup ? "" : <Link to="/form">
                <button style={{ fontSize: "large", padding: "10px 20px", cursor: "pointer" }} id='register'> Signup</button>
            </Link>}

        </div>
    )
}

export default Navbar