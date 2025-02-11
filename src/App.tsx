import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./styles/global.style.css";
import LoadingScreen from "./components/loaders/LoadingScreen";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="max-w-dvw max-h-dvh w-full h-full overflow-y-scroll">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
