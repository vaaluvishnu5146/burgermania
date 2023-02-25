import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BasicCrumbs from "../Components/Breadcrumbs/BasicCrumbs";
import ProductCard from "../Components/Cards/ProductCard";
import { useSearchParams, useParams } from "react-router-dom";
import { saveProducts } from "../redux/Reducers/Products.reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  // HELPS TO DISPATCH ACTION CREATOR FROM REACT COMPONENT
  const { isLoading = false, products = [] } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();
  const { category = "" } = useParams();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BURGER_MANIA_SERVER_BASE_URL}/food/${category}`
    );
    response
      .json()
      .then((result) => {
        const { message = "", data = [] } = result;
        if (data.length > 0) {
          dispatch(saveProducts(data));
          setLoading(false);
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    if (loading && products.length < 1) {
      fetchData();
    }
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <section className="mt-5" id="products-pagecontainer">
      <Container id="product-listing-container">
        <BasicCrumbs data={[]} />
        <Row>
          <Col lg="8" md="6" sm="12" xs="12">
            <h3 className="fw-bold text-uppercase">Burgers</h3>
            <Row>
              {products.length > 0 ? (
                products.map((data, i) => (
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
