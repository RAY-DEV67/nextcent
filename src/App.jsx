import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ScrollToTop } from "./components/scrollToTop";
import LandingPage from "./pages/home";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
