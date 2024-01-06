import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../context/ParentContext';
import BeatLoader from "react-spinners/BeatLoader";

const Books = () => {
    const [data, setData] = useState([]);
    const { search, signup } = useContext(AppContext)
    const [fetchDone, setFetchDone] = useState(true)
    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
            .then(res => {
                setData(res.data.books)
                setFetchDone(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (

        <div>
            {signup?"":<h1 id='blur-msg'>SIGNUP TO VIEW THE CONTENT</h1>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", padding: "50px 150px", gap: "30px", backgroundColor: "#FEFEF6", filter: signup ? "none" : "blur(5px)" }} id='books-container'>
                {console.log(search)}
                {fetchDone ? <BeatLoader color="red" size={"50px"} id='loader' /> : data.filter((e) => {
                    return e.title.toLowerCase().includes(search.toLowerCase())
                }).length != 0 ? data.filter((e) => {
                    return e.title.toLowerCase().includes(search.toLowerCase())
                }).map((e, i) => {
                    const { averageRating } = e
                    return <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", textAlign: "center", border: "solid 2px black", padding: "7px", backgroundColor: "white" }} id='card'>
                        <img src={e.imageLinks.smallThumbnail} alt="img" />
                        <h4 style={{ width: "60%" }}>{e.title}</h4>
                        <div style={{ display: "flex", justifyContent: "space-evenly", width: "60%", alignItems: "center", fontSize: "medium" }}>
                            <p >{averageRating ? averageRating : 3}⭐</p>
                            <p>Free</p>
                        </div>
                    </div>
                }) : (<h1 id='result-none'>No Results</h1>)}
            </div>
        </div>

    )
}

export default Books
