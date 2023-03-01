import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../Styles/header.css'



export default function Header(props) {

    const [imageAnime, setImageAnime] = useState([])
    const [params] = useSearchParams();
    const id = params.get(`idAnime`)

    const getImageAnime = async () => {
        const image = await fetch('https://api.jikan.moe/v4/anime/30/pictures');
        const resImage = await image.json();
        setImageAnime(resImage.data[0])
    };

    useEffect(() => {
        getImageAnime()
    }, [])



    return (
        <>
            <div className="header-container">
                <h1>Animes</h1>
                <div className='header-search'>
                    <form
                        onSubmit={props.handleSearch}
                    >

                        <input type='search' value={props.search} onChange={(e) => props.setSearchAnime(e.target.value)} placeholder='Busca tus animes'></input>
                    </form>
                </div>
            </div>
            <div className='imagen-container'>
                {/* <img src={imageAnime.jpg.large_image_url}></img> */}
            </div>

        </>
    );


}