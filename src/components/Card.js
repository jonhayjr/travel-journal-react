import Location from '../images/Location.svg';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt={props.item.title} className="card__img" />
            <div className="card__body">
                <div className="card__body-top">
                    <img src={Location} alt="" className="card__location-icon"/>
                    <span className="card__country">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer" className="card__google-maps-link">View on Google Maps</a>
                </div>
                <h2 className="card__title">{props.item.title}</h2>
                <p className="card__date-range">{props.item.startDate}-{props.item.endDate}</p>
                <p className="card__description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card;