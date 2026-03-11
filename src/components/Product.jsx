import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";

function Product({
  product,
  onCart,
  onSingle,
  onWishlist = () => {},
  wished = false
}) {
  const WishlistIcon = wished ? FaHeart : FaRegHeart;

  return (
    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            alt="product"
            className="card-img-top p-5"
            height="300px"
          />
          <div className="product-icons">
            <Link
              to={`/products/${product.id}`}
              onClick={() => onSingle(product.id)}
            >
              <FaSearch className="icon" />
            </Link>
            <WishlistIcon
              className={`icon wishlist-icon ${wished ? "active" : ""}`}
              onClick={() => onWishlist(product)}
            />
            <FaCartPlus className="icon" onClick={() => onCart(product.id)} />
          </div>
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0 text-main">${product.price}</p>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    transition: var(--mainTransition);
    height: 100%;
    border: 1px solid var(--borderColor);
    border-radius: 18px;
  }
  .card:hover {
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.08);
    opacity: 0.85;
  }
  .img-container {
    position: relative;
    background: linear-gradient(145deg, rgba(249, 115, 22, 0.1), rgba(14, 165, 167, 0.1));
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    display: flex;
    gap: 0.5rem;
  }
  .icon {
    font-size: 2rem;
    margin: 0.5rem;
    padding: 0.6rem;
    color: var(--mainBlack);
    background: var(--mainWhite);
    border-radius: 0.9rem;
    box-shadow: 0 12px 20px rgba(15, 23, 42, 0.2);
    transition: var(--mainTransition);
  }
  .icon:hover {
    transform: translateY(-2px);
    color: var(--primaryColor);
  }
  .wishlist-icon.active {
    color: var(--mainWhite);
    background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default Product;
