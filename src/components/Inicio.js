import { useState, useEffect } from "react";
import { AnimeList } from "../components/AnimeList";
import Header from "./Header";
import '../Styles/inicio.css'


function Inicio() {

    const [listAnime, setListAnime] = useState([])

    const getAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/seasons/now`);
        const resData = await temp.json();
        setListAnime(resData.data)
        console.log(resData.data)
    };

    useEffect(() => {
        getAnime()
    }, [])


    return (
        <>
            <div><Header /></div>
            <div className="anime-container">

                <AnimeList
                    anime={listAnime}
                />
            </div>
        </>

    )


}


export default Inicio;