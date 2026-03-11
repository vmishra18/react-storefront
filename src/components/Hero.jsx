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
  background: linear-gradient(135deg, rgba(2, 6, 23, 0.85), rgba(15, 23, 42, 0.5)),
    url(${props => props.img}) center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 25% 20%, rgba(255, 122, 24, 0.35), transparent 45%),
      radial-gradient(circle at 70% 10%, rgba(34, 211, 238, 0.25), transparent 40%);
    pointer-events: none;
  }

  .banner {
    position: relative;
    padding: 2.75rem 3.5rem;
    border-radius: 26px;
    border: 1px solid rgba(148, 163, 184, 0.35);
    background: rgba(15, 23, 42, 0.55);
    box-shadow: 0 30px 70px rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(6px);
    animation: floatIn 0.7s ease;
  }

  .title {
    font-family: "Playfair Display", serif;
    font-size: clamp(2.5rem, 4vw, 4rem);
    text-shadow: 0 12px 30px rgba(15, 23, 42, 0.45);
    text-transform: uppercase;
    letter-spacing: 0.24rem;
  }

  .banner p {
    margin: 1rem 0 0;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 0.85rem;
    color: rgba(226, 232, 240, 0.75);
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
