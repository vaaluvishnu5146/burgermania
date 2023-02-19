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

export default function ProductCard({ data = {} }) {
  return (
    <Card
      style={{
        width: "16rem",
        margin: "15px",
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 5%)",
      }}
      id=""
    >
      <img
        alt="Sample"
        src="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20220314070554598878_482x264jpg"
      />
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
          <Col>
            <h5 className="fw-bold text-uppercase">₹{data.price || "NA"}</h5>
          </Col>
          <Col>
            <Button
              style={{
                width: 100,
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
            >
              ADD
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
