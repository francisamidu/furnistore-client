import { ImageProps } from "next/image";

type ImgProps = ImageProps & {
  width?: number;
  height?: number;
};

export default ImgProps;
