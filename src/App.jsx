import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import Contact from "../pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="NotFound" element={<NotFound />} />
            <Route path="About" element={<About />} />
            <Route path="Booking" element={<Booking />} />
            <Route path="Service" element={<Service />} />
            <Route path="Team" element={<Team />} />
            <Route path="Testimonial" element={<Testimonial />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
