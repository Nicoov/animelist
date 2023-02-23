import '../Styles/footer.css'
import { AiFillFacebook , AiFillTwitterSquare, AiOutlineInstagram} from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#"></a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsu</p>
                </div>
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="red-social">
                        <a href="#"><AiFillFacebook /></a>
                        <a href="#"><AiFillTwitterSquare /></a>
                        <a href="#"><AiOutlineInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023 <b>Animes</b> Todos los derechos reservado</small>
            </div>
        </>

    )
}