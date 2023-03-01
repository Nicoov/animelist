import { useState, useEffect } from "react";
import '../Styles/reviews.css'

export default function Reviews() {

    const [reviewsAnime, setReviewsAnime] = useState([]);

    const getReviewsAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/recommendations/anime`
        ).then((res) => res.json());
        setReviewsAnime(temp.data?.slice(0, 2));

    }


    useEffect(() => {
        getReviewsAnime()
    }, [])

    return (
        <>

            <div className="title-season-anime">
                <p>Nuevas recomendaciones</p>
            </div>
            {reviewsAnime?.map((re) => (
                <div className="container-review">
                    <div className="inner">
                        <div className="row">
                            <div className="col">
                                <div className="testimonial">
                                    <div className="name">by {re?.user?.username}</div>
                                    {
                                        re?.entry?.map((anime) => (
                                            <div className="stars">{anime?.title}</div>
                                        ))
                                    }

                                    <p>
                                        {re?.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </>



    )

}