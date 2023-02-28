import { useState, useEffect } from "react";
import { AnimeList } from "./components/AnimeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Search from "./components/SearchAnime";
import Top from "./components/TopAnime";
import { useNavigate } from "react-router-dom";


import './Styles/inicio.css'



function Inicio() {

    const [listAnime, setListAnime] = useState([]);
    const [searchAnime, setSearchAnime] = useState("");
    const [animeData, setAnimeData] = useState([]);
    const [topAnime, setTopAnime] = useState([]);


    const navigate = useNavigate();


    const getAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`).then((res) => res.json());
        setListAnime(temp.data)
    }

    // const getSearch = async (searchAnime) => {
    //     const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw`).then((res) => res.json());
    //     setAnimeData(temp.data)
    // }

    const getTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) => res.json());
        setTopAnime(temp.data)
    }


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/cartas?searchAnime=${searchAnime}`)

    }

    console.log(topAnime)

    useEffect(() => {
        getAnime()
        getTopAnime()
    }, [])


    return (
        <>
            <div><Header search={searchAnime} setSearchAnime={setSearchAnime} handleSearch={handleSearch} /></div>
            <div className="anime-container"><AnimeList anime={listAnime} /></div>
            <div className="top-anime-container"><Top top={topAnime} /></div>
            <div className="reviews-container"><Reviews /></div>
            <div className="footer-container"><Footer /></div>
        </>

    )


}


export default Inicio;