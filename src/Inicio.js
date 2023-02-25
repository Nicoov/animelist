import { useState, useEffect } from "react";
import { AnimeList } from "./components/AnimeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Search from "./components/SearchAnime"


import './Styles/inicio.css'



function Inicio() {

    const [listAnime, setListAnime] = useState([])
    const [searchAnime, setSearchAnime] = useState("")
    const [animeData, setAnimeData] = useState([])


    // const getAnime = async () => {
    //     const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`);
    //     const resData = await temp.json();
    //     setListAnime(resData.data)
    // };

    const getAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`).then((res) => res.json());
        setListAnime(temp.data)
    }

    const getSearch = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw`).then((res) => res.json());
        setAnimeData(temp.data)
    }


    const handleSearch = (e) => {
        e.preventDefault();
        getSearch(searchAnime)
    }

    console.log(animeData)

    useEffect(() => {
        getAnime()
    }, [])


    return (
        <>
            <div><Header search={searchAnime} setSearchAnime={setSearchAnime} handleSearch={handleSearch}/></div>
            <div className="anime-container"><AnimeList anime={listAnime} /></div>
            <div className="reviews-container"><Reviews /></div>
            <div className="animesearch-container"><Search search={animeData}  /></div>
            <div className="footer-container"><Footer /></div>
        </>

    )


}


export default Inicio;