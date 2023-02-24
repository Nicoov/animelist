import React from "react";
import '../Styles/card.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AnimeList = ({ anime }) => {
    console.log(anime)
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

    return (
        <>
            <div className="title-season-anime">
                <p>New season anime</p>
            </div>
            <Slider {...settings}>
                {

                    anime?.map((anime, index) => (
                        <>
                            <div className="card" key={index}>
                                <img src={anime.images.jpg.large_image_url}></img>
                                <h1>{anime.title}</h1>
                                {/* <div className="card-bottom">
                                    <p>{anime.episodes}</p>
                                </div> */}
                            </div>

                        </>

                    ))
                }
            </Slider>
        </>


    )
}