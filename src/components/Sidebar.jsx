import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleSidebar } from '../store/actions/products';

function Sidebar() {
  const dispatch = useDispatch();
  const { links, sideBarOpen } = useSelector((state) => ({
    links: state.products.links,
    sideBarOpen: state.products.sideBarOpen,
  }));

  return (
    <SideWrapper show={sideBarOpen} aria-label="Primary">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="sidebar-link" onClick={() => dispatch(handleSidebar())}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.98);
  z-index: 9;
  border-right: 1px solid var(--borderColor);
  box-shadow: 20px 0 50px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(10px);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    color: var(--ink);
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
    font-weight: 600;
  }
  .sidebar-link:hover {
    background: rgba(15, 118, 110, 0.08);
    color: var(--ink);
    padding: 0.5rem 1.5rem 0.5rem 2.2rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
