import { useForm, Controller } from "react-hook-form";
import PaymentForm from "./PayMentsForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Table } from "react-bootstrap";

const PayMents = () => {
  const cart = JSON.parse(localStorage.getItem("arrayCart"));
  console.log(cart);
  // Logic tinh toán giá sản phẩm
  let total = 0;
  if (cart && cart.length > 0) {
    cart.forEach((item) => {
      let price = item.price;

      if (price) {
        const priceNumber = parseFloat(price.replace("$", ""));
        let quality = item.quality;
        let itemPrice = priceNumber * quality;
        total = total + itemPrice;
      }
    });
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Dữ liệu của form
    // Gửi dữ liệu lên server hoặc thực hiện các xử lý khác
  };

  // Caculator price product
  const intialProductQuantities = {};
  cart.forEach((item, index) => {
    intialProductQuantities[index] = item.quality;
  });
  const [productQuantities, setProductQuantities] = useState(
    intialProductQuantities
  );
  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const increment = (productId) => {
    const newQuantity = (productQuantities[productId] || 0) + 1;
    handleQuantityChange(productId, newQuantity);
  };

  const decrement = (productId) => {
    if (productQuantities[productId] > 0) {
      const newQuantity = productQuantities[productId] - 1;
      handleQuantityChange(productId, newQuantity);
    }
  };
  return (
    <>
      <div className="paymentsform">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="payments1">
              <h1>PayMents</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pay-input">
                  <label>Name</label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <div>
                        <input {...field} />

                        {errors.name && <p>{errors.name.message}</p>}
                      </div>
                    )}
                  />
                </div>

                <div className="pay-input">
                  <label>Email</label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input {...field} />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                    )}
                  />
                </div>

                <div className="pay-input">
                  <label>Address</label>
                  <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                      <div>
                        <input {...field} />
                        {errors.address && <p>{errors.address.message}</p>}
                      </div>
                    )}
                  />
                </div>

                <div className="pay-input">
                  <label>Phone</label>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Phone is required" }}
                    render={({ field }) => (
                      <div>
                        <input {...field} />
                        {errors.phone && <p>{errors.phone.message}</p>}
                      </div>
                    )}
                  />
                </div>

                {/* Thêm các trường khác và logic validation tương tự */}
              </form>

              <PaymentForm />
            </Col>
            <Col sm={12} md={6} lg={6} className="payments2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>ToTal</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 &&
                    cart.map((item, index) => {
                      const productId = index;

                      const priceNumber = item.price
                        ? parseFloat(item.price.replace("$", ""))
                        : 0;

                      const productTotal =
                        priceNumber * (productQuantities[productId] || 0);
                      return (
                        <tr key={item}>
                          <td className="images-product">
                            <img src={item.images} />
                          </td>
                          <td>{item.title}</td>
                          <td> {item.price} </td>
                          <td> ${productTotal.toFixed(2)}</td>
                          <td className="quantity-product">
                            <div className="pay-count">
                              <button onClick={() => decrement(productId)}>
                                -
                              </button>
                              <input
                                id="price-number-product"
                                type="number"
                                value={productQuantities[productId] || 0}
                                min={0}
                                readOnly
                              />
                              <button onClick={() => increment(productId)}>
                                +
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PayMents;
