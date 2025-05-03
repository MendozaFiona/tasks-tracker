import App from "@/App";
import Calendar from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
import Tasks from "@/pages/Tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
