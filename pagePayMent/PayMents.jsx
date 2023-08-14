import { useForm, Controller } from "react-hook-form";

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
      <h1>PayMents</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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

          <div>
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

          <div>
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

          <div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
      {cart &&
        cart.map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img src={item.images} />
              <p>{item.price}</p>
            </div>
          );
        })}
      ;
    </>
  );
};

export default PayMents;
