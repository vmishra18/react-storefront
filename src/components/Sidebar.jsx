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
    <SideWrapper show={sideBarOpen}>
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
  background: rgba(11, 16, 32, 0.98);
  z-index: 9;
  border-right: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 20px 0 50px rgba(2, 6, 23, 0.55);
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
    color: var(--textPrimary);
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
    font-weight: 600;
  }
  .sidebar-link:hover {
    background: rgba(34, 211, 238, 0.12);
    color: var(--textPrimary);
    padding: 0.5rem 1.5rem 0.5rem 2.2rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
