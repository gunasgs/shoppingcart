import React from "react";

function Card(props) {
  return (
    <>
      <div className="col-lg-3 mb-2">
        <div className="card ">
          <img className="img-fluid" src={props.mobile.img} alt="..." />
          <div className="card-body">
            <div className="text-center">
              <p className=" h2 fw-bold"> {props.mobile.brand}
                <span className="h3"> {props.mobile.model} </span>
              </p>
              <div className="d-flex justify-content-center h4 p-3 text-warning">
                <div className="bi-star-fill p-1"> </div>
                <div className="bi-star-fill p-1"> </div>
                <div className="bi-star-fill p-1"> </div>
                <div className="bi-star-fill p-1"> </div>
                <div className="bi-star-fill p-1"> </div>
              </div>
              <p className="h4 fw-bolder"> ₹{props.mobile.price} </p>
              <h4 style={{ color: "red" }}>{`${ !props.mobile.isstock ? "out of stock" : ""}`}</h4>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                disabled={props.cartitems.some((obj) => obj.id === props.mobile.id)}
                onClick={() => props.handle(props.mobile)}
                className={`btn btn-lg ${props.mobile.isstock ? "btn-outline-primary" : "btn-block" }`}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
