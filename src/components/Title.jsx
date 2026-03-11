import React from "react";
import styled from "styled-components";

function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  .title-underline {
    height: 0.25rem;
    width: 6rem;
    background: linear-gradient(90deg, #ff7a18 0%, #22d3ee 100%);
    margin: ${props => (props.center ? "0 auto" : "0")};
    border-radius: 999px;
  }
`;

export default Title;
