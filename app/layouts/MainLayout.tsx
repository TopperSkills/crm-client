import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
};

export default MainLayout;
