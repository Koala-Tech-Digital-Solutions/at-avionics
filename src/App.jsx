import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Capabilities from "./pages/Capabilities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <>
            <ScrollToTop />
            <Layout />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
