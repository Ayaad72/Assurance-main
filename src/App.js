import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import "./assets/styles/index.css";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
