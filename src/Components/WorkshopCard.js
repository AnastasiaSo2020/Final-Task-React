import { useState } from "react";
import CartQuantity from "./CartQuantity";
import '../Components/main.css'

function WorkshopCard(props) {

    const [quantity, setQuantity] = useState(1)
    const { title, subTitle, description, image, price } = props

    function AddToCart()
    {
        props.AddToCart({title:title, price:price, quantity:quantity, image:image})
    }

    return (
        <div className="row workshopCardRowAppearance">
            <div className="col-6 workshopCardColAppearance">
                <img className='item-location' src={image + "1.png"} />
            </div>
            <div className="col-6 workshopCardColAppearance">
                <h3 className="workshopCardTitleAppearance">{title}</h3>
                <h5 className="workshopCardSubTitleAppearance">{subTitle}</h5>
                <p className="workshopCardDescriptionAppearance">{description}</p>
                <h3 className="workshopCardPriceAppearance">{price} USD </h3>
                <span className="workshopCardOneRow">
                    <CartQuantity quantity={quantity} quantityChanged={(x)=>setQuantity(x)} />
                    <a href="#" onClick={AddToCart} className="btn btn-warning input-field"><strong>ADD TO CART</strong></a>
                </span>
            </div>
        </div>
    );
}

export default WorkshopCard