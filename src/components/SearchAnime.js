export default function animesearch({ search }) {
    return (

        <>
            {
                search?.map((se) => (
                    <div className="card">
                        <img src={se.images.jpg.large_image_url}></img>
                        <h1>{se.title}</h1>
                    </div>
                ))
            }

        </>

    )
}