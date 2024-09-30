import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  return ( 
  <div>
  <Navbar expand="lg" className={ changeColor ? "color-active" : ""}>
  <Container>
    <Navbar.Brand href="#home" className="fs-3 fw-bold">
    Brimso_Solo
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto text-center">
      {navLinks.map((Link) => {
        return( 
        <div className="nav-link" key={Link.id}>
          <NavLink to={Link.path}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
  {Link.text}
  </NavLink>
        </div>
        );
      })}
      </Nav>

      <div className="text-center">
      <button className='btn rounded-1' style={{ backgroundColor: '#c0915e', color: 'white' }}>Follow Me</button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
  )
}

export default NavbarComponent
