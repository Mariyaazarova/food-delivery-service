import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./components/context/theme-context/theme-context-provider.jsx";
import { AuthContextProvider } from "./components/context/auth-context/auth-context-provider.jsx";
import { App } from "./App.jsx";
import "@coreui/coreui/dist/css/coreui.min.css";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
);
