import { SIDEBAR_MENUS } from "@/lib/constants/sidebar";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="fm-navbar-theme" style={{ width: "250px" }}>
    <Nav defaultActiveKey={SIDEBAR_MENUS[0].link} className="flex-column gap-1">
      {SIDEBAR_MENUS.map((menu) => (
        <Nav.Link as={NavLink} key={menu.link} to={menu.link} end>
          <span> {menu.label}</span>
          <i className={`bi bi-${menu.icon}`}></i>
        </Nav.Link>
      ))}
    </Nav>
  </div>
);

export default Navbar;
