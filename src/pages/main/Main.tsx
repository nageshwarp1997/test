import { Suspense } from "react";
import Navbar from "../../components/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import LoadingScreen from "../../components/loaders/LoadingScreen";

const Main = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Suspense>
  );
};

export default Main;
