import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryCard from "../Components/Cards/CategoryCard";
import BannerSlider from "../Components/Slider/Slider";
import { categories } from "../mocks/data";

export default function Home() {
  return (
    <section className="container container-fluid" id="home-pagecontainer">
      <BannerSlider />
      <div className="mt-5">
        <h3 className="mb-4">Categories</h3>
        <Container>
          <Row>
            {categories.map((d, i) => (
              <Col lg="2" md="4" sm="2" xs="2" key={i}>
                <CategoryCard data={d} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
