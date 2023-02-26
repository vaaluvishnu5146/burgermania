import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BasicCrumbs from "../Components/Breadcrumbs/BasicCrumbs";
import ProductCard from "../Components/Cards/ProductCard";
import { useSearchParams, useParams } from "react-router-dom";
import { saveProducts } from "../redux/Reducers/Products.reducer";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../Components/Cards/CartCard";
import EmptyKitchen from "../assets/emptycart.webp";

export default function Products() {
  // HELPS TO DISPATCH ACTION CREATOR FROM REACT COMPONENT
  const { isLoading = false, products = [] } = useSelector(
    (store) => store.product
  );
  const { items = [] } = useSelector((store) => store.cart);
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
          <Col lg="4" id="cart-column">
            <h3 className="fw-bold text-uppercase">Cart Items</h3>
            <Row>
              {items.length < 1 ? (
                <Col>
                  <img src={EmptyKitchen} width="100%" height={"100%"} />
                </Col>
              ) : (
                items.map((d, i) => <CartCard data={d} key={i} />)
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
