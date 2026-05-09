import { PropsWithChildren, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { LoadingContext, LoadingType } from "./LoadingContext";
import { smoother } from "../components/Navbar";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      // Unpause the smoother and unlock scroll
      const unpauseSmoother = () => {
        if (smoother) {
          smoother.paused(false);
          document.body.style.overflow = ""; // Let ScrollSmoother handle overflow
          setTimeout(() => {
            ScrollSmoother.refresh(true);
          }, 100);
          return true;
        }
        return false;
      };

      // Try immediately
      if (!unpauseSmoother()) {
        // If not ready, poll for a short bit
        const interval = setInterval(() => {
          if (unpauseSmoother()) {
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 2000); // Stop after 2s
      }
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body" style={{ opacity: isLoading ? 0 : 1, transition: "opacity 1s ease-in-out" }}>
        {children}
      </main>
    </LoadingContext.Provider>
  );
};

export { useLoading } from "./LoadingContext";
