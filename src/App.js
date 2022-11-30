import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Calendar from "./pages/Calendar";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Resources from "./pages/Resources";
import Search from "./pages/Search";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/map" element={<Map />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
