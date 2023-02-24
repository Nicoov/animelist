import { useState, useEffect } from "react";
import { AnimeList } from "./components/AnimeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";


import './Styles/inicio.css'



function Inicio() {

    const [listAnime, setListAnime] = useState([])
    

    // const getAnime = async () => {
    //     const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`);
    //     const resData = await temp.json();
    //     setListAnime(resData.data)
    // };

    const getAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`).then((res) => res.json());
        setListAnime(temp.data)
        console.log(temp.data)
    }


    useEffect(() => {
        getAnime()
    }, [])


    return (
        <>
            <div><Header /></div>
            <div className="anime-container"><AnimeList anime={listAnime}/></div>
            <div className="reviews-container">
                <Reviews />
            </div>
            <div className="footer-container"><Footer /></div>

        </>

    )


}


export default Inicio;