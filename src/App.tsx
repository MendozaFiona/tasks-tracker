import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/custom.scss";

import Layout from "@/components/layout/Layout";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
