import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import {
  categories,
  Cuisine,
  FoodType,
  ProductTags,
  DiscountType,
} from "../mocks/data";

export default function CreateProduct() {
  const [food, setFood] = useState({});

  const handleInput = (e) => {
    if (e) {
      const { id = "", value = "" } = e.target;
      let foodCopy = {
        ...food,
      };
      foodCopy[id] = value;
      setFood(foodCopy);
    }
  };

  const handleAddProduct = () => {
    fetch(`${process.env.REACT_APP_BURGER_MANIA_SERVER_BASE_URL}/food`, {
      METHOD: "POST",
      body: {
        ...food,
      },
    })
      .then(() => {})
      .then(() => {})
      .catch((err) => alert(err));
  };

  return (
    <Container>
      <div className="mt-4">
        <h3 className="mb-5">Create Food</h3>
        <FormGroup>
          <Label className="fw-bold" for="name">
            Product Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter food name"
            type="text"
            onChange={handleInput}
            value={food["name"]}
          />
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="description">
            Product Description
          </Label>
          <Input
            id="description"
            name="text"
            type="textarea"
            onChange={handleInput}
            value={food["description"]}
          />
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="imageUrl">
            Product Image
          </Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            placeholder="Copy / Paste Image Url"
            type="url"
          />
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="category">
            Product Category
          </Label>
          <Input id="category" name="select" type="select">
            {categories.map((d, i) => (
              <option key={`category-option-${i}`}>{d.category}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="cuisine">
            Product Cuisine
          </Label>
          <Input id="cuisine" name="select" type="select">
            {Cuisine.map((d, i) => (
              <option key={`cuisine-option-${i}`}>{d.label}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="foodtype">
            Food Type
          </Label>
          <Input id="foodtype" name="select" type="select">
            {FoodType.map((d, i) => (
              <option key={`foodtype-option-${i}`}>{d.label}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="exampleEmail">
            Product Price
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="Enter food Price"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold" for="tags">
            Select Product Tags
          </Label>
          <Input id="tags" multiple name="tags" type="select">
            {ProductTags.map((d, i) => (
              <option key={`tags-option-${i}`}>{d.label}</option>
            ))}
          </Input>
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label className="fw-bold" for="exampleEmail">
                Product Discount
              </Label>
              <Input
                id="discount"
                name="discount"
                placeholder="Enter Discount"
                type="number"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="fw-bold" for="discountType">
                Food Type
              </Label>
              <Input id="discountType" name="select" type="select">
                {DiscountType.map((d, i) => (
                  <option key={`discountType-option-${i}`}>{d.label}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Create Product</Button>
      </div>
    </Container>
  );
}
