import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaCartPlus, FaHeart } from 'react-icons/fa';
import logo from '../images/logo.svg';
import { handleSidebar, handleCart } from '../store/actions/products';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const { cartItems, wishlistCount } = useSelector((state) => ({
    cartItems: state.products.cartItems,
    wishlistCount: state.products.wishlist.length,
  }));

  return (
    <NavWrapper>
      <div className="nav-center">
        <div className="nav-left">
          <button
            type="button"
            className="icon-button"
            aria-label="Open menu"
            onClick={() => dispatch(handleSidebar())}
          >
            <FaBars className="nav-icon" />
          </button>
        </div>

        <Link to="/" className="nav-brand" aria-label="Tech Shop home">
          <img src={logo} alt="Tech Shop" />
          <span className="brand-text">Tech Shop</span>
        </Link>

        <div className="nav-actions">
          <Link to="/wishlist" className="icon-button nav-action" aria-label="Wishlist">
            <FaHeart className="nav-icon" />
            <span className="nav-count">{wishlistCount}</span>
            <span className="sr-only">items in wishlist</span>
          </Link>
          <button
            type="button"
            className="icon-button nav-action"
            aria-label="Open cart"
            onClick={() => dispatch(handleCart())}
          >
            <FaCartPlus className="nav-icon" />
            <span className="nav-count">{cartItems}</span>
            <span className="sr-only">items in cart</span>
          </button>
        </div>
      </div>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.75rem;
  background: rgba(11, 16, 32, 0.92);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.55);
  backdrop-filter: blur(10px);
  z-index: 10;
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-left {
    display: flex;
    align-items: center;
  }
  .nav-brand {
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--textPrimary);
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
  }
  img {
    height: 34px;
    filter: drop-shadow(0 6px 20px rgba(34, 211, 238, 0.35));
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--textPrimary);
    transition: var(--mainTransition);
  }
  .icon-button:hover .nav-icon {
    color: var(--accentColor);
  }
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .nav-action {
    position: relative;
    color: var(--textPrimary);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-action:visited {
    color: var(--textPrimary);
  }
  .nav-count {
    position: absolute;
    background: linear-gradient(135deg, #ff7a18 0%, #ffb347 100%);
    color: #0f172a;
    font-size: 0.85rem;
    top: -8px;
    right: -8px;
    min-width: 20px;
    padding: 0 6px;
    border-radius: 999px;
    box-shadow: 0 10px 20px rgba(255, 122, 24, 0.4);
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 0.85rem 1.25rem;
    .nav-brand {
      letter-spacing: 0.25rem;
      font-size: 1.05rem;
    }
  }
  @media (max-width: 576px) {
    .brand-text {
      display: none;
    }
  }
`;

export default Navbar;
