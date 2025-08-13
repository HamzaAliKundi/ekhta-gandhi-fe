import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import HomePage from "./pages/Home";
import Footer from "./components/footer";
import CounselorPage from "./pages/Counselor";
import CounselorDetailPage from "./pages/CounselorDetail/inde";
import RegisterPage from "./pages/Register";
import FqsPage from "./pages/Fqs";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./components/Blog/BlogPost";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counselor" element={<CounselorPage />} />
        <Route path="/fqs" element={<FqsPage />} />
        <Route path="/counselor-detail/:id" element={<CounselorDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
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
