import { StrictMode, useState, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

const DesktopApp = lazy(() => import("./App.tsx"));
const MobileApp = lazy(() => import("../srcxx/App.jsx"));

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </Suspense>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
