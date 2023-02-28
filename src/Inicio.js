import { useState, useEffect } from "react";
import { AnimeList } from "./components/AnimeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Search from "./components/SearchAnime"
import { Link, useNavigate, useParams } from "react-router-dom";


import './Styles/inicio.css'



function Inicio() {

    const [listAnime, setListAnime] = useState([])
    const [searchAnime, setSearchAnime] = useState("")


    const navigate = useNavigate();


    const getAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`).then((res) => res.json());
        setListAnime(temp.data)
    }

    // const getSearch = async (searchAnime) => {
    //     const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw`).then((res) => res.json());
    //     setAnimeData(temp.data)
    // }


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/cartas?searchAnime=${searchAnime}`)

    }


    useEffect(() => {
        getAnime()
    }, [])


    return (
        <>
            <div><Header search={searchAnime} setSearchAnime={setSearchAnime} handleSearch={handleSearch} /></div>
            <div className="anime-container"><AnimeList anime={listAnime} /></div>
            <div className="reviews-container"><Reviews /></div>
            <div className="footer-container"><Footer /></div>
        </>

    )


}


export default Inicio;