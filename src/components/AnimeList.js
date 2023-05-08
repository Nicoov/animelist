import React from "react";
import '../Styles/card.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export const AnimeList = ({ anime }) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    console.log(anime)

    return (
        <>
            <div className="title-season-anime">
                <h1>Nueva temporada de anime</h1>
            </div>
            <Slider {...settings}>
                {

                    anime?.map((anime, index) => (
                        <>
                            <div className="card" key={index}>
                                <NavLink
                                    key={`${anime.mal_id}-link`}
                                    to={`/anime/${anime.mal_id}` && `/anime/${anime.mal_id}`}
                                >
                                    <img src={anime.images.jpg.large_image_url}></img>
                                    <p>{anime.title}</p>
                                </NavLink>
                            </div>

                        </>

                    ))
                }
            </Slider>
        </>


    )
}