import React from "react";
import CartPart from "./cartpart";
import Total from "./total";

function Cart(props) {
  const cart = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <div>
        <CartPart
          key={featureHash}
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      </div>
    );
  });

  return (
    <div>
      {cart}
      <Total selected={props.selected} />
    </div>
  );
}

export default Cart;