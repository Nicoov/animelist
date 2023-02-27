import React from "react"
import { NavLink } from "react-router-dom"


export default function animesearch({ search }) {
    console.log(search)
    return (
        <>
            {
                search?.map((se) => (
                    <div className="card">
                        <NavLink
                            key={`${se.mal_id}-link`}
                            to={`/anime/${se.mal_id}` && `/anime/${se.mal_id}`}
                        >
                            <img src={se.images.jpg.large_image_url}></img>
                            <h1>{se.title}</h1>
                        </NavLink>

                    </div>
                ))
            }

        </>

    )
}