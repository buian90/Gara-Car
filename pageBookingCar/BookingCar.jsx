import { Link, useNavigate } from "react-router-dom";
import BookingCarDetails from "./BookingCarDetails";
import BannerBookingCar from "./BannerBookingCar";
import BackTop from "../src/components/BackTop";
import Button from "react-bootstrap/esm/Button";
import { toast } from "react-toastify";
import { useCart } from "../src/components/CartContext";
import CarSale from "../pageCar/CarSale";
import { useState } from "react";

const BookingCar = () => {
  const navigate = useNavigate();
  const { increaseCartCount } = useCart();
  const handleClick = () => {
    // lay gia tri cua san pham
    const imgCart = document.querySelector(".img-fluid").src;
    const priceCart = document.querySelector(".price-cart").innerHTML;
    const titleCart = document.querySelector(".title-cart").innerHTML;

    // Kiem tra da mua san pham nao truoc day hay chua
    const cartOld = JSON.parse(localStorage.getItem("arrayCart"));
    let productExistsInCart = false;

    cartOld &&
      cartOld.map((item) => {
        if (item.images === imgCart) {
          productExistsInCart = true;
          alert("San pham da ton tai trong gio hang");
        }
      });
    if (productExistsInCart === true) {
      return;
    }
    // increaseCartCount();
    const arrayCart = [
      {
        images: imgCart,
        price: priceCart,
        title: titleCart,
        quality: 1,
      },
    ];

    // Them vao gio hang cua minh tu san pham thu 2 tro di
    cartOld && cartOld.push(arrayCart);
    console.log(cartOld);
    if (cartOld) {
      localStorage.setItem("arrayCart", JSON.stringify(cartOld));
    } else {
      localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
    }

    toast.success("Sản phẩm đã thêm vào giỏ hàng", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/carsale"); // điều hướng đến trang carsale
    }, 2000);
  };

  return (
    <>
      <BannerBookingCar />
      {/* <!-- Detail Start --> */}
      <div className="container-fluid pt-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase mb-5 title-cart">
            Mercedes Benz R3
          </h1>
          <div className="row align-items-center pb-2">
            <div className="col-lg-6 mb-4">
              <img
                className="img-fluid"
                src="../assets/img/car-rent-1.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 mb-4">
              <h4 className="mb-2 price-cart">$99.00</h4>
              <div className="d-flex mb-3">
                <h6 className="mr-2">Rating:</h6>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(250)</small>
                </div>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt
              </p>
              <div className="d-flex pt-1">
                <h6>Share on:</h6>
                <div className="d-inline-flex">
                  <Link className="px-2" to="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link className="px-2" to="">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
              <div>
                <Link className="btn-buy-now">
                  <Button onClick={handleClick}>Add to cart</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-n3 mt-lg-0 pb-4">
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Detail End --> */}
      <BookingCarDetails />
      <BackTop />
    </>
  );
};

export default BookingCar;
