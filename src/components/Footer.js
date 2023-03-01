import '../Styles/footer.css'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai'

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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="red-social">
                        <a href="#"><AiFillFacebook /></a>
                        <a href="#"><AiFillTwitterSquare /></a>
                        <a href="#"><AiOutlineInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023 <b>Animes</b> Todos los derechos reservado</small>
            </div>
        </>

    )
}