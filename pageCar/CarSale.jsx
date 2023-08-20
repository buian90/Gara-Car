import { Link } from "react-router-dom";
import Carbot from "./Carbot";
import BannerCar from "./BannerCar";
import BackTop from "../src/components/BackTop";
import useGetApi from "./UseGetApi";

const CarSale = () => {
  let [data] = useGetApi("http://localhost:3000/products");
  console.log(data);
  return (
    <>
      <BannerCar />
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Sales Car
          </h1>
         <div className="container">{data && (
            <div className="row">
              {data.map((products, index) => {
                <>
                  <div className="col-lg-4 col-md-6 mb-2" key={index}>
                    <div className="rent-item mb-4">
                      <img
                        className="img-fluid mb-4"
                        src={products.image}
                        alt=""
                      />
                      <h4 className="text-uppercase mb-4">{products.title}</h4>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="px-2">
                          <i className="fa fa-car text-primary mr-1"></i>
                          <span>{products.year}</span>
                        </div>
                        <div className="px-2 border-left border-right">
                          <i className="fa fa-cogs text-primary mr-1"></i>
                          <span>AUTO</span>
                        </div>
                        <div className="px-2">
                          <i className="fa fa-road text-primary mr-1"></i>
                          <span>{products.distance}K</span>
                        </div>
                      </div>
                      <Link className="btn btn-primary px-3" to="/bookingcar">
                        $199.00
                      </Link>
                    </div>
                  </div>
                </>;
              })}
            </div>
          )}</div>
          
        </div>
      </div>
      <Carbot />
      <BackTop />
    </>
  );
};

export default CarSale;
