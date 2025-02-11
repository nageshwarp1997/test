import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-dvw max-h-dvh min-w-dvw min-h-dvh w-full h-full overflow-y-scroll">
        <RouterProvider router={routes} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
