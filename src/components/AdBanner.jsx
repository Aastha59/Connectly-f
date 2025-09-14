// import React, { useEffect } from "react";

// function AdBanner() {
//   useEffect(() => {
//     try {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     } catch (e) {
//       console.error("Adsense error", e);
//     }
//   }, []);

//   return (
//     <ins
//       className="adsbygoogle"
//       style={{ display: "block", margin: "20px auto", textAlign: "center" }}
//       data-ad-client="ca-pub-6277101097929109"
//       data-ad-slot="7281837333"  
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     ></ins>
//   );
// }

// export default AdBanner;








import React, { useEffect, useRef } from "react";

function AdBanner({ slot = "7281837333" }) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // Only push if this ad container hasn't already been filled
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", margin: "20px auto", textAlign: "center" }}
      data-ad-client="ca-pub-6277101097929109"
      data-ad-slot={slot}   // ✅ dynamic slot, defaults to your current one
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

export default AdBanner;
