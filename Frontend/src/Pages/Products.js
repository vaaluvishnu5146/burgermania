import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BasicCrumbs from "../Components/Breadcrumbs/BasicCrumbs";
import ProductCard from "../Components/Cards/ProductCard";
import { useSearchParams, useParams } from "react-router-dom";

export default function Products() {
  const { category = "" } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    if (food.length < 1) {
      fetch(
        `${process.env.REACT_APP_BURGER_MANIA_SERVER_BASE_URL}/food/${category}`
      )
        .then((response) => response.json())
        .then((result) => {
          const { message = "", data = [] } = result;
          if (data.length > 0) {
            setFood(data);
          }
        })
        .catch((err) => alert(err));
    }

    return () => {};
  }, []);

  return (
    <section className="mt-5" id="products-pagecontainer">
      <Container id="product-listing-container">
        <BasicCrumbs data={[]} />
        <Row>
          <Col lg="8" md="6" sm="12" xs="12">
            <h3 className="fw-bold text-uppercase">Burgers</h3>
            <Row>
              {food.length > 0 ? (
                food.map((data, i) => (
                  <Col lg="4">
                    <ProductCard data={data} key={i} />
                  </Col>
                ))
              ) : (
                <p>WE ARENT SERVING BURGER TODAY</p>
              )}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}
