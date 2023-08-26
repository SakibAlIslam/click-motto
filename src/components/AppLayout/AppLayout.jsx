import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="appLayout">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default AppLayout;