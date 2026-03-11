import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center cart-row">
      <div className="col-10 mx-auto col-lg-2">
        <img src={item.image} alt={item.title} width="64" className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>${item.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <button
              type="button"
              className="icon-button small"
              aria-label={`Decrease quantity for ${item.title}`}
              onClick={() => onDecrement(item.id)}
            >
              <FaChevronCircleDown />
            </button>
            <span className="text-title text-muted mx-3">{item.count}</span>
            <button
              type="button"
              className="icon-button small"
              aria-label={`Increase quantity for ${item.title}`}
              onClick={() => onIncrement(item.id)}
            >
              <FaChevronCircleUp />
            </button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <button
          type="button"
          className="icon-button small"
          aria-label={`Remove ${item.title} from cart`}
          onClick={() => onRemove(item.id)}
        >
          <FaTrash className="text-danger" />
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <strong className="text-muted">item total: ${item.total}</strong>
      </div>
    </div>
  );
}
export default CartItem;
