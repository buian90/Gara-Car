import { useForm, Controller } from "react-hook-form";
import PaymentForm from "./PayMentsForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterApp from "./PayMentsCounts";

const PayMents = () => {
  const cart = JSON.parse(localStorage.getItem("arrayCart"));

  // Logic tinh toán giá sản phẩm
  let total = 0;
  cart &&
    cart.map((item) => {
      let price = item.price;

      const priceNumber = parseFloat(price.replace("$", ""));
      let quality = item.quality;

      let itemPrice = priceNumber * quality;
      total = total + itemPrice; // Kết quả sẽ là 99
    });
  console.log(total);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Dữ liệu của form
    // Gửi dữ liệu lên server hoặc thực hiện các xử lý khác
  };
  return (
    <>
      <div className="paymentsform">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="payments1">
              {" "}
              <h1>PayMents</h1>
              <div>
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
              </div>
              <PaymentForm />
            </Col>
            <Col sm={12} md={6} lg={6} className="payments2">
              {cart &&
                cart.map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index}>
                      <h1>{item.title}</h1>
                      <img src={item.images} />
                      <p>{item.price}</p>
                      <CounterApp />
                    </div>
                  );
                })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PayMents;
