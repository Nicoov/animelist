import React from "react"
import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom"


export default function Animesearch() {

    const [params] = useSearchParams();
    const [animeData, setAnimeData] = useState([])
    const searchAnime = params.get(`searchAnime`)
    const [error, setError] = useState('')

    const getSearch = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${searchAnime}&sfw`).then((res) => res.json());
        setAnimeData(temp.data)
    }

    useEffect(() => {
        getSearch()
    }, [])

    console.log(animeData)

    return (
        <>
            {
                animeData?.length !== 0 ? animeData?.map((se) => (
                    <div className="card">
                        <NavLink
                            key={`${se.mal_id}-link`}
                            to={`/anime/${se.mal_id}` && `/anime/${se.mal_id}`}
                        >
                            <img src={se.images.jpg.large_image_url}></img>
                            <h1>{se.title}</h1>
                        </NavLink>

                    </div>
                )) : <div><p>No existe</p></div>

            }

        </>

    )
}