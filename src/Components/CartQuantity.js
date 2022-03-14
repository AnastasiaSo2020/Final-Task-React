import '../Components/main.css'

function CartQuantity(props) {

    return (
      <div className="col-md-1.5 d-flex cart-input-field">
        <input
          min="0"
          max="50"
          name="quantity"
          value={props.quantity}
          type="number"
          onChange={(e)=>props.quantityChanged(e.target.value)}
          className="form-control form-control-sm quantity-input qt"
        />
      </div>
    );
  }
  
  export default CartQuantity
