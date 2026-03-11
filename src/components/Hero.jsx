import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.35)),
    url(${props => props.img}) center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 25% 20%, rgba(249, 115, 22, 0.25), transparent 45%),
      radial-gradient(circle at 70% 10%, rgba(14, 165, 167, 0.2), transparent 40%);
    pointer-events: none;
  }

  .banner {
    position: relative;
    padding: 2.5rem 3rem;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(15, 23, 42, 0.35);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
    backdrop-filter: blur(6px);
    animation: floatIn 0.7s ease;
  }

  .title {
    font-family: "Fraunces", serif;
    font-size: clamp(2.5rem, 4vw, 4rem);
    text-shadow: 0 12px 30px rgba(15, 23, 42, 0.45);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  @media (max-width: 576px) {
    .banner {
      padding: 2rem 1.5rem;
    }
  }
`;

Hero.defaultProps = {
  img: mainBcg
};

export default Hero;
