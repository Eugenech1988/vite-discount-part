import { useEffect, useState } from "react";
const useSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
};

export default useSize;