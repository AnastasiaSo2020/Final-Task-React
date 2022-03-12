import { useState } from "react";
import CartQuantity from "./CartQuantity";
import '../Components/main.css'
import FancyBox from "./FancyBox";

function ProductCard(props) {

    const [quantity, setQuantity] = useState(1)
    const { title, subTitle, description, image, price } = props

    function AddToCart()
    {
        props.AddToCart({title:title, price:price, quantity:quantity, image:image})
    }

    return (
        <div className="row productCardRowAppearance">
            <div className="col-6 productCardColAppearance">
                <span className='item-location'>
                    <FancyBox imagefolder={image} />
                </span>
            </div>
            <div className="col-6 productCardColAppearance">
                <h3 className="productCardTitleAppearance">{title}</h3>
                <p className="productCardSubtitleAppearance">{subTitle}</p>
                <p className="productCardDescriptionAppearance">{description}</p>
                <h3 className="productCardPriceAppearance">{price} USD </h3>
                <span className="productCardOneRow {">
                    <CartQuantity quantity={quantity} quantityChanged={(x)=>setQuantity(x)} />
                    <a href="#" onClick={AddToCart} className="btn btn-warning input-field"><strong>ADD TO CART</strong></a>
                </span>
            </div>
        </div>
    );
}

export default ProductCard