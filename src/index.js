import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import 'antd/dist/antd.min.css'
import ForgetPassword from "./pages/ForgetPassword";
import Places from "./pages/Places";


export default function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/register" index element={<Register />} />
          <Route path="/forgot-password" index element={<ForgetPassword />} />
          <Route path="/main-page" index element={< MainPage />} />
          <Route path="/places" index element={< Places />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);