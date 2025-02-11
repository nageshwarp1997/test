import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./styles/global.style.css";
import LoadingScreen from "./components/loaders/LoadingScreen";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-dvw max-h-dvh min-w-dvw min-h-dvh w-full h-full overflow-y-scroll border border-[red]">
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
