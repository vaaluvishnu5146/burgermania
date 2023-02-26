import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { handleQuantity } from "../../redux/Reducers/Cart.reducer";
import { useDispatch } from "react-redux";

export default function CartCard({ data = {} }) {
  const dispatcher = useDispatch();
  return (
    <Card
      style={{
        position: "relative",
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 5%)",
      }}
      id=""
    >
      <Row>
        <Col lg="4">
          <div
            style={{
              backgroundImage: `url(${data.imageUrl})`,
              width: 150,
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </Col>
        <Col lg="8">
          <CardBody>
            <CardTitle tag="h5" className="fw-bold text-uppercase">
              {data.name || "NA"}
            </CardTitle>
            <CardText
              className="fw-medium"
              style={{
                fontSize: "0.9rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {data.description || "NA"}
            </CardText>
            <Row>
              <Col lg="4">
                <h5 className="fw-bold text-uppercase">
                  ₹{data.price || "NA"}
                </h5>
              </Col>
              <Col lg="8">
                <Row>
                  <Col lg="5">
                    <Button
                      style={{
                        width: 50,
                        height: 30,
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "25px",
                        fontWeight: "bold",
                      }}
                      color="primary"
                      outline
                      onClick={() =>
                        dispatcher(
                          handleQuantity({
                            id: data._id,
                            type: 1,
                          })
                        )
                      }
                    >
                      -
                    </Button>
                  </Col>
                  <Col lg="2">{data.quantity}</Col>
                  <Col lg="5">
                    <Button
                      style={{
                        width: 50,
                        height: 30,
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "25px",
                        fontWeight: "bold",
                      }}
                      color="primary"
                      outline
                      onClick={() =>
                        dispatcher(
                          handleQuantity({
                            id: data._id,
                            type: 0,
                          })
                        )
                      }
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}
