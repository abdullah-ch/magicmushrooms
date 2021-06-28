import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDetailsData } from "@/data";
const ProtfolioDetails = () => {
  const {
    gallery,
    title,
    text,
    client,
    categories,
    date,
    socials
  } = PortfolioDetailsData;
  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            {gallery.map(({ image }, index) => (
              <div className="portDetailThumb" key={index}>
                <img alt="portDetailThumb" src={image} />
              </div>
            ))}
          </Col>
          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Clients:</h4>
              <p>{client}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Category:</h4>
              <p>
                {categories.map(({ name, url }, index) => (
                  <a key={index} href={url}>
                    {name},
                  </a>
                ))}
              </p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Date:</h4>
              <p>{date}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Follow:</h4>
              <ul>
                {socials.map(({ name, url }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProtfolioDetails;
