import React from "react";

const CheckoutHeader = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout form</h1>
      <span className="checkout-description">
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </span>
    </div>
  );
};

export default CheckoutHeader;
