import "./Details.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "./../../actions/productAction";
import Spinner from "../../Components/spinner/spinner";

const Details = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading } = productDetails;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const added = false;

  if (!loading && product && Object.keys(product).length !== 0) {
    return product ? (
      <div className="details">
        <div>
          <Link to="/" className="btn details_btn">
            Back
          </Link>
        </div>
        <div className="details_main">
          <div className="details_image">
            <img
              src={require(`./../../../public${product.image}`).default}
              alt={product.name}
            />
          </div>
          <div className="details_content">
            <div className="details_content-info">
              <h1>{product.name}</h1>
              <div className="details_content-info-rating">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <p>{product.numReviews} Reviews</p>
              </div>
              <hr />
              <p className="details_content-info-price">
                <b>Price:</b> ₹{product.price}
              </p>
              <hr />
              <p className="details_content-info-description">
                <b>Description:</b> {product.description}.
              </p>
              {added ? (
                <div className="details_content-info-added">
                  Product is added to cart.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="details_content-price">
              <div>
                <b>Price: </b>
                {product.price}
              </div>
              <div>
                <b>Status:</b> In Stock
              </div>
              <div>
                <label htmlFor="quantity">
                  <b>Quantity:</b>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                  defaultValue={1}
                />
              </div>
              <div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  } else {
    return <Spinner />;
  }
};

export default Details;
