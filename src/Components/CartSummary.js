import CartProduct from "./CartProduct"

function CartSummary(props) {
  return (
    <div className="row p-2">
      <div className="col-sm-11 col-md-4">
        <div className="px-5 pt-5">
          <h5>Shipping address</h5>
          <div>
            <ul className="list-unstyled">
              {props.address.shipping}
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h5>Billing address</h5>
          <div>
            <ul className="list-unstyled">
              {props.address.billing}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-8 pt-3">
        <CartProduct RemoveFromCart={props.RemoveFromCart} data={props.data} />
      </div>
    </div>
  )
}
export default CartSummary
