import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Shopping</MDBNavbarBrand>
        <span>All product</span>
        <MDBBtn color="dark"> Cart{0}</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
