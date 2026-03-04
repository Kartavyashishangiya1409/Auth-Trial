import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="1059406117168-4sgrkt0le777b7e3ftmv33i0bd2926vh.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);