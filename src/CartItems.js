import React from "react";

function CartItems(props) {
  return (
    <>
      <li className=" fs-4 mb-3 list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <p className="fw-bolder">{props.item.brand}</p>
          <p>₹ {props.item.price}</p>
        </div>

        <button
          onClick={() => props.remove(props.item)}
          className="btn bg-danger rounded-pill text-white"> X
        </button>
      </li>
    </>
  );
}

export default CartItems;
