import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
