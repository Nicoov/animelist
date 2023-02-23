import { useState, useEffect } from "react";
import '../Styles/reviews.css'

export default function Reviews() {

    const [reviewsAnime, setReviewsAnime] = useState([]);

    const getReviewsAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/recommendations/anime`
        ).then((res) => res.json());

        setReviewsAnime(temp.data?.slice(0, 5));
        console.log(temp.data)

    }


    // reviewsAnime[0].entry.map((e) => {
    //     console.log(e)
    // })


    useEffect(() => {
        getReviewsAnime()
    }, [])

    return (

        <>
            {
                reviewsAnime.map((rev) => {
                    return (
                        <>
                            <div className="reviews-box-container">
                                <div className="reviews-box">
                                    <div className="box-top">
                                        <div className="profie">
                                            <div className="anime-img">
                                                {
                                                    rev.entry.map((e) => {
                                                        return (
                                                            <>
                                                                <img src={e.images.jpg.small_image_url}></img>
                                                                <div className="reviews">
                                                                    <a>{e.title}</a>
                                                                </div>
                                                            </>

                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className="user-name">
                                                <strong>{rev.user.username}</strong>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="user-comment">
                                        <p>{rev.content}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>



    )

}