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
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--borderColor);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
  z-index: 10;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  .nav-icon:hover {
    color: var(--primaryColor);
  }
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .nav-action {
    position: relative;
    color: var(--mainBlack);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-action:visited {
    color: var(--mainBlack);
  }
  .nav-count {
    position: absolute;
    background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
    color: var(--mainWhite);
    font-size: 0.85rem;
    top: -10px;
    right: -10px;
    padding: 0 7px;
    border-radius: 999px;
    box-shadow: 0 6px 16px rgba(249, 115, 22, 0.35);
  }
`;

export default Navbar;
