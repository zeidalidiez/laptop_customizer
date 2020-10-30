import React from "react";
import slugify from "slugify";
import USCurrencyFormat from "./USCurrencyFormat";

function ItemOption(props) {
  const { itemHash, item, feature } = props;
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === props.selected[feature].name}
        onChange={(e) => {
          console.log("onchange ran");
          props.updateFeature(feature, item);
        }}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default ItemOption;
