import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import MobileContactBar from "../components/MobileContactBar";

function MainLayout() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* All Pages */}
      <main>
        <Outlet />
      </main>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTopButton />
      <MobileContactBar />
    </>
  );
}

export default MainLayout;