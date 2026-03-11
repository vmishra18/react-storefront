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
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
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
  }
  .nav-action:visited {
    color: var(--mainBlack);
  }
  .nav-count {
    position: absolute;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

export default Navbar;
