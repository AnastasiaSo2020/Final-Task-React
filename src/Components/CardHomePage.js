import getCardHome from "../API/getCardHome";
import CardHome from "./CardHome";
import '../Components/main.css'

function CardHomePage() {

    const cards = getCardHome();
    const items = [];

    for (const index in cards) {
        const cardItem = cards[index];
        items.push(
            <div className="col">
                <CardHome title={cardItem.title} image={cardItem.image} description={cardItem.description} button={cardItem.button} path={cardItem.path}/>
            </div>
        )
    }

    return (
        <div className="container cardHomePage-card-location">
            <div className="row">
            {items}
            </div>
        </div>
    )
}

export default CardHomePage