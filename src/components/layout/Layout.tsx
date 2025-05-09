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
    <div className="d-flex">
      <Navbar />

      <div className="fm-page-content">{children}</div>
    </div>
  </>
);

export default Layout;
