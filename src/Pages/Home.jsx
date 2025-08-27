


import React, { useState } from "react";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import SearchForm from "../components/SearchForm";
import ContactsTable from "../components/ContactsTable";
import EmailSection from "../components/EmailSection";


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
        const resp = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
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
    scope: "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email",
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
      // const resp = await axios.post("http://localhost:8000/api/search", {
      const resp = await axios.post("https://connectly-b-1.onrender.com/api/search", {
        role,
        country,
        profile,
        contact_type: contactType,
      });
      setContacts(resp.data.contacts);
      console.log("Contacts Found:", resp.data.contacts);

      // const tmpl = await axios.post("http://localhost:8000/api/templates");
      const tmpl = await axios.post("https://connectly-b-1.onrender.com/api/templates");
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
        // "http://localhost:8000/api/send_email_with_attachment_oauth",
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6 mt-10 mb-10 w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700"><i><b>Connectly</b></i></h1>

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
            <span className="text-green-800 font-bold mr-4">Signed in as {userProfile?.email}</span>
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
          <label htmlFor="senderEmail" className="block font-semibold text-gray-700 mb-1">
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

        {contacts.length > 0 && <ContactsTable contacts={contacts} type={contactType} />}

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
              <label className="block mb-2 font-semibold text-gray-700" htmlFor="attachment">
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
      </div>
    </div>
  );
}

export default Home;
