import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import MobileContactBar from "../components/MobileContactBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsAppButton />
      <ScrollToTopButton />
      <MobileContactBar />
    </>
  );
}

export default MainLayout;