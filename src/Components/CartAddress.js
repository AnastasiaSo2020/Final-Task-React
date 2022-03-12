function CartAddress(props) {

function onSetAddress(e) {
  props.addAddress({shipping:e.target.shippingAddress.value, billing:e.target.billingAddress.value})
  e.preventDefault();
}

    return (
      <div>
        <form onSubmit={onSetAddress}>
          <div className="row m-3">
            <div className="col-md-6 px-3">
              <div className="form-outline">
                <label className="form-label" for="Message">
                  Shipping address
                </label>
                <textarea
                  required
                  className="form-control"
                  id="shippingAddress"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 px-3">
              <div className="form-outline">
                <label className="form-label" for="Message">
                  Billing address
                </label>
                <textarea
                  required
                  className="form-control"
                  id="billingAddress"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-md-12 d-flex justify-content-end">
              <button className="btn btn-warning">Add Addresses</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  export default CartAddress;
  