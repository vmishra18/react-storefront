import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Footer({ socialLinks }) {
  return (
    <FooterWrapper>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              copyright &copy; tech shop {new Date().getFullYear()}. all rights
              reserved
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            {socialLinks.map(link => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
const mapStatesToProps = ({ products }) => {
  return { socialLinks: products.socialLinks };
};

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.95));
  color: var(--textPrimary);
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  .icon {
    font-size: 1.5rem;
    color: var(--textPrimary);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default connect(mapStatesToProps, null)(Footer);
