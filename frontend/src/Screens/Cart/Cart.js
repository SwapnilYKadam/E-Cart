import "./Cart.scss";
import cartItems from "./../../data/cart";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart_items">
        {cartItems.map((product, i) => (
          <div key={i} className="cart_item">
            <img
              src={require(`./../../../public${product.image}`).default}
              alt={product.name}
            />
            <div className="cart_item-details">
              <h3>{product.name}</h3>
              <h3>₹ {product.price}</h3>
            </div>
            <button className="btn">Remove</button>
          </div>
        ))}
      </div>
      <div className="cart_total">
        <h1 className="cart_total-title">Total</h1>
        <hr />
        {cartItems.map((item, i) => (
          <div key={i} className="cart_total-item">
            <h3 className="cart_total-item-name">{item.name}</h3>
            <h3>{item.price}x2</h3>
            <h3 className="cart_total-item-price">{item.price}</h3>
          </div>
        ))}
        <hr />
        <div className="cart_total-item">
          <h3>Total Price</h3>
          <h3>₹456.99</h3>
        </div>
        <hr />
        <button className="btn checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
