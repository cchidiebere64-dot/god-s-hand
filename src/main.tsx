import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./Order";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  </BrowserRouter>
);
