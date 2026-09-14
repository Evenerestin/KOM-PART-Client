import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Hooks/ScrollToTop.js";
import Footer from "./Layout/Footer.jsx";
import Navbar from "./Layout/Navbar";
import { PanelAuthProvider } from "./Panel/PanelAuthContext.jsx";
import Login from "./Panel/Login.jsx";
import PostForm from "./Panel/PostForm.jsx";
import PostList from "./Panel/PostList.jsx";
import ProtectedRoute from "./Panel/ProtectedRoute.jsx";
import Blog from "./Pages/Blog";
import BlogEntry from "./Pages/BlogEntry.jsx";
import Certificates from "./Pages/Certificates";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NonProfit from "./Pages/NonProfit";
import NotFound from "./Pages/NotFound.jsx";
import Services from "./Pages/Services";

const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogEntry />} />
          <Route path="/certyfikaty" element={<Certificates />} />
          <Route path="/non-profit" element={<NonProfit />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>

        <Route
          path="/panel"
          element={
            <PanelAuthProvider>
              <Outlet />
            </PanelAuthProvider>
          }
        >
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <PostList />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <PostForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:documentId"
            element={
              <ProtectedRoute>
                <PostForm />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
