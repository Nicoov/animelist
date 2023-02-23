import { useEffect, useState } from 'react';
import '../Styles/header.css'

export default function Header() {

    const [imageAnime, setImageAnime] = useState([])

    const getImageAnime = async () => {
        const image = await fetch('https://api.jikan.moe/v4/anime/30/pictures');
        const resImage = await image.json();
        setImageAnime(resImage.data[0])
    };

    useEffect(() => {
        getImageAnime()
    }, [])

    // const imagen = imageAnime[0]

    // console.log(imageAnime)


    return (
        <>
            <div className="header-container">
                <h1>Animes</h1>
                <div className='header-search'>
                    <input type='search' placeholder='Busca tus animes'></input>
                </div>
            </div>
            <div className='imagen-container'>
                {/* <img src={imageAnime.jpg.large_image_url}></img> */}
            </div>

        </>
    );


}