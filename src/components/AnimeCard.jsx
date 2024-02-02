export function AnimeCard(props){
    return (
        <div className="anime_card">
            <img src={props.data.images.jpg.image_url} alt="aaaa" />
            <h1>{props.data.title}</h1>
            <button>watch</button>
            <a href={props.data.url}>learn more</a>
        </div>
    )
}