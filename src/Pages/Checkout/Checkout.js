import React from "react";
import "./Checkout.css";
import OrderDetails from "../../Images/OrderDetails.png";
import PaymentDetails from "../../Images/PaymentDetails.png";
import USPSALogo from "../../Images/USPSALogo.png";

function Checkout() {
  return (
    <div id="CheckoutContainer">
      <section>
        <form>
          <div>
            <label htmlFor="to-team">Name on Card:</label>
            <input type="text" label="To Team" placeholder="To Team" />
          </div>
          <div>
            <label htmlFor="to-team">Credit Card Number:</label>
            <input type="text" label="To Team" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </div>
          <article>
            <div>
                <label htmlFor="to-team">Expiration Date:</label>
                <input type="text" label="To Team" placeholder="XX/XX" />
            </div>
            <div>
                <label htmlFor="to-team">CVC:</label>
                <input type="text" label="To Team" placeholder="XXX" />
            </div>
          </article>
        </form>
        <button>Complete Order</button>
      </section>
      <section>
        <img src={USPSALogo} style={{width: '100px', alignSelf: 'center'}} alt="logo"></img>
        <h3>Subtotal:</h3>
        <p>$15.50</p>
        <h3>Tax:</h3>
        <p>$3.00</p>
        <h2>Total:</h2>
        <p>$18.50</p>
      </section>
    </div>
  );
}

export default Checkout;
