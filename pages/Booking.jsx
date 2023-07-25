import { Link } from "react-router-dom";
import ServiceTop from "./ServiceTop";

const Booking = () => {
  return (
    <>
      <div
      className="container-fluid page-header mb-5 p-0"
      style={{
        backgroundImage: "url ("//Gara-car/assets/img/carousel-bg-2.jpg")",
      }}
    >
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Booking
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Pages</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <ServiceTop />
    <div
      className="container-fluid bg-secondary booking my-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 py-5">
            <div className="py-5">
              <h1 className="text-white mb-4">
                Certified and Award Winning Car Repair Service Provider
              </h1>
              <p className="text-white mb-0">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <h1 className="text-white mb-4">Book For A Service</h1>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      className="form-select border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Service Date"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Request"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

   {/* Call */}
   <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-8 col-md-6">
                    <h6 className="text-primary text-uppercase">/ Call To Action /</h6>
                    <h1 className="mb-4">Have Any Pre Booking Question?</h1>
                    <p className="mb-0">Lorem diam ea sit dolor labore. Clita et dolor erat sed est lorem sed et sit. Diam sed duo magna erat et stet clita ea magna ea sed, sit labore magna lorem tempor justo rebum dolores. Eos dolor sea erat amet et, lorem labore lorem at dolores. Stet ea ut justo et, clita et et ipsum diam.</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                        <h3 className="text-white mb-4"><i className="fa fa-phone-alt me-3"></i>+012 345 6789</h3>
                        <Link to="" className="btn btn-secondary py-3 px-5">Contact Us<i className="fa fa-arrow-right ms-3"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Booking;
