import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./providers/MovieContext.jsx";
import { UserProvider } from "./providers/UserContext.jsx";
import { ReviewProvider } from "./providers/ReviewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MovieProvider>
          <ReviewProvider>
            <App />
          </ReviewProvider>
        </MovieProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
