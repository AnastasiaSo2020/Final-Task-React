import getProductCard from "../API/getProductCard";
import ProductCard from "../Components/ProductCard";

function Shop(props) {

  const cards = getProductCard()
  const items = [];

  for (const index in cards) {
      const cardItem = cards[index];
      items.push(
          <div className="row">
              <ProductCard AddToCart={props.AddToCart} title={cardItem.title} subTitle={cardItem.subTitle} image={cardItem.image} description={cardItem.description} price={cardItem.price} />
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
  
  export default Shop