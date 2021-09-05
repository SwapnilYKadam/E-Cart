import "./wishlist.scss";
import cartItems from "../../data/cart";
import Card from "../../Components/Card/Card";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <h1 className="wishlist_title">Wsihlist</h1>
      <div className="wishlist_products">
        {cartItems.map((product, i) => (
          <Card key={i} product={product} />
        ))}
        <Card />
      </div>
    </div>
  );
};

export default Wishlist;
