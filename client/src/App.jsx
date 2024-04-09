import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Hooks/ScrollToTop.js";
import Footer from "./Layout/Footer.jsx";
import Navbar from "./Layout/Navbar";
import Blog from "./Pages/Blog";
import BlogEntry from "./Pages/BlogEntry.jsx";
import Certificates from "./Pages/Certificates";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NonProfit from "./Pages/NonProfit";
import NotFound from "./Pages/NotFound.jsx";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogEntry />} />
        <Route path="/certyfikaty" element={<Certificates />} />
        <Route path="/non-profit" element={<NonProfit />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
