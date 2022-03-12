import { useState } from "react";
import CartAddress from "../Components/CartAddress";
import CartProduct from "../Components/CartProduct";
import CartSummary from "../Components/CartSummary";
import '../Components/main.css'

  function Cart(props) {
    
    const [address, setAddress] = useState({})

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link tabsAppearance active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Products
                </button>
                <button
                  class="nav-link tabsAppearance"
                  id="nav-address-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-address"
                  type="button"
                  role="tab"
                  aria-controls="nav-address"
                  aria-selected="false"
                >
                  Address
                </button>
                <button
                  class="nav-link tabsAppearance"
                  id="nav-summary-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-summary"
                  type="button"
                  role="tab"
                  aria-controls="nav-summary"
                  aria-selected="false"
                >
                  Summary
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <CartProduct data={props.data} RemoveFromCart={props.RemoveFromCart} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-address"
                role="tabpanel"
                aria-labelledby="nav-address-tab"
              >
                <CartAddress addAddress={(a)=>setAddress(a) }/>
              </div>
              <div
                className="tab-pane fade"
                id="nav-summary"
                role="tabpanel"
                aria-labelledby="nav-summary-tab"
              >
                <CartSummary RemoveFromCart={props.RemoveFromCart} address={address} data={props.data} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

export default Cart;
