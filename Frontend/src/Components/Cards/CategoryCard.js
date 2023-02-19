import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

export default function CategoryCard({ data = {} }) {
  return (
    <Card
      style={{
        margin: "10px",
      }}
    >
      <img alt={data.category} src={data.url} />
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          <Link to={`/products/${data.id}`}>{data.category}</Link>
        </CardTitle>
      </CardBody>
    </Card>
  );
}
