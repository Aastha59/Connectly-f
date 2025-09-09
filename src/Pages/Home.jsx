// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "../components/SearchForm";
// import ContactsTable from "../components/ContactsTable";
// import EmailSection from "../components/EmailSection";

// function Home() {
//   const [contacts, setContacts] = useState([]);
//   const [templates, setTemplates] = useState([]);
//   const [role, setRole] = useState("");
//   const [country, setCountry] = useState("");
//   const [profile, setProfile] = useState("linkedin");
//   const [contactType, setContactType] = useState("gmail");
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");
//   const [status, setStatus] = useState("");
//   const [attachmentFile, setAttachmentFile] = useState(null);
//   const [senderEmail, setSenderEmail] = useState("");

//   // OAuth states
//   const [googleToken, setGoogleToken] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         setGoogleToken(tokenResponse.access_token);
//         const resp = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//           headers: {
//             Authorization: `Bearer ${tokenResponse.access_token}`,
//           },
//         });
//         setUserProfile(resp.data);
//         setSenderEmail(resp.data.email);
//         setStatus(""); // reset status on success
//       } catch (e) {
//         console.error("Failed fetching user info:", e);
//         setStatus("Failed to get user info from Google.");
//       }
//     },
//     onError: (error) => {
//       console.error("Google Login Error:", error);
//       setStatus("Google login failed. Please try again.");
//     },
//     scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     googleLogout();
//     setGoogleToken(null);
//     setUserProfile(null);
//     setSenderEmail("");
//     setStatus("");
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);

//     try {
//       // const resp = await axios.post("http://localhost:8000/api/search", {
//       const resp = await axios.post("https://connectly-b-1.onrender.com/api/search", {
//         role,
//         country,
//         profile,
//         contact_type: contactType,
//       });
//       setContacts(resp.data.contacts);
//       console.log("Contacts Found:", resp.data.contacts);

//       // const tmpl = await axios.post("http://localhost:8000/api/templates");
//       const tmpl = await axios.post("https://connectly-b-1.onrender.com/api/templates");
//       setTemplates(tmpl.data.templates);
//     } catch (err) {
//       console.error("Error during search:", err);
//       setStatus("Failed to search contacts.");
//     }
//   };

//   const handleTemplateSelect = (t) => {
//     setSubject(t.subject.replace("{role}", role).replace("{country}", country));
//     setBody(t.body.replace("{role}", role).replace("{country}", country));
//   };

//   const handleAttachmentChange = (e) => {
//     if (e.target.files.length > 0) {
//       setAttachmentFile(e.target.files[0]);
//     } else {
//       setAttachmentFile(null);
//     }
//   };

//   const handleSend = async () => {
//     if (contacts.length === 0) {
//       setStatus("No contacts to send emails.");
//       return;
//     }
//     if (!googleToken) {
//       setStatus("Please log in with Google to send emails.");
//       return;
//     }
//     if (!senderEmail || senderEmail.trim() === "") {
//       setStatus("Sender email address is required.");
//       return;
//     }
//     setStatus("Sending emails...");

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     formData.append("gmail_token", googleToken);
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         // "http://localhost:8000/api/send_email_with_attachment_oauth",
//         "https://connectly-b-1.onrender.com/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       console.error("Email sending error:", error);
//       setStatus("Error sending emails. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen-80vh flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-50 rounded-lg shadow-xl p-6 mt-5 mb-5 w-full max-w-4xl">
//         <h1 className="text-4xl font-bold mb-4 mt-0.5 text-center text-indigo-700"><i><b>Connectly</b></i></h1>

//         {!googleToken ? (
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
//             onClick={() => login()}
//             type="button"
//           >
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-6">
//             <span className="text-green-800 font-bold mr-4">Signed in as {userProfile?.email}</span>
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
//               onClick={logout}
//               type="button"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         <div className="mb-6">
//           <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
//             Sender Email Address
//           </label>
//           <input
//             id="senderEmail"
//             name="senderEmail"
//             type="email"
//             placeholder="your-email@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="w-full px-3 py-1 border border-gray-300 rounded"
//             autoComplete="email"
//           />
//         </div>

//         <SearchForm onSearch={handleSearch} />

//         {contacts.length > 0 && <ContactsTable contacts={contacts} type={contactType} />}

//         {templates.length > 0 && (
//           <>
//             <EmailSection
//               templates={templates}
//               onTemplateSelect={handleTemplateSelect}
//               body={body}
//               setBody={setBody}
//               subject={subject}
//               setSubject={setSubject}
//               onSend={handleSend}
//               status={status}
//             />
//             <div className="mt-6">
//               <label className="block mb-2 font-semibold text-gray-700" htmlFor="attachment">
//                 Attach a file (optional)
//               </label>
//               <input
//                 id="attachment"
//                 type="file"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import SearchForm from "../components/SearchForm";
import ContactsTable from "../components/ContactsTable";
import EmailSection from "../components/EmailSection";
import AdBanner from "../components/AdBanner";
import connectlyLogo from "../I4.png";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState("linkedin");
  const [contactType, setContactType] = useState("gmail");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [senderEmail, setSenderEmail] = useState("");

  // OAuth states
  const [googleToken, setGoogleToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setGoogleToken(tokenResponse.access_token);
        const resp = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setUserProfile(resp.data);
        setSenderEmail(resp.data.email);
        setStatus(""); // reset status on success
      } catch (e) {
        console.error("Failed fetching user info:", e);
        setStatus("Failed to get user info from Google.");
      }
    },
    onError: (error) => {
      console.error("Google Login Error:", error);
      setStatus("Google login failed. Please try again.");
    },
    scope:
      "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
    flow: "implicit",
  });

  const logout = () => {
    googleLogout();
    setGoogleToken(null);
    setUserProfile(null);
    setSenderEmail("");
    setStatus("");
  };

  const handleSearch = async (role, country, profile, contactType) => {
    setRole(role);
    setCountry(country);
    setProfile(profile);
    setContactType(contactType);

    try {
      const resp = await axios.post(
        "https://connectly-b-1.onrender.com/api/search",
        {
          role,
          country,
          profile,
          contact_type: contactType,
        }
      );
      setContacts(resp.data.contacts);
      console.log("Contacts Found:", resp.data.contacts);

      const tmpl = await axios.post(
        "https://connectly-b-1.onrender.com/api/templates"
      );
      setTemplates(tmpl.data.templates);
    } catch (err) {
      console.error("Error during search:", err);
      setStatus("Failed to search contacts.");
    }
  };

  const handleTemplateSelect = (t) => {
    setSubject(t.subject.replace("{role}", role).replace("{country}", country));
    setBody(t.body.replace("{role}", role).replace("{country}", country));
  };

  const handleAttachmentChange = (e) => {
    if (e.target.files.length > 0) {
      setAttachmentFile(e.target.files[0]);
    } else {
      setAttachmentFile(null);
    }
  };

  const handleSend = async () => {
    if (contacts.length === 0) {
      setStatus("No contacts to send emails.");
      return;
    }
    if (!googleToken) {
      setStatus("Please log in with Google to send emails.");
      return;
    }
    if (!senderEmail || senderEmail.trim() === "") {
      setStatus("Sender email address is required.");
      return;
    }
    setStatus("Sending emails...");

    const formData = new FormData();
    formData.append("emails", contacts.join(","));
    formData.append("subject", subject);
    formData.append("body", body);
    formData.append("sender_email", senderEmail.trim());
    formData.append("gmail_token", googleToken);
    if (attachmentFile) {
      formData.append("attachment", attachmentFile);
    }

    try {
      const resp = await axios.post(
        "https://connectly-b-1.onrender.com/api/send_email_with_attachment_oauth",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setStatus(resp.data.message);
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Error sending emails. Please try again.");
    }
  };

  return (
    <div className="min-h-screen-80vh flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="bg-white bg-opacity-50 rounded-lg shadow-xl p-6 mt-5 mb-5 w-full max-w-4xl">
        <img
          src={connectlyLogo}
          alt="Connectly AI Logo"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />

        {/* <h1 className="text-4xl font-bold mb-4 mt-0.5 text-center text-indigo-700">
          <i>
            <b>Connectly</b>
          </i>
        </h1> */}
        {/* <p className="text-md text-gray-800 mb-6 text-center">
          Connectly is a secure communication platform for professionals and businesses, enabling users to discover contacts, customize outreach, and send emails with attachments directly via Gmail. Streamline project collaboration and communication from any location.
        </p> */}

        {/* Creative Section START */}
        <div className="mb-6">
          {/* <div className="text-xl font-semibold text-center mb-2 text-purple-700">
            Instantly connect and engage — seamless outreach made simple.
          </div> */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-indigo-100 rounded-lg p-3 flex flex-col items-center w-40">
              <span
                role="img"
                aria-label="Bulk Email"
                className="text-3xl mb-2"
              >
                📧
              </span>
              <span className="font-bold">Bulk Email Send</span>
              <span className="text-xs text-gray-500 mt-1 text-center">
                Send emails to multiple contacts with one click.
              </span>
            </div>
            <div className="bg-indigo-100 rounded-lg p-3 flex flex-col items-center w-40">
              <span role="img" aria-label="Contacts" className="text-3xl mb-2">
                🧑‍💼
              </span>
              <span className="font-bold">Contact Discovery</span>
              <span className="text-xs text-gray-500 mt-1 text-center">
                Find professional contacts by role and country.
              </span>
            </div>
            <div className="bg-indigo-100 rounded-lg p-3 flex flex-col items-center w-40">
              <span
                role="img"
                aria-label="Google Lock"
                className="text-3xl mb-2"
              >
                🔒
              </span>
              <span className="font-bold">Secure Google Integration</span>
              <span className="text-xs text-gray-500 mt-1 text-center">
                Safe, verified connection via Google OAuth.
              </span>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 mb-3">
            <h2 className="text-lg font-bold mb-2 text-indigo-700 text-center">
              How It Works
            </h2>
            <ol className="list-decimal ml-8 text-left text-gray-800">
              <li>Search for professional contacts by job category/Position</li>
              <li>Choose or customize your outreach message</li>
              <li>
                Send personalized emails securely with attachments— track
                results
              </li>
            </ol>
          </div>
          <div className="mb-4 flex flex-col items-center">
            
            {/* Above AdBanner for substantial content */}
            {/* Add between 'How It Works' and <AdBanner />, or above your first <AdBanner /> placement */}
            <div className="bg-white bg-opacity-80 rounded-lg p-4 mb-6 shadow">
              <h2 className="text-xl font-bold text-indigo-600 mb-2">
                About Connectly 
              </h2>
              <p className="text-gray-800">
                Connectly empowers job seekers, professionals, and startups
                to discover business contacts, send personalized outreach
                emails, and track responses—all with secure integration to Gmail
                and LinkedIn. Our platform is trusted by global teams for
                frictionless, automated communication.
              </p>
              <h3 className="text-lg font-semibold text-indigo-500 mt-4 mb-1">
                Pro Tips for Outreach Success
              </h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>
                  Personalize your subject and email for every role and country.
                </li>
                <li>Attach relevant documents to build credibility.</li>
                <li>Track follow-up responses to improve engagement.</li>
              </ul>
            </div>
          {/* <AdBanner /> */}
          
            {/* <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full hover:scale-105 transition">
              Try Free Demo
            </button> */}
            {/* <div className="mt-2 text-sm text-gray-600">
              Trusted by modern teams worldwide.
              <span className="inline-block ml-2 align-middle" title="OAuth Verified">🔒 Google OAuth Verified</span>
            </div> */}
          </div>
        </div>
        {/* Creative Section END */}

        {/* ✅ Place Ad Banner here */}
        {/* <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6277101097929109"
          data-ad-slot="7281837333"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins> */}

        <AdBanner />

        {!googleToken ? (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
            onClick={() => login()}
            type="button"
          >
            Sign in with Google to Send Emails
          </button>
        ) : (
          <div className="flex items-center mb-6">
            <span className="text-green-800 font-bold mr-4">
              Signed in as {userProfile?.email}
            </span>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </div>
        )}

        <div className="mb-6">
          <label
            htmlFor="senderEmail"
            className="block font-semibold text-gray-700 mb-1"
          >
            Sender Email Address
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            placeholder="your-email@example.com"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded"
            autoComplete="email"
          />
        </div>

        <SearchForm onSearch={handleSearch} />

        {contacts.length > 0 && (
          <ContactsTable contacts={contacts} type={contactType} />
        )}

        {templates.length > 0 && (
          <>
            <EmailSection
              templates={templates}
              onTemplateSelect={handleTemplateSelect}
              body={body}
              setBody={setBody}
              subject={subject}
              setSubject={setSubject}
              onSend={handleSend}
              status={status}
            />
            <div className="mt-6">
              <label
                className="block mb-2 font-semibold text-gray-700"
                htmlFor="attachment"
              >
                Attach a file (optional)
              </label>
              <input
                id="attachment"
                type="file"
                onChange={handleAttachmentChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </>
        )}

        {/* ✅ Place Ad Banner here */}

        {/* <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-6277101097929109"
          data-ad-slot="7281837333"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins> */}
        {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}

        {/* <AdBanner /> */}
      </div>
    </div>
  );
}

export default Home;




// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "../components/SearchForm";
// import ContactsTable from "../components/ContactsTable";
// import EmailSection from "../components/EmailSection";

// function Home() {
//   const [contacts, setContacts] = useState([]);
//   const [templates, setTemplates] = useState([]);
//   const [role, setRole] = useState("");
//   const [country, setCountry] = useState("");
//   const [profile, setProfile] = useState("linkedin");
//   const [contactType, setContactType] = useState("gmail");
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");
//   const [status, setStatus] = useState("");
//   const [attachmentFile, setAttachmentFile] = useState(null);
//   const [senderEmail, setSenderEmail] = useState("");

//   // OAuth states
//   const [googleToken, setGoogleToken] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         setGoogleToken(tokenResponse.access_token);
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           {
//             headers: {
//               Authorization: `Bearer ${tokenResponse.access_token}`,
//             },
//           }
//         );
//         setUserProfile(resp.data);
//         setSenderEmail(resp.data.email);
//         setStatus(""); // reset status on success
//       } catch (e) {
//         console.error("Failed fetching user info:", e);
//         setStatus("Failed to get user info from Google.");
//       }
//     },
//     onError: (error) => {
//       console.error("Google Login Error:", error);
//       setStatus("Google login failed. Please try again.");
//     },
//     scope:
//       "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     googleLogout();
//     setGoogleToken(null);
//     setUserProfile(null);
//     setSenderEmail("");
//     setStatus("");
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);

//     try {
//       const resp = await axios.post(
//         "https://connectly-b-1.onrender.com/api/search",
//         {
//           role,
//           country,
//           profile,
//           contact_type: contactType,
//         }
//       );
//       setContacts(resp.data.contacts);
//       console.log("Contacts Found:", resp.data.contacts);

//       const tmpl = await axios.post(
//         "https://connectly-b-1.onrender.com/api/templates"
//       );
//       setTemplates(tmpl.data.templates);
//     } catch (err) {
//       console.error("Error during search:", err);
//       setStatus("Failed to search contacts.");
//     }
//   };

//   const handleTemplateSelect = (t) => {
//     setSubject(t.subject.replace("{role}", role).replace("{country}", country));
//     setBody(t.body.replace("{role}", role).replace("{country}", country));
//   };

//   const handleAttachmentChange = (e) => {
//     if (e.target.files.length > 0) {
//       setAttachmentFile(e.target.files[0]);
//     } else {
//       setAttachmentFile(null);
//     }
//   };

//   const handleSend = async () => {
//     if (contacts.length === 0) {
//       setStatus("No contacts to send emails.");
//       return;
//     }
//     if (!googleToken) {
//       setStatus("Please log in with Google to send emails.");
//       return;
//     }
//     if (!senderEmail || senderEmail.trim() === "") {
//       setStatus("Sender email address is required.");
//       return;
//     }
//     setStatus("Sending emails...");

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     formData.append("gmail_token", googleToken);
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "https://connectly-b-1.onrender.com/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       console.error("Email sending error:", error);
//       setStatus("Error sending emails. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen-80vh flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-50 rounded-lg shadow-xl p-6 mt-5 mb-5 w-full max-w-4xl">
//         <h1 className="text-4xl font-bold mb-4 mt-0.5 text-center text-indigo-700">
//           <i>
//             <b>Connectly</b>
//           </i>
//         </h1>

//         {/* Google AdSense ad unit - place it below your header/title */}

//         <script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6277101097929109"
//           crossorigin="anonymous"
//         ></script>
//         {/* <!-- Connectly ai --> */}
//         <ins
//           class="adsbygoogle"
//           style="display:block"
//           data-ad-client="ca-pub-6277101097929109"
//           data-ad-slot="7281837333"
//           data-ad-format="auto"
//           data-full-width-responsive="true"
//         ></ins>
//         <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

//         <ins
//           className="adsbygoogle"
//           style={{ display: "block" }}
//           data-ad-client="ca-pub-6277101097929109"
//           data-ad-slot="7281837333"
//           data-ad-format="auto"
//           data-full-width-responsive="true"
//         ></ins>
//         <script>{(adsbygoogle = window.adsbygoogle || []).push({})}</script>

//         {!googleToken ? (
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
//             onClick={() => login()}
//             type="button"
//           >
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-6">
//             <span className="text-green-800 font-bold mr-4">
//               Signed in as {userProfile?.email}
//             </span>
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
//               onClick={logout}
//               type="button"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         <div className="mb-6">
//           <label
//             htmlFor="senderEmail"
//             className="block font-semibold text-gray-700 mb-1"
//           >
//             Sender Email Address
//           </label>
//           <input
//             id="senderEmail"
//             name="senderEmail"
//             type="email"
//             placeholder="your-email@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="w-full px-3 py-1 border border-gray-300 rounded"
//             autoComplete="email"
//           />
//         </div>

//         <SearchForm onSearch={handleSearch} />

//         {contacts.length > 0 && (
//           <ContactsTable contacts={contacts} type={contactType} />
//         )}

//         {templates.length > 0 && (
//           <>
//             <EmailSection
//               templates={templates}
//               onTemplateSelect={handleTemplateSelect}
//               body={body}
//               setBody={setBody}
//               subject={subject}
//               setSubject={setSubject}
//               onSend={handleSend}
//               status={status}
//             />
//             <div className="mt-6">
//               <label
//                 className="block mb-2 font-semibold text-gray-700"
//                 htmlFor="attachment"
//               >
//                 Attach a file (optional)
//               </label>
//               <input
//                 id="attachment"
//                 type="file"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
