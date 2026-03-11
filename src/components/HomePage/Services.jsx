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
  background: linear-gradient(120deg, rgba(255, 122, 24, 0.08), rgba(34, 211, 238, 0.08));
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  .service-card {
    background: rgba(17, 24, 39, 0.9);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    box-shadow: var(--shadowSoft);
  }
  .service-icon {
    font-size: 2.5rem;
    color: var(--accentColor);
    width: 68px;
    height: 68px;
    margin: 0 auto;
    border-radius: 18px;
    background: rgba(15, 23, 42, 0.9);
    display: grid;
    place-items: center;
    box-shadow: 0 12px 25px rgba(2, 6, 23, 0.4);
  }
  p {
    color: var(--textMuted);
  }
`;

export default Services;
