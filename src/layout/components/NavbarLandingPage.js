import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function NavbarLanding() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll='300'
      expand='lg'
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            // to='/'
            // tag={Link}
            size='sm'
            href='#header'
          >
            {/* <NavbarBrand data-placement='bottom' href='#header' size='sm'> */}
            <img
              src={
                navbarColor
                  ? "https://res.cloudinary.com/practicify/image/upload/v1586731626/Main/P_text_iofvas.png"
                  : "https://res.cloudinary.com/practicify/image/upload/v1586731552/Main/P_text_red_urx26a.png"
              }
              alt=''
              width='160'
              height='80'
              className='d-inline-block align-top mr0 p0'
              style={{ margin: "-1.5rem" }}
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink href='#how'>
                <i className='nc-icon nc-layout-11 text-muted' />{" "}
                <span className='text-muted'>How it works</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#practicos'>
                <i className='nc-icon nc-layout-11 text-muted' />{" "}
                <span className='text-muted'>Practicos</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/contact'>
                <i className='nc-icon nc-layout-11 text-muted' />{" "}
                <span className='text-muted'>Contact</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;
