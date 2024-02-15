import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./Providers/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
