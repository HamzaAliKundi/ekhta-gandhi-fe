import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import HomePage from "./pages/Home";
import Footer from "./components/footer";
import CounselorPage from "./pages/Counselor";

const AppRoutes = () => {

  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counselor" element={<CounselorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
