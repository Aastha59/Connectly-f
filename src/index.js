// import React from "react";
// import ReactDOM from "react-dom";
// import "./App.css";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));





// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";
// import App from "./App";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const CLIENT_ID = "370088918504-lolrb1et8pj4jdchnencktl3s43ukspg.apps.googleusercontent.com";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <GoogleOAuthProvider clientId={CLIENT_ID}>
//     <App />
//   </GoogleOAuthProvider>
// );









// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./App.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const CLIENT_ID = "552274412896-2r5qc6oqsvgje1btr033i6u7uh1q0lpm.apps.googleusercontent.com";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <GoogleOAuthProvider clientId={CLIENT_ID}>
//     <App />
//   </GoogleOAuthProvider>
// );










import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Replace with your actual Google OAuth Client ID
const CLIENT_ID = "552274412896-2r5qc6oqsvgje1btr033i6u7uh1q0lpm.apps.googleusercontent.com";
// const CLIENT_ID = "552274412896-3ls9l6avlc47k4p76oi1m5q3biikbdao.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);