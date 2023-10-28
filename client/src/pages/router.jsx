import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";



//query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: "ciao",
  },
]);
