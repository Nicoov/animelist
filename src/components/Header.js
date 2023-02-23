import '../Styles/header.css'

export default function Header() {
    return (
        <div className="header-container">
            <h1>Animes</h1>
            <div className='header-search'>
                <input type='search' placeholder='Busca tus animes'></input>
            </div>
        </div>
    );


}