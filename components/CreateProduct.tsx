import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { useUploadImageMutation, useLazyCreateProductQuery } from "../services";
import Button from "./Button";

const CreateProduct = () => {
  const [uploadImage, { isLoading, isSuccess, isError, data, error }] =
    useUploadImageMutation();
  const [createProduct, createProductResponse] = useLazyCreateProductQuery({});
  const [product, setProduct] = useState({
    description: "",
    name: "",
    categories: null as any,
    color: "",
    size: "",
    price: 0,
    quantity: 0,
    image: null as any,
    category: "",
  });
  const [image, setImage] = useState<any>(null);

  const [category, setCategory] = useState("");
  const [actionText, setActionText] = useState("Create Product");

  const finishProductCreation = async () => {
    try {
      setProduct({ ...product, image });
      await createProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  const run = async () => {
    await finishProductCreation();
  };
  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    setProduct({
      ...product,
      categories: category.split(","),
    });
    try {
      const formData = new FormData();
      formData.append("image", image);
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
    if (isSuccess && typeof data.imageUrl === "string") {
      setProduct({ ...product, image: data.imageUrl });
      console.log(product);
    }
    if (isError) {
      console.log(`Whoops! ${JSON.stringify(error)}`);
    }
  }, [isLoading, isSuccess, isError, data]);

  useEffect(() => {
    if (product.image) {
      run();
    }
  }, [data]);
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
            onChange={(event) => setCategory(event.target.value)}
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
              setImage(event?.target?.files[0])
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
