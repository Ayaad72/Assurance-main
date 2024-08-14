import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store";
import "./theme.css";
import LandingPage from "./screens/form/form";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import DiscoverOurSolutions from "./screens/DiscoverSolutions";
import HomeEquityComponent from "./screens/HomeEquity";
import FinancialSolutions from "./screens/financial/FinancialSolutions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/form" element={<LandingPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/DiscoverSolutions" element={<DiscoverOurSolutions />} />
      <Route path="/HomeEquity" element={<HomeEquityComponent />} />
      <Route path="/FinancialSolutions" element={<FinancialSolutions />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
