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
    border-radius: var(--radiusLg);
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
    background: linear-gradient(145deg, rgba(15, 118, 110, 0.12), rgba(249, 115, 22, 0.12));
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
    cursor: pointer;
  }
  .product-icon-btn:focus-visible .icon {
    outline: 2px solid var(--accentColor);
    outline-offset: 3px;
  }
  .icon {
    font-size: 2rem;
    margin: 0.5rem;
    padding: 0.6rem;
    color: var(--ink);
    background: var(--surface);
    border-radius: 0.9rem;
    border: 1px solid var(--borderColor);
    box-shadow: 0 12px 20px rgba(15, 23, 42, 0.12);
    transition: var(--mainTransition);
  }
  .icon:hover {
    transform: translateY(-2px);
    color: var(--primaryColor);
  }
  .wishlist-icon.active {
    color: #ffffff;
    background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
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
    background: rgba(15, 118, 110, 0.12);
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    color: var(--primaryColor);
  }
`;

export default Product;
