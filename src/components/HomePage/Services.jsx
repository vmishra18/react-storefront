import React from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaDolly />,
      title: "free shipping",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    },
    {
      id: 2,
      icon: <FaRedo />,
      title: "30 days return policy",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    },
    {
      id: 3,
      icon: <FaDollarSign />,
      title: "secured payment",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    }
  ];

  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        <div className="row">
          {services.map(service => (
            <div
              key={service.id}
              className="service-card col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
            >
              <div className="service-icon">{service.icon}</div>
              <div className="mt-3 text-capitalize">{service.title}</div>
              <div className="mt-3">{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  background: linear-gradient(120deg, rgba(15, 118, 110, 0.08), rgba(249, 115, 22, 0.08));
  border-top: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  .service-card {
    background: var(--surface);
    border-radius: var(--radiusLg);
    padding: 2rem 1.5rem;
    border: 1px solid var(--borderColor);
    box-shadow: var(--shadowSoft);
  }
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
    width: 68px;
    height: 68px;
    margin: 0 auto;
    border-radius: 18px;
    background: var(--surfaceAlt);
    display: grid;
    place-items: center;
    box-shadow: 0 12px 25px rgba(15, 23, 42, 0.1);
  }
  p {
    color: var(--muted);
  }
`;

export default Services;
