import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../assets/burgerManiaLogo.png";

export default function NavbarC() {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="Burger mania"
          src={logo}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to={"/dashboard/createProduct"}>
            <NavLink href="/components/">Dashboard</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
