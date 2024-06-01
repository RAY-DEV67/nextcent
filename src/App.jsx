import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollToTop } from "./components/scrollToTop";
import RequireAuth from "./components/requireAuth";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/general/landingPage";
import Navbar from "./components/navbar";
import About from "./pages/general/about";
import PackagesScreen from "./pages/general/packagesScreen";
import Contact from "./pages/general/contact";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<PackagesScreen />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
