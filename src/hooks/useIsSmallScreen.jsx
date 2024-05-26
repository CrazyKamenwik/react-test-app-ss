import { useEffect, useState } from "react";

const useIsSmallScreen = (maxWidth = 361) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < maxWidth
  );

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < maxWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return isSmallScreen;
};

export default useIsSmallScreen;
