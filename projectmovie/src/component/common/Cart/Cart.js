import { Fragment, useState } from "react";
import classNames from 'classnames';
import "../../../asset/css/cart/cart.css";



export function Cart() {
  const [on,setOn] = useState(true)
  const list = localStorage.getItem("list")


  const buy=()=>{

  }
  const clearCart=()=>{

  }

  return (
    <Fragment>
      <div className={classNames({side_nav:true},{right:on})}>
        <button  onClick={()=>{
          setOn(!on)
        }}>
          <i className="fas fa-times" />
        </button>
        <h2>Cart</h2>
        <div className="cart-items"></div>
        <div className="final">
          <strong>
            Total: $ <span id="total">0</span>
          </strong>
          <div className="action">
            <button type="button" onClick={buy()} className="btn buy">
              Purchase {"     "}
              <i className="fas fa-credit-card" style={{ color: "#6665dd" }} />
            </button>
            <button type="button" onClick={clearCart()} className="btn clear">
              Clear Cart {"    "}
              <i className="fas fa-trash" style={{ color: "#bb342f" }} />
            </button>
          </div>
        </div>
      </div>
      <button  onClick={()=>{
        setOn(!on)
      }}
        
        className={classNames({cover:true},{none:on})}
      ></button>
      <div className="btn_cart">
        <div className="btn_content">
          <button type="button"
            className="fa fa-shopping-cart"
           onClick={()=>{
            setOn(!on)
           }}
          />
          <p className="count" id="count">
            2
          </p>
        </div>
      </div>
    </Fragment>
  );
}
