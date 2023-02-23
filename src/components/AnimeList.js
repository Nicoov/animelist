import React from "react";
import '../Styles/card.css'

export const AnimeList = ({ anime }) => {
    return (
        <>
            {
                anime.map((anime, index) => {
                    return (
                            <div className="card">
                                <img src={anime.images.jpg.large_image_url}></img>
                                <p>{anime.title}</p>
                            </div>
                    )
                })
            }
        </>

    )
}