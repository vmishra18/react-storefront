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
            <button
              type="button"
              className="product-icon-btn"
              aria-label={`Toggle wishlist for ${product.title}`}
              onClick={() => onWishlist(product)}
            >
              <WishlistIcon
                className={`icon wishlist-icon ${wished ? "active" : ""}`}
              />
            </button>
            <button
              type="button"
              className="product-icon-btn"
              aria-label={`Add ${product.title} to cart`}
              onClick={() => onCart(product.id)}
            >
              <FaCartPlus className="icon" />
            </button>
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
    border-radius: 20px;
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
    background: linear-gradient(145deg, rgba(255, 122, 24, 0.18), rgba(34, 211, 238, 0.2));
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
  .product-icon-btn {
    background: transparent;
    border: none;
    padding: 0;
  }
  .product-icon-btn:focus-visible .icon {
    outline: 2px solid var(--accentColor);
    outline-offset: 3px;
  }
  .icon {
    font-size: 2rem;
    margin: 0.5rem;
    padding: 0.6rem;
    color: var(--textPrimary);
    background: rgba(15, 23, 42, 0.85);
    border-radius: 0.9rem;
    border: 1px solid rgba(148, 163, 184, 0.25);
    box-shadow: 0 12px 20px rgba(2, 6, 23, 0.4);
    transition: var(--mainTransition);
  }
  .icon:hover {
    transform: translateY(-2px);
    color: var(--accentColor);
  }
  .wishlist-icon.active {
    color: #0f172a;
    background: linear-gradient(135deg, #ff7a18 0%, #ffb347 100%);
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
  .card-body .text-main {
    background: rgba(34, 211, 238, 0.12);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    color: var(--accentColor);
  }
`;

export default Product;
