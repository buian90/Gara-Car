import BackTop from "../src/components/BackTop";
import SliderTop from "../src/components/SliderTop";
import Booking from "./Booking";
import Fact from "./Fact";
import ServiceBot from "./ServiceBot";
import ServiceTop from "./ServiceTop";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <SliderTop />
      <ServiceTop />

      <Fact />
      <ServiceBot />
      <Booking />
      <Team />
      <Testimonial />
      <BackTop />
    </>
  );
};

export default Home;
