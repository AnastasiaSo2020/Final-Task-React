function CartProduct(props) {
    function onDelete(order) {
        props.RemoveFromCart(order.title)
    }
    return (
        <div>
            <div className="row p-5">
                <div className="col-md-12 text-start">
                    <table className="table">
                        <thead>
                            <tr className="cart-row">
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="cart-items">
                            {props.data.map((item, index) => (
                                <tr id="product-2" className="cart-row">
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img
                                            src={item.image + "main.png"}
                                            width="90"
                                            height="90"
                                            alt=""
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity} </td>
                                    <td className="price">{item.price} USD</td>
                                    <td>{item.quantity * item.price} USD</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => onDelete(item)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-12 d-flex justify-content-end">
                    <h4>
                        Total:
                        <span className="p-1">{props.data.reduce((a, b) => a + b.price * b.quantity, 0)},-</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default CartProduct