import { useEffect } from "react";

export const useFacebookSDK = () => {
  useEffect(() => {
    // Avoid running in development mode
    if (import.meta.env.MODE === "development") return;

    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) {
        (window as any).FB?.XFBML.parse();
        return;
      }

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";

      script.onload = () => {
        (window as any).FB?.XFBML.parse();
      };

      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);
};
