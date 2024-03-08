import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify"; // Import ToastContainer and Bounce from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for react-toastify
import { route } from "./routes/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // Corrected syntax
      />
    </div>
  );
}

export default App;
