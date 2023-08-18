import { Link } from "react-router-dom";
import Carbot from "./Carbot";
import BannerCar from "./BannerCar";
import BackTop from "../src/components/BackTop";

const CarSale = () => {
  return (
    <>
      <BannerCar />
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Sales Car
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-1.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $199.00
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
<<<<<<< HEAD
              <div className="rent-item  mb-4">
=======
              <div className="rent-item mb-4">
>>>>>>> d8b40126c5ff9c4b2bd8acf511c72fe3446cc22f
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-2.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $699.00
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-3.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $599.00
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-4.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $399.00
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-5.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $299.00
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src="../assets/img/car-rent-6.png"
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <Link className="btn btn-primary px-3" to="/bookingcar">
                  $150.00
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carbot />
      <BackTop />
    </>
  );
};

export default CarSale;
