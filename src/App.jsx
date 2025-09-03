// import React, { useState } from "react";
// import axios from "axios";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// function App() {
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


//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role); setCountry(country); setProfile(profile); setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", { role, country, profile, contact_type: contactType });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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
//     if(contacts.length === 0){
//       setStatus("No contacts to send emails.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 ">
//           Agentic AI Bulk Outreach
//         </h1>

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
//               <label className="block mb-2 font-semibold text-gray-700" htmlFor="attachment">
//                 Attach a file (optional)
//               </label>
//               <input
//                 type="file"
//                 id="attachment"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                            file:rounded file:border-0
//                            file:text-sm file:font-semibold
//                            file:bg-indigo-50 file:text-indigo-700
//                            hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useState } from "react";
// import axios from "axios";
// import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// // Set this to your actual Google OAuth web client ID:
// const CLIENT_ID = "370088918504-lolrb1et8pj4jdchnencktl3s43ukspg.apps.googleusercontent.com ";

// function App() {
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
//   const [googleToken, setGoogleToken] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//     // Google sign in
//   const login = useGoogleLogin({
//     onSuccess: async tokenResponse => {
//       setGoogleToken(tokenResponse.access_token);
//       // To display user info, fetch their profile:
//       const resp = await axios.get(
//         "https://www.googleapis.com/oauth2/v3/userinfo",
//         { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//       );
//       setUserProfile(resp.data);
//     },
//     scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit", // or "auth-code" for backend exchange
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role); setCountry(country); setProfile(profile); setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", { role, country, profile, contact_type: contactType });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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
//     if (!googleToken) {
//       setStatus("Please sign in with Google first.");
//       return;
//     }
//     if (contacts.length === 0) {
//       setStatus("No contacts to send emails.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("gmail_token", googleToken); // <--- Pass the OAuth2 access token
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//         <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//           <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
//             Agentic AI Bulk Outreach
//           </h1>

//           {!googleToken ? (
//             <button
//               type="button"
//               className="btn btn-primary mb-6"
//               onClick={() => login()}
//             >
//               Sign in with Google to Send Emails
//             </button>
//           ) : (
//             <div className="flex items-center mb-6">
//               <span className="text-green-800 font-bold mr-4">
//                 Signed in as {userProfile?.email}
//               </span>
//               <button type="button" className="btn btn-secondary" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           )}

//           <SearchForm onSearch={handleSearch} />
//           {contacts.length > 0 && <ContactsTable contacts={contacts} type={contactType} />}
//           {templates.length > 0 && (
//             <>
//               <EmailSection
//                 templates={templates}
//                 onTemplateSelect={handleTemplateSelect}
//                 body={body}
//                 setBody={setBody}
//                 subject={subject}
//                 setSubject={setSubject}
//                 onSend={handleSend}
//                 status={status}
//               />
//               <div className="mt-6">
//                 <label className="block mb-2 font-semibold text-gray-700" htmlFor="attachment">
//                   Attach a file (optional)
//                 </label>
//                 <input
//                   type="file"
//                   id="attachment"
//                   onChange={handleAttachmentChange}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                             file:rounded file:border-0
//                             file:text-sm file:font-semibold
//                             file:bg-indigo-50 file:text-indigo-700
//                             hover:file:bg-indigo-100"
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;







// import React, { useState } from "react";
// import axios from "axios";
// import { GoogleOAuthProvider, useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// const CLIENT_ID = "370088918504-lolrb1et8pj4jdchnencktl3s43ukspg.apps.googleusercontent.com"; // Your real Google OAuth Web client ID

// function App() {
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

//   // Google OAuth2 states
//   const [googleToken, setGoogleToken] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//   const login = useGoogleLogin({
//     onSuccess: async tokenResponse => {
//       setGoogleToken(tokenResponse.access_token);
//       try {
//         // Fetch user info for display
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//         );
//         setUserProfile(resp.data);
//       } catch (e) {
//         console.error("Failed fetching user info", e);
//       }
//     },
//     scope:
//       "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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
//       setStatus("Please sign in with Google to send emails.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("gmail_token", googleToken); // Pass the OAuth2 access token
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//         <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//           <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 ">
//             Agentic AI Bulk Outreach
//           </h1>

//           {/* Google Auth: Show sign-in/sign-out status */}
//           {!googleToken ? (
//             <button
//               type="button"
//               className="btn btn-primary mb-6"
//               onClick={() => login()}
//             >
//               Sign in with Google to Send Emails
//             </button>
//           ) : (
//             <div className="flex items-center mb-6">
//               <span className="text-green-800 font-bold mr-4">
//                 Signed in as {userProfile?.email}
//               </span>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={logout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}

//           <SearchForm onSearch={handleSearch} />
//           {contacts.length > 0 && (
//             <ContactsTable contacts={contacts} type={contactType} />
//           )}
//           {templates.length > 0 && (
//             <>
//               <EmailSection
//                 templates={templates}
//                 onTemplateSelect={handleTemplateSelect}
//                 body={body}
//                 setBody={setBody}
//                 subject={subject}
//                 setSubject={setSubject}
//                 onSend={handleSend}
//                 status={status}
//               />
//               <div className="mt-6">
//                 <label
//                   className="block mb-2 font-semibold text-gray-700"
//                   htmlFor="attachment"
//                 >
//                   Attach a file (optional)
//                 </label>
//                 <input
//                   type="file"
//                   id="attachment"
//                   onChange={handleAttachmentChange}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                              file:rounded file:border-0
//                              file:text-sm file:font-semibold
//                              file:bg-indigo-50 file:text-indigo-700
//                              hover:file:bg-indigo-100"
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;









// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// const CLIENT_ID = "370088918504-lolrb1et8pj4jdchnencktl3s43ukspg.apps.googleusercontent.com";

// function App() {
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

//   // Google OAuth2 states
//   const [googleToken, setGoogleToken] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       setGoogleToken(tokenResponse.access_token);
//       try {
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//         );
//         setUserProfile(resp.data);
//       } catch (e) {
//         console.error("Failed fetching user info", e);
//       }
//     },
//     scope:
//       "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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
//       setStatus("Please sign in with Google to send emails.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("gmail_token", googleToken);
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 ">
//           Agentic AI Bulk Outreach
//         </h1>

//         {!googleToken ? (
//           <button
//             type="button"
//             className="btn btn-primary mb-6"
//             onClick={() => login()}
//           >
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-6">
//             <span className="text-green-800 font-bold mr-4">
//               Signed in as {userProfile?.email}
//             </span>
//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={logout}
//             >
//               Logout
//             </button>
//           </div>
//         )}

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
//                 type="file"
//                 id="attachment"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                            file:rounded file:border-0
//                            file:text-sm file:font-semibold
//                            file:bg-indigo-50 file:text-indigo-700
//                            hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;








// import React, { useState } from "react";
// import axios from "axios";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// function App() {
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

//   // NEW: sender email state
//   const [senderEmail, setSenderEmail] = useState("");

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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

//     if (!senderEmail || senderEmail.trim() === "") {
//       setStatus("Please enter sender email address.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post("http://localhost:8000/api/send_email_with_attachment", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 ">Agentic AI Bulk Outreach</h1>

//         {/* NEW: Input field for sender email */}
//         <div className="mb-6">
//           <label htmlFor="senderEmail" className="font-semibold text-gray-700 mb-1 block">
//             Your Email Address
//           </label>
//           <input
//             id="senderEmail"
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="youremail@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
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
//               <label
//                 htmlFor="attachment"
//                 className="block mb-2 font-semibold text-gray-700"
//               >
//                 Attach a file (optional)
//               </label>
//               <input
//                 id="attachment"
//                 type="file"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                   file:rounded file:border-0
//                   file:text-sm file:font-semibold
//                   file:bg-indigo-50 file:text-indigo-700
//                   hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;












// import React, { useState } from "react";
// import axios from "axios";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// function App() {
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

//   // Added sender email state
//   const [senderEmail, setSenderEmail] = useState("");

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", { role, country, profile, contact_type: contactType });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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

//     if (!senderEmail || senderEmail.trim() === "") {
//       setStatus("Please enter your email address.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 ">
//           Agentic AI Bulk Outreach
//         </h1>

//         {/* NEW sender email input */}
//         <div className="mb-6">
//           <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
//             Your Email Address 
//           </label>
//           <input
//             id="senderEmail"
//             type="email"
//             placeholder="youremail@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded"
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
//                 type="file"
//                 id="attachment"
//                 onChange={handleAttachmentChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                            file:rounded file:border-0
//                            file:text-sm file:font-semibold
//                            file:bg-indigo-50 file:text-indigo-700
//                            hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from "react";
// import axios from "axios";
// import { GoogleOAuthProvider, useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// const CLIENT_ID = "552274412896-2r5qc6oqsvgje1btr033i6u7uh1q0lpm.apps.googleusercontent.com";

// function App() {
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
//       setGoogleToken(tokenResponse.access_token);
//       try {
//         // Fetch user profile info to display
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//         );
//         setUserProfile(resp.data);
//         setSenderEmail(resp.data.email);  // Set sender email automatically from Google profile
//       } catch (e) {
//         console.error("Failed fetching user info", e);
//       }
//     },
//     scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     setSenderEmail("");
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     formData.append("gmail_token", googleToken); // OAuth2 token for Gmail API

//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//         <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//           <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Agentic AI Bulk Outreach</h1>

//           {!googleToken ? (
//             <button className="btn btn-primary mb-6" onClick={() => login()}>
//               Sign in with Google to Send Emails
//             </button>
//           ) : (
//             <div className="flex items-center mb-6">
//               <span className="text-green-800 font-bold mr-4">Signed in as {userProfile?.email}</span>
//               <button className="btn btn-secondary" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           )}

//           {/* Sender Email input can be edited if needed */}
//           <div className="mb-6">
//             <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
//               Sender Email Address
//             </label>
//             <input
//               id="senderEmail"
//               type="email"
//               placeholder="your-email@example.com"
//               value={senderEmail}
//               onChange={(e) => setSenderEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>

//           <SearchForm onSearch={handleSearch} />

//           {contacts.length > 0 && <ContactsTable contacts={contacts} type={contactType} />}

//           {templates.length > 0 && (
//             <>
//               <EmailSection
//                 templates={templates}
//                 onTemplateSelect={handleTemplateSelect}
//                 body={body}
//                 setBody={setBody}
//                 subject={subject}
//                 setSubject={setSubject}
//                 onSend={handleSend}
//                 status={status}
//               />
//               <div className="mt-6">
//                 <label className="block mb-2 font-semibold text-gray-700" htmlFor="attachment">
//                   Attach a file (optional)
//                 </label>
//                 <input
//                   id="attachment"
//                   type="file"
//                   onChange={handleAttachmentChange}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                              file:rounded file:border-0
//                              file:text-sm file:font-semibold
//                              file:bg-indigo-50 file:text-indigo-700
//                              hover:file:bg-indigo-100"
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;









// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// function App() {
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
//       setGoogleToken(tokenResponse.access_token);
//       try {
//         // Fetch user profile info to display
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//         );
//         setUserProfile(resp.data);
//         setSenderEmail(resp.data.email);  // Set sender email automatically from Google profile
//       } catch (e) {
//         console.error("Failed fetching user info", e);
//       }
//     },
//     scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//     flow: "implicit",
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     setSenderEmail("");
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     formData.append("gmail_token", googleToken); // OAuth2 token for Gmail API

//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Agentic AI Bulk Outreach</h1>

//         {!googleToken ? (
//           <button className="btn btn-primary mb-6" onClick={() => login()}>
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-6">
//             <span className="text-green-800 font-bold mr-4">Signed in as {userProfile?.email}</span>
//             <button className="btn btn-secondary" onClick={logout}>
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Sender Email input can be edited if needed */}
//         <div className="mb-6">
//           <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
//             Sender Email Address
//           </label>
//           <input
//             id="senderEmail"
//             type="email"
//             placeholder="your-email@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded"
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
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                            file:rounded file:border-0
//                            file:text-sm file:font-semibold
//                            file:bg-indigo-50 file:text-indigo-700
//                            hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;













// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";

// function App() {
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
//       setGoogleToken(tokenResponse.access_token);
//       try {
//         // Fetch user profile info to display
//         const resp = await axios.get(
//           "https://www.googleapis.com/oauth2/v3/userinfo",
//           { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
//         );
//         setUserProfile(resp.data);
//         setSenderEmail(resp.data.email);  // Set sender email automatically from Google profile
//       } catch (e) {
//         console.error("Failed fetching user info", e);
//       }
//     },
//     onError: (error) => {
//       console.error("Google Login Error:", error);
//       setStatus("Google login failed. Please try again.");
//     },
//     scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
//   });

//   const logout = () => {
//     setGoogleToken(null);
//     setUserProfile(null);
//     setSenderEmail("");
//     googleLogout();
//   };

//   const handleSearch = async (role, country, profile, contactType) => {
//     setRole(role);
//     setCountry(country);
//     setProfile(profile);
//     setContactType(contactType);
//     const resp = await axios.post("http://localhost:8000/api/search", {
//       role,
//       country,
//       profile,
//       contact_type: contactType,
//     });
//     setContacts(resp.data.contacts);
//     console.log("Contacts Found:", resp.data.contacts);
//     const tmpl = await axios.post("http://localhost:8000/api/templates");
//     setTemplates(tmpl.data.templates);
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

//     const formData = new FormData();
//     formData.append("emails", contacts.join(","));
//     formData.append("subject", subject);
//     formData.append("body", body);
//     formData.append("sender_email", senderEmail.trim());
//     formData.append("gmail_token", googleToken); // OAuth2 token for Gmail API

//     if (attachmentFile) {
//       formData.append("attachment", attachmentFile);
//     }

//     try {
//       const resp = await axios.post(
//         "http://localhost:8000/api/send_email_with_attachment_oauth",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setStatus(resp.data.message);
//     } catch (error) {
//       setStatus("Error sending emails.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Agentic AI Bulk Outreach</h1>

//         {!googleToken ? (
//           <button 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
//             onClick={() => login()}
//           >
//             Sign in with Google to Send Emails
//           </button>
//         ) : (
//           <div className="flex items-center mb-6">
//             <span className="text-green-800 font-bold mr-4">Signed in as {userProfile?.email}</span>
//             <button 
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
//               onClick={logout}
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Sender Email input can be edited if needed */}
//         <div className="mb-6">
//           <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
//             Sender Email Address
//           </label>
//           <input
//             id="senderEmail"
//             type="email"
//             placeholder="your-email@example.com"
//             value={senderEmail}
//             onChange={(e) => setSenderEmail(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded"
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
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//                            file:rounded file:border-0
//                            file:text-sm file:font-semibold
//                            file:bg-indigo-50 file:text-indigo-700
//                            hover:file:bg-indigo-100"
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;










// import React, { useState } from "react";
// import axios from "axios";
// import { useGoogleLogin, googleLogout } from "@react-oauth/google";
// import SearchForm from "./components/SearchForm";
// import ContactsTable from "./components/ContactsTable";
// import EmailSection from "./components/EmailSection";
// import Privacy from "./Pages/Privacy";

// function App() {
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
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mt-20 w-full max-w-5xl">
//         <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Agentic AI Bulk Outreach</h1>

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
//             className="w-full px-3 py-2 border border-gray-300 rounded"
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

// export default App;








import React from 'react'
import Privacy from "./Pages/Privacy";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Privacy from "./Pages/Privacy";  // make sure the path matches your file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer with links */}
        <footer style={{ textAlign: "center", marginTop: "30px", padding: "15px", borderTop: "1px solid #ddd" }}>
          <Link to="/privacy" style={{ marginRight: "20px" }}>Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </footer>
      </div>
    </Router>
  )
}

export default App

