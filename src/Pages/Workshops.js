
import getWorkshopCard from "../API/getWorkshopCard"
import WorkshopCard from "../Components/WorkshopCard.js"

function Workshops(props) {
  const cards = getWorkshopCard()
  const items = []
  for (const index in cards) {
      const cardItem = cards[index]
      items.push(
          <div className="row">
              <WorkshopCard AddToCart={props.AddToCart} title={cardItem.title} subTitle={cardItem.subTitle} image={cardItem.image} description={cardItem.description} price={cardItem.price} />
          </div>
      )
  }
  return (
      <div className="container card-location">
          <div className="row">
          {items}
          </div>
      </div>
  )
}
  
  export default Workshops