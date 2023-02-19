import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function BasicCrumbs({ data = [] }) {
  return (
    <Breadcrumb>
      {data.map((d, i) => (
        <>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Library</a>
          </BreadcrumbItem>
        </>
      ))}
    </Breadcrumb>
  );
}
