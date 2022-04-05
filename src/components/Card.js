import Location from '../images/Location.svg';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt={props.item.title} className="card__img" />
            <div className="card__body">
                <p className="card__country"><img src={Location} alt="" className="card__location-icon"/>{props.item.location}</p>
            </div>
        </div>
    )
}

export default Card;