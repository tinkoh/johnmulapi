import { useRef } from "react";
import { Image } from "@chakra-ui/react";

import useMouseLocation from "./hooks/useMouseLocation";
import mulaneyImage from "../../../assets/mulaney.png";

const Image_ = () => {
  const mouseLocation = useMouseLocation();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const bounds = imageRef.current?.getBoundingClientRect() || {
    x: 0,
    y: 0,
  };

  const CONSTRAINT = 150;
  const LIMIT = 2.5;

  const bounding = {
    x: (mouseLocation.x - bounds.x - bounds.x / 2) / CONSTRAINT,
    y: (mouseLocation.y - bounds.y - bounds.y / 2) / CONSTRAINT,
  };

  const perspective = {
    x:
      bounding.x > 0
        ? Math.min(bounding.x, LIMIT)
        : Math.max(bounding.x, -LIMIT),
    y:
      bounding.y > 0
        ? Math.min(bounding.y, LIMIT)
        : Math.max(bounding.y, -LIMIT),
  };

  return (
    <Image
      ref={imageRef}
      src={mulaneyImage}
      alt="John Mulaney"
      mt={8}
      mx="auto"
      zIndex={2}
      style={{
        transform: `perspective(100px) rotateX(${perspective.y}deg) rotateY(${perspective.x}deg)`,
      }}
    />
  );
};

export default Image_;
