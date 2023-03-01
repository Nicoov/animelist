import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/animeinfo.css'
import Header from '../components/Header'
import Footer from "../components/Footer";

function AnimeInfo() {

    const { id } = useParams();
    const [anime, setAnime] = useState([]);
    const [personajes, setPersonajes] = useState([]);

    const fetchAnime = async (id) => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${id}`).then(
            (res) => res.json()
        );
        setAnime(temp.data);
    };

    const fetchPersonajes = async (anime) => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/anime/${anime}/characters`
        ).then((res) => res.json());

        setPersonajes(temp.data?.slice(0, 10))
    }


    useEffect(() => {
        if (id) {
            fetchAnime(id)
            fetchPersonajes(id)
        }
    }, [id])



    return (
        <>
            <Header />
            <div className="anime-info-container">
                <div className="title-info">
                    {anime?.title}
                </div>
                <div className="anime-info">
                    <div className="left-info">
                        <img alt="anime" src={anime?.images?.jpg?.large_image_url}></img>
                        <h2>Titulos alternativos</h2>
                        <span>{anime?.title_english || anime?.title_japanese}</span>
                        <h2>Información</h2>
                        <div className="container-info">
                            <div>
                                <span>Type: {anime?.type}</span>
                            </div>
                            <div>
                                <span>Episopdios: {anime?.episodes}</span>
                            </div>
                            <div>
                                <span>Status: {anime?.status}</span>
                            </div>
                            <div>
                                <span>Aired: {anime?.aired?.string}</span>
                            </div>
                            <div>
                                <span>Premiered: {anime?.season}</span>
                            </div>
                            <div>
                                <span>Broadcast: {anime?.broadcast?.day}</span>
                            </div>
                            <div>
                                Producers:
                                {anime?.producers?.map((e) => (
                                    <span>{e?.name}</span>
                                ))}

                            </div>
                            <div>
                                <span>Licensors:</span>
                                {anime?.licensors?.map((e) => (
                                    <span>{e?.name}</span>
                                ))}
                            </div>
                            <div>
                                <span>Studios:</span>
                                {anime?.studios?.map((e) => (
                                    <span>{e?.name}</span>
                                ))}
                            </div>
                            <div>
                                <span>Source: {anime?.source}</span>
                            </div>
                            <div>
                                <span>Generes: </span>
                                {anime?.genres?.map((e) => (
                                    <span>{e?.name}</span>
                                ))}
                            </div>
                            <div>
                                <span>Duration: {anime?.duration}</span>
                            </div>
                            <div>
                                <span>Rating: {anime?.rating}</span>
                            </div>
                        </div>
                        <h2>Estadisticas</h2>
                        <div className="container-statistics">
                            <div>
                                <span>Score: {anime?.score}</span>
                            </div>
                            <div>
                                <span>Ranked: {anime?.rank}</span>
                            </div>
                            <div>
                                <span>Popularity: {anime?.popularity}</span>
                            </div>
                            <div>
                                <span>Members: {anime?.members}</span>
                            </div>
                            <div>
                                <span>Favority: {anime?.favorites}</span>
                            </div>
                        </div>


                    </div>
                    <div className="right-info">
                        <div className="container-stadistics">
                            <div>
                                <span>Score: {anime?.score}</span>
                            </div>
                            <div>
                                <span>Ranked #{anime?.rank}</span>
                            </div>
                            <div>
                                <span>Popularity #{anime?.popularity}</span>
                            </div>
                            <div>
                                <span>Members: {anime?.members}</span>
                            </div>


                        </div>
                        <h2>Sinopsis</h2>
                        <p> {anime.synopsis ? anime.synopsis : <p>No existe 😞</p>}</p>
                        <h2>Personajes</h2>
                        <div className="container-personajes">
                            {
                                personajes?.map((item) => (
                                    <div className="personajes">
                                        <span>{item?.character?.name}</span>
                                        <div>
                                            <img
                                                width="150"
                                                height="200"
                                                alt="personajes"
                                                src={item.character.images.jpg.image_url}>

                                            </img>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="container-trailer">
                            {
                                anime?.trailer?.embed_url ? (
                                    <div className="trailer-section">
                                        <h1 className="title">Trailer</h1>
                                        <div align="center">
                                            <iframe
                                                id="inlineFrameExample"
                                                title="Inline Frame Example"
                                                width="1000"
                                                height="500"
                                                src={anime?.trailer?.embed_url}
                                            ></iframe>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container"><Footer /></div>
        </>
    )
}

export default AnimeInfo;