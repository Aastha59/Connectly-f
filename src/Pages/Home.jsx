import React, { useState } from "react";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import SearchForm from "../components/SearchForm";
import ContactsTable from "../components/ContactsTable";
import EmailSection from "../components/EmailSection";
import AdBanner from "../components/AdBanner";
import connectlyLogo from "../I4.png";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
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
        `${process.env.BACKEND_URL}/api/search`,
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
        `${process.env.BACKEND_URL}/api/templates`
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
        `${process.env.BACKEND_URL}/api/send_email_with_attachment_oauth`,
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
    
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#262947] via-[#4851a8] to-[#c2e7f8]">
      {/* <Header /> */}

      <div className="w-full max-w-[940px] bg-white bg-opacity-95 rounded-3xl shadow-2xl p-10 mt-12 mb-12 relative">
        {/* Branding & Dashboard Header */}
        <div className="mx-auto w-[110px] h-[110px] rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#4851a8] to-white shadow mb-8">
          <img src={connectlyLogo} alt="Connectly AI Logo" className="object-contain w-[86px] h-[86px] rounded-lg" />
        </div>
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4452c3] via-[#3797ad] to-[#90def9] text-center mb-2">
          Connectly Outreach AI
        </h1>
        {/* App Feature Cards */}
        <div className="flex flex-row gap-7 justify-center flex-wrap py-5 mb-8">
          <div className="dashboard-card flex flex-col items-center w-52">
            <span className="text-4xl mb-3" role="img" aria-label="Bulk Email">📧</span>
            <span className="font-bold text-[#4452c3] text-base">Bulk Email Send</span>
            <span className="text-xs text-gray-500 text-center mt-1">Send emails to multiple contacts with one click.</span>
          </div>
          <div className="dashboard-card flex flex-col items-center w-52">
            <span className="text-4xl mb-3" role="img" aria-label="Contact Discovery">🧑‍💼</span>
            <span className="font-bold text-[#4452c3] text-base">Contact Discovery</span>
            <span className="text-xs text-gray-500 text-center mt-1">Find professional contacts by role and country.</span>
          </div>
          <div className="dashboard-card flex flex-col items-center w-52">
            <span className="text-4xl mb-3" role="img" aria-label="Google Integration">🔒</span>
            <span className="font-bold text-[#4452c3] text-base">Secure Google Integration</span>
            <span className="text-xs text-gray-500 text-center mt-1">Safe, verified connection via Google OAuth.</span>
          </div>
        </div>
        {/* Workflow Card */}
        <div className="bg-gradient-to-r from-[#ebf1ff] to-[#f8edfa] rounded-2xl p-6 mb-6 max-w-2xl mx-auto shadow">
          <h2 className="text-lg font-bold mb-2 text-[#308fa7] text-center">
            How It Works
          </h2>
          <ol className="list-decimal ml-8 text-left text-[#28306e]">
            <li>Search for professional contacts by role/category</li>
            <li>Choose or customize your outreach message</li>
            <li>Send personalized emails securely with attachments — track results</li>
          </ol>
        </div>
        {/* About & Tips Section */}
        <div className="bg-white bg-opacity-75 rounded-lg p-5 mb-7 shadow">
          <h2 className="text-xl font-bold text-[#308fa7] mb-2">About Connectly</h2>
          <p className="text-[#28306e]">
            Connectly empowers job seekers, professionals, and startups to discover business contacts, send personalized outreach emails, and track responses — all with secure Gmail and LinkedIn integration. Our platform is trusted globally for seamless and automated communication.
          </p>
          <h3 className="text-lg font-semibold text-[#437da7] mt-4 mb-1">Pro Tips for Outreach Success</h3>
          <ul className="list-disc ml-6 text-[#0d2d6f] text-sm">
            <li>Personalize your subject and message for each recipient.</li>
            <li>Attach relevant documents to build credibility.</li>
            <li>Track follow-up responses to boost engagement.</li>
          </ul>
        </div>
        <AdBanner />
        {/* Authentication */}
        {!googleToken ? (
          <button
            className="button btn-primary w-full py-2 mt-3 mb-8 font-bold text-lg"
            onClick={() => login()}
            type="button"
          >
            Sign in with Google to Send Emails
          </button>
        ) : (
          <div className="flex items-center mb-4 gap-2 space-y-4">
            <span className="text-green-700 font-bold mr-3">
              Signed in as {userProfile?.email}
            </span>
            <button
              className="button btn-secondary px-5 py-1 text-red-700 border border-red-300 font-bold rounded-md transition-all text-sm"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </div>
        )}
        {/* Email Inputs */}
        <div className="mb-1">
          <label htmlFor="senderEmail" className="block font-semibold text-[#28306e] mb-1 space-y-4">
            Sender Email Address
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            placeholder="your-email@example.com"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="input-email w-full px-2 py-2 border border-[#7f93d8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308fa7] bg-[#f7f6fd] text-[#222142] shadow space-y-4"
            autoComplete="email"
          />
        </div>
        {/* Search Form */}
        <SearchForm onSearch={handleSearch} />
        {/* Contacts Table */}
        {contacts.length > 0 && (
          <ContactsTable contacts={contacts} type={contactType} />
        )}
        {/* Email Section with Templates */}
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
            {/* File Attachment */}
            <div className="mt-3">
              <label
                className="block mb-1 font-semibold text-[#28306e]"
                htmlFor="attachment"
              >
                Attach a file (optional)
              </label>
              <input
                id="attachment"
                type="file"
                onChange={handleAttachmentChange}
                className="block w-full text-sm text-[#308fa7] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#ebf1ff] file:text-[#308fa7] hover:file:bg-[#bddafa]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Home;







// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "../components/SearchForm";
// import ContactsTable from "../components/ContactsTable";
// import EmailSection from "../components/EmailSection";
// import AdBanner from "../components/AdBanner";
// import connectlyLogo from "../I4.png";
// import { ThemeContext } from "../App";

// function Home(props) {
//   // - Receives `googleToken`, `setGoogleToken`, `userProfile`, `setUserProfile` from App
//   // - ThemeContext for theme switching

//   const { googleToken, setGoogleToken, userProfile, setUserProfile } = props;
//   const themeContext = useContext(ThemeContext);

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

//   // --- Listen for global login/logout events from App header icon
//   useEffect(() => {
//     const googleLoginHandler = () => login();
//     const googleLogoutHandler = () => logout();
//     window.addEventListener("connectly-google-login", googleLoginHandler);
//     window.addEventListener("connectly-google-logout", googleLogoutHandler);
//     return () => {
//       window.removeEventListener("connectly-google-login", googleLoginHandler);
//       window.removeEventListener("connectly-google-logout", googleLogoutHandler);
//     };
//   });

//   // --- NEW useEffect to sync senderEmail with userProfile
//   useEffect(() => {
//     if (userProfile?.email) {
//       setSenderEmail(userProfile.email);
//     }
//   }, [userProfile]);

//   // --- Use react-oauth-google
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
//         setStatus("");
//       } catch (e) {
//         setStatus("Failed to get user info from Google.");
//       }
//     },
//     onError: (error) => {
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
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#262947] via-[#4851a8] to-[#c2e7f8]">
//       <div className="w-full max-w-[940px] bg-white bg-opacity-95 rounded-3xl shadow-2xl p-10 mt-12 mb-12 relative">

//         {/* Branding & Dashboard Header */}
//         <div className="mx-auto w-[100px] h-[110px] rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#4851a8] to-white shadow mb-8">
//           <img src={connectlyLogo} alt="Connectly AI Logo" className="object-contain w-[86px] h-[86px] rounded-lg" />
//         </div>
//         <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4452c3] via-[#3797ad] to-[#90def9] text-center mb-2">
//           Connectly Outreach AI
//         </h1>

//         {/* App Feature Cards */}
//         <div className="flex flex-row gap-7 justify-center flex-wrap py-5 mb-8">
//           <div className="dashboard-card flex flex-col items-center w-52">
//             <span className="text-4xl mb-3" role="img" aria-label="Bulk Email">📧</span>
//             <span className="font-bold text-[#4452c3] text-base">Bulk Email Send</span>
//             <span className="text-xs text-gray-500 text-center mt-1">Send emails to multiple contacts with one click.</span>
//           </div>
//           <div className="dashboard-card flex flex-col items-center w-52">
//             <span className="text-4xl mb-3" role="img" aria-label="Contact Discovery">🧑‍💼</span>
//             <span className="font-bold text-[#4452c3] text-base">Contact Discovery</span>
//             <span className="text-xs text-gray-500 text-center mt-1">Find professional contacts by role and country.</span>
//           </div>
//           <div className="dashboard-card flex flex-col items-center w-52">
//             <span className="text-4xl mb-3" role="img" aria-label="Google Integration">🔒</span>
//             <span className="font-bold text-[#4452c3] text-base">Secure Google Integration</span>
//             <span className="text-xs text-gray-500 text-center mt-1">Safe, verified connection via Google OAuth.</span>
//           </div>
//         </div>

//         {/* Workflow Card */}
//         <div className="bg-gradient-to-r from-[#ebf1ff] to-[#f8edfa] rounded-2xl p-6 mb-6 max-w-2xl mx-auto shadow">
//           <h2 className="text-lg font-bold mb-2 text-[#308fa7] text-center">
//             How It Works
//           </h2>
//           <ol className="list-decimal ml-8 text-left text-[#131946]">
//             <li>Search for professional contacts by role/category</li>
//             <li>Choose or customize your outreach message</li>
//             <li>Send personalized emails securely with attachments — track results</li>
//           </ol>
//         </div>

//         {/* About & Tips Section */}
//         <div className="bg-white bg-opacity-75 rounded-lg p-5 mb-7 shadow">
//           <h2 className="text-xl font-bold text-[#308fa7] mb-2">About Connectly</h2>
//           <p className="text-[#28306e]">
//             Connectly empowers job seekers, professionals, and startups to discover business contacts, send personalized outreach emails, and track responses — all with secure Gmail and LinkedIn integration. Our platform is trusted globally for seamless and automated communication.
//           </p>
//           <h3 className="text-lg font-semibold text-[#437da7] mt-4 mb-1">Pro Tips for Outreach Success</h3>
//           <ul className="list-disc ml-6 text-[#0d2d6f] text-sm">
//             <li>Personalize your subject and message for each recipient.</li>
//             <li>Attach relevant documents to build credibility.</li>
//             <li>Track follow-up responses to boost engagement.</li>
//           </ul>
//         </div>

//         <AdBanner />

//         {/* Authentication */}
//         {!googleToken ? (
//           <button
//             className="button btn-primary w-full py-2 mt-3 mb-8 font-bold text-lg"
//             onClick={() => login()}
//             type="button"
//           >
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-4 gap-2 space-y-4">
//             <span className="text-green-700 font-bold mr-3">
//               Signed in as {userProfile?.email}
//             </span>
//             <button
//               className="button btn-secondary px-5 py-1 text-red-700 border border-red-300 font-bold rounded-md transition-all text-sm"
//               onClick={logout}
//               type="button"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Email Inputs */}
//         <div className="mb-1">
//           <label htmlFor="senderEmail" className="block font-semibold text-[#28306e] mb-1 space-y-4">
//             Sender Email Address
//           </label>
//           <input
//             id="senderEmail"
//             name="senderEmail"
//             type="email"
//             placeholder="your-email@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="input-email w-full px-2 py-2 border border-[#7f93d8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308fa7] bg-[#f7f6fd] text-[#222142] shadow space-y-4"
//             autoComplete="email"
//           />
//         </div>

//         {/* Search Form */}
//         <SearchForm onSearch={handleSearch} />

//         {/* Contacts Table */}
//         {contacts.length > 0 && (
//           <ContactsTable contacts={contacts} type={contactType} />
//         )}

//         {/* Email Section with Templates */}
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
//             {/* File Attachment */}
//             <div className="mt-3">
//               <label
//                 className="block mb-1 font-semibold text-[#28306e]"
//                 htmlFor="attachment"
//               >
//                 Attach a file (optional)
//               </label>
//               <input
//                 id="attachment"
//                 type="file"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-[#308fa7] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#ebf1ff] file:text-[#308fa7] hover:file:bg-[#bddafa]"
//               />
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Home;

