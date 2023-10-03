import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./navigation/router/AppRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onError={(error) =>
          console.error("Error was caught by ErrorBoundry", error)
        }
      >
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
