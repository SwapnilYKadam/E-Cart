import "./Card.scss";
import Products from "./../../data/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Card = () => {
  const product = Products[0];

  return (
    <div className="card">
      <div className="card-img">
        <img
          alt={product.name}
          src={require(`./../../../public${product.image}`).default}
        />
      </div>
      <div className="card-details">
        <h3>{product.name}</h3>
        <div className="card-details-rating">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <p>{product.numReviews} Reviews</p>
        </div>
        <h1>₹{product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
