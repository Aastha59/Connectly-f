import React, { useState, useMemo, createContext } from "react";
import Privacy from "./Pages/Privacy";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";

// --- Theme Context Setup (for global switching) ---
export const ThemeContext = createContext();

const linkedinLogo = (
  <svg
    height="20"
    width="20"
    fill="#0A66C2"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V9h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76S5.53 4.2 6.5 4.2s1.75.79 1.75 1.77S7.47 7.73 6.5 7.73zM20 19h-3v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V19h-3V9h2.88v1.37h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53V19z" />
  </svg>
);

const mailLogo = (
  <svg
    height="20"
    width="20"
    fill="#EA4335"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M12 13.065l-11.923-7.985c.116-.389.460-.692.895-.692h21.056c.436 0 .779.303.895.692l-11.923 7.985zm12-8.066c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-2 2.665v11.335c0 .552-.447 1-1 1h-18c-.553 0-1-.448-1-1v-11.335l9.537 6.385c.288.192.672.192.960 0l9.503-6.385z" />
  </svg>
);

const instagramLogo = (
  <svg
    height="20"
    width="20"
    fill="#C13584"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
  </svg>
);

// --- NEW ICONS IN HEADER ---
const themeIcon = (theme) =>
  theme === "light" ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#FFD700"
      style={{ verticalAlign: "middle" }}
    >
      {/* Sun/light theme */}
      <circle cx="12" cy="12" r="5" fill="#FFD700" />
      <g stroke="#FFD700" strokeWidth="2">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="7" y2="7" />
        <line x1="17" y1="17" x2="19" y2="19" />
        <line x1="17" y1="7" x2="19" y2="5" />
        <line x1="5" y1="19" x2="7" y2="17" />
      </g>
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="#222"
      style={{ verticalAlign: "middle" }}
    >
      {/* Moon/dark theme */}
      <path
        d="M21.75 15.71A9.211 9.211 0 0 1 12 21A9 9 0 0 1 12 3A8.987 8.987 0 0 1 20.75 8.29C20.47 8.31 20.19 8.34 19.91 8.36C18.01 8.51 16.38 10.4 16.53 12.58C16.63 14.26 18.06 15.66 19.78 15.71Z"
        fill="#FFD700"
      />
    </svg>
  );

const homeIcon = (
  <svg
    width="24"
    height="24"
    fill="#308fa7"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M12 3l9 9h-6v9h-6v-9H3z" />
  </svg>
);

// const contactIcon = (
//   <svg width="24" height="24" fill="#308fa7" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
//     <path d="M21 8V7l-3 2.29v2.51 ...z" />
//   </svg>
// );

const contactIcon = (
  <svg
    width="36"
    height="36"
    fill="#308fa7"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 12V8.99l-8 6.99-8-6.99V18h16z" />
  </svg>
);

const profileIcon = (
  <svg
    width="24"
    height="24"
    fill="#308fa7"
    viewBox="0 0 24 24"
    style={{ verticalAlign: "middle" }}
  >
    <circle cx="12" cy="8" r="4" />
    <rect x="6" y="14" width="12" height="6" rx="6" />
  </svg>
);

const linkedInURL = "https://www.linkedin.com/in/aastha-arya-53a743230/";
const emailAddress = "aasthaarya2004@gmail.com";
const instagramURL =
  "https://www.instagram.com/connectlyai.in?igsh=Y3dpbjRoanQ3dmVt";

// --- MODIFIED HEADER BAR COMPONENT ---
function TopRightHeader({
  theme,
  toggleTheme,
  userProfile,
  login,
  logout,
  navigate,
  location,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "26px",
        // bottom: "1px",
        right: "32px",
        display: "flex",
        gap: "5px",
        zIndex: 99,
        // background: "rgba(255,255,255,0.72)",
        borderRadius: "18px",
        // boxShadow: "0 2px 11px rgba(44,96,216,0.07)",
        padding: "0px 0px",
        alignItems: "center",
        // backdropFilter: "blur(1.7px)",
        // transition: "background 0.3s",
      }}
    >
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        title={
          theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
        style={{
          background: "none",
          border: "1px solid #ccc", // optional subtle border
          borderRadius: "8px", // tighter corners
          width: "36px", // ✅ reduced width
          height: "36px", // ✅ makes it a small square
          display: "flex", // ✅ centers icon
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: "0", // ✅ removes extra spacing
          margin:"0", // ✅ removes unwanted top margin
        }}
      >
        {themeIcon(theme)}
      </button>

      {/* Home button, disabled on home */}
      <button
        onClick={() => location.pathname !== "/" && navigate("/")}
        title="Go to Home"
        disabled={location.pathname === "/"}
        style={{
          // background: location.pathname === "/" ? "#eee" : "#f5f5f5", // ✅ always a solid bg
          background: "none",
          border: "1px solid #ddd", // ✅ subtle border for better visibility
          borderRadius: "8px", // ✅ rounded corners
          padding: "6px 10px",
          cursor: location.pathname === "/" ? "not-allowed" : "pointer",
          opacity: location.pathname === "/" ? 0.6 : 1,
          transition: "background 0.2s ease",
          margin:"0",
        }}
      >
        {homeIcon}
      </button>

      {/* Contact button */}
      <a
        href={`mailto:${emailAddress}?subject=Connectly Support Query`}
        title="Contact Support"
        style={{
          background: "none",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "38px", // ✅ same as theme button
          height: "34px", // ✅ same as theme button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: "0", // ✅ removes extra spacing
          margin: "0", // ✅ removes unwanted top margin
        }}
      >
        {contactIcon}
      </a>

      {/* Profile button / login */}
      {/* {userProfile ?
        <div title={`Logged in: ${userProfile.email}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            padding: "0 9px",
            background: "#e1eff6",
            borderRadius: "22px",
            fontSize: "0.98rem",
            color: "#308fa7",
            cursor: "pointer"
          }}>
          {profileIcon}
          <span style={{ fontWeight: "600" }}>{userProfile.email}</span>
          <button
            onClick={logout}
            style={{
              background: "none",
              border: "none",
              color: "#d55",
              fontWeight: "600",
              marginLeft: "7px",
              cursor: "pointer",
            }}
            title="Logout"
          >Logout</button>
        </div>
        :
        <button
          onClick={login}
          title="Login with Google"
          style={{
            background: "#c0eaff",
            border: "none",
            color: "#308fa7",
            fontWeight: "600",
            borderRadius: "22px",
            padding: "0 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {profileIcon}
          <span>Login</span>
        </button>
      } */}
    </div>
  );
}

// --- APP COMPONENT ---
function App() {
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  // Auth state lifted to App for Profile icon
  const [googleToken, setGoogleToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // Theme toggle function
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Setup theme classes on <body> root for global effect
  React.useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [theme]);

  // For routing/navigation and location (to control Home button and current path)
  const RoutingWithHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Props for Google login handlers passed to Home
    const login = () =>
      window.dispatchEvent(new CustomEvent("connectly-google-login")); // triggers Home login
    const logout = () =>
      window.dispatchEvent(new CustomEvent("connectly-google-logout")); // triggers Home logout

    return (
      <>
        {/* Header Bar with icons */}
        <TopRightHeader
          theme={theme}
          toggleTheme={toggleTheme}
          userProfile={userProfile}
          login={login}
          logout={logout}
          navigate={navigate}
          location={location}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ThemeContext.Provider
                value={{
                  theme,
                  setTheme,
                  googleToken,
                  setGoogleToken,
                  userProfile,
                  setUserProfile,
                }}
              >
                <Home
                  googleToken={googleToken}
                  setGoogleToken={setGoogleToken}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />
              </ThemeContext.Provider>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <div
        className={`app-container ${theme === "dark" ? "dark-mode" : ""}`}
        style={{
          minHeight: "97vh",
          display: "flex",
          flexDirection: "column",
          background:
            theme === "dark"
              ? "linear-gradient(90deg, #1a183d 0%, #191b2a 100%)"
              : "linear-gradient(90deg, #a8d0ff 0%, #002366 100%)",
          transition: "background 0.25s",
        }}
      >
        <RoutingWithHeader />

        {/* --- Footer stays as before, but respects theme --- */}
        <footer
          style={{
            position: "relative",
            textAlign: "center",
            marginTop: "auto",
            padding: "28px 8px 16px 8px",
            background:
              theme === "dark"
                ? "linear-gradient(90deg, #232e3b 0%, #11203a 100%)"
                : "linear-gradient(90deg, #a8d0ff 0%, #002366 100%)",
            color: "#f8f8f8",
            borderTop: "2px solid #dedede",
            boxShadow: "0 -4px 18px rgba(0, 35, 102, 0.2)",
            borderRadius: "0 0 18px 18px",
            transition: "background 0.2s",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              fontSize: "1.14rem",
              fontWeight: "500",
              letterSpacing: "0.01em",
            }}
          >
            Powered by{" "}
            <span style={{ color: "#fff", fontWeight: "700" }}>Connectly</span>{" "}
            — Automated Outreach & Discovery
          </div>
          <div style={{ marginBottom: "12px" }}>
            <Link
              to="/privacy"
              style={{
                color: "#fff",
                marginRight: "20px",
                textDecoration: "underline",
                transition: "color 0.2s",
                fontWeight: "600",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                color: "#fff",
                textDecoration: "underline",
                transition: "color 0.2s",
                fontWeight: "600",
              }}
            >
              Terms & Conditions
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "28px",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <a
              href={linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 14px",
                borderRadius: "20px",
                background: "rgba(10,102,194,0.08)",
                border: "1px solid #0A66C2",
                transition: "background 0.2s",
              }}
            >
              {linkedinLogo}
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${emailAddress}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 14px",
                borderRadius: "20px",
                background: "rgba(234,67,53,0.08)",
                border: "1px solid #EA4335",
                transition: "background 0.2s",
              }}
            >
              {mailLogo}
              <span>Email Us</span>
            </a>
            <a
              href={instagramURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 14px",
                borderRadius: "20px",
                background: "rgba(193,53,132,0.10)",
                border: "1px solid #C13584",
                transition: "background 0.2s",
              }}
            >
              {instagramLogo}
              <span>Instagram</span>
            </a>
          </div>
          <div style={{ marginTop: "5px", fontSize: "0.93rem", color: "#ddd" }}>
            &copy; {new Date().getFullYear()} Connectly. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
