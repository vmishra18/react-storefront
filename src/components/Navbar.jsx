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
        <FaBars className="nav-icon" onClick={() => dispatch(handleSidebar())} />
        <img src={logo} alt="tech shop logo" />
        <div className="nav-actions">
          <Link to="/wishlist" className="nav-action" aria-label="wishlist">
            <FaHeart className="nav-icon" />
            <div className="nav-count">{wishlistCount}</div>
          </Link>
          <div className="nav-action">
            <FaCartPlus className="nav-icon" onClick={() => dispatch(handleCart())} />
            <div className="nav-count">{cartItems}</div>
          </div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
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
  .nav-icon:hover {
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
    top: -10px;
    right: -10px;
    padding: 0 7px;
    border-radius: 999px;
    box-shadow: 0 10px 20px rgba(255, 122, 24, 0.4);
  }
`;

export default Navbar;
