import { FC, ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import { Container, Row, Col } from "react-bootstrap";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Navbar />
        </Col>
        <Col xs={10} className="p-4">
          {children}
        </Col>
      </Row>
    </Container>
  </>
);

export default Layout;
