import { useTheme } from "@/context/ThemeContext";
import { APP_TITLE } from "@/lib/constants/header";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  const { theme } = useTheme();

  return (
    <Navbar className={`navbar-theme`} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">{APP_TITLE}</Navbar.Brand>
        <Nav className="ms-auto">
          {/* only uncomment once login is enabled */}
          {/* <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#logout">Logout</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
