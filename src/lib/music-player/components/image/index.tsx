interface IImageProps {
  src: string;
}

const Image = ({ src }: IImageProps) => <img src={src} height="100%" />;

export default Image;
