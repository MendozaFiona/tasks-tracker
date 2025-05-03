import { SIDEBAR_MENUS } from "@/lib/constants/sidebar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="bg-light vh-100 p-3" style={{ width: "250px" }}>
    <Nav defaultActiveKey={SIDEBAR_MENUS[0].link} className="flex-column">
      {SIDEBAR_MENUS.map((menu) => (
        <Nav.Link as={Link} key={menu.link} to={menu.link}>
          {menu.label}
        </Nav.Link>
      ))}
    </Nav>
  </div>
);

export default Sidebar;
