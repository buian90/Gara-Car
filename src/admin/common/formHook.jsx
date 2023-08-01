import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProduct = () => {
  const { register, handleSubmit, setValue } = useForm();

  // Giả sử bạn có một đối tượng sản phẩm ban đầu, ví dụ:
  const initialProduct = {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'Description for Product 1',
  };

  // Set giá trị ban đầu cho các trường nhập liệu
  React.useEffect(() => {
    setValue('name', initialProduct.name);
    setValue('price', initialProduct.price);
    setValue('description', initialProduct.description);
  }, [setValue]);

  const onSubmit = (data) => {
    // Thực hiện lưu dữ liệu đã cập nhật lên server ở đây
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name')} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" {...register('price')} />
      </div>
      <div>
        <label>Description:</label>
        <textarea {...register('description')} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UpdateProduct;
