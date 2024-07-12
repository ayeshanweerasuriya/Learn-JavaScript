import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    const handleSizeEvent = (e) => {
      console.log("window Resized");
    };

    window.addEventListener("resize", handleSizeEvent);

    return () => {
      window.removeEventListener("resize", handleSizeEvent);
      console.log("cleaned up window resize event");
    };
  }, []);
}
