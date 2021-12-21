import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { useUploadImageMutation } from "../services/imageUploadApi";
import Button from "./Button";

const CreateProduct = () => {
  const [uploadImage, { isLoading, isSuccess, isError, data, error }] =
    useUploadImageMutation();
  const [product, setProduct] = useState({
    description: "",
    name: "",
    categories: null,
    color: "",
    size: "",
    price: 0,
    quantity: 0,
    image: null as any,
    category: "",
  });
  const [actionText, setActionText] = useState("Create Product");
  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", product.image);
      await uploadImage({ file: formData });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const isNew = Object.values(product).every((value: any) => !!value);
    if (isNew) {
      setActionText("Update Product");
    }
  });
  useEffect(() => {
    if (isLoading) {
      console.log("Uploading...");
    }
    if (isSuccess) {
      console.log("It worked");
      console.log(data);
    }
    if (isError) {
      console.log(`Whoops! ${JSON.stringify(error)}`);
    }
    console.log(data);
  }, [isLoading, isSuccess, isError, data]);
  return (
    <section className="bg-white flex-6">
      <form
        className="md:max-w-screen-sm md:m-auto py-8"
        onSubmit={(event: SyntheticEvent) => submitHandler(event)}
      >
        <h1 className="text-3xl text-gray-500">Create new product</h1>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="product-name"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, name: event.target.value })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, color: event.target.value })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            id="categories"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, category: event.target.value })
            }
          />
          <span className="text-red-500 mt-2">*Comma separated categories</span>
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            id="description"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, description: event.target.value })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, size: event.target.value })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, price: parseInt(event.target.value) })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            id="quantity"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event) =>
              setProduct({ ...product, quantity: parseInt(event.target.value) })
            }
          />
        </div>
        <div className="input-group flex flex-col pr-4 mt-4 w-full">
          <label htmlFor="quantity">Image</label>
          <input
            type="file"
            id="image"
            className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
            onChange={(event: ChangeEvent<any>) =>
              setProduct({ ...product, image: event?.target?.files[0] })
            }
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Button
            text={actionText}
            icon={<AiOutlineSave className="text-white" />}
          />
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;
