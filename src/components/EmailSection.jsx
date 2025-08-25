// import React from "react";

// const EmailSection = ({
//   templates,
//   onTemplateSelect,
//   body,
//   setBody,
//   subject,
//   setSubject,
//   onSend,
//   status
// }) => (
//   <div className="my-6">
//     <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose/Edit Mail Template:</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {templates.map((t, i) => (
//         <div
//           key={i}
//           className="p-5 border-2 border-indigo-600 rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-indigo-100 to-indigo-50 hover:shadow-xl transition-shadow"
//           onClick={() => onTemplateSelect(t)}
//           role="button"
//           tabIndex={0}
//           onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onTemplateSelect(t); }}
//           aria-label={`Select template ${i + 1}`}
//         >
//           <h3 className="text-lg font-semibold mb-2 text-indigo-800">Template {i + 1}</h3>
//           <h4 className="font-semibold mb-1 text-indigo-700">{t.subject.replace("{role}", "").replace("{country}", "")}</h4>
//           <p className="text-gray-700 whitespace-pre-wrap max-h-36 overflow-y-auto">{t.body.replace("{role}", "").replace("{country}", "")}</p>
//           <button
//             onClick={(e) => { e.stopPropagation(); onTemplateSelect(t); }}
//             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//           >
//             Use This Template
//           </button>
//         </div>
//       ))}
//     </div>

//     <div className="mt-8">
//       <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
//       <input
//         id="subject"
//         type="text"
//         className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         placeholder="Email Subject"
//       />
//     </div>

//     <div className="mt-6">
//       <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">Email Body</label>
//       <textarea
//         id="body"
//         rows={10}
//         className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         placeholder="Edit your email here..."
//       />
//     </div>

//     <button
//       onClick={onSend}
//       className="mt-8 w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700 transition-colors"
//       type="button"
//     >
//       Send Emails
//     </button>

//     {status && (
//       <div className="mt-4 text-green-700 font-semibold" role="alert" aria-live="polite">
//         {status}
//       </div>
//     )}
//   </div>
// );

// export default EmailSection;









// import React from "react";

// const EmailSection = ({
//   templates,
//   onTemplateSelect,
//   body,
//   setBody,
//   subject,
//   setSubject,
//   onSend,
//   status
// }) => (
//   <div className="email-section my-6">
//     <h2 className="email-section-title">Choose/Edit Mail Template:</h2>
//     <div className="email-templates-list">
//       {templates.map((t, i) => (
//         <div
//           key={i}
//           className="email-template-card"
//           onClick={() => onTemplateSelect(t)}
//           role="button"
//           tabIndex={0}
//           onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onTemplateSelect(t); }}
//           aria-label={`Select template ${i + 1}`}
//         >
//           <h3 className="email-template-card-title">Template {i + 1}</h3>
//           <h4 className="email-template-card-subject">{t.subject.replace("{role}", "").replace("{country}", "")}</h4>
//           <p className="email-template-card-body">{t.body.replace("{role}", "").replace("{country}", "")}</p>
//           <button
//             onClick={e => { e.stopPropagation(); onTemplateSelect(t); }}
//             className="email-template-card-btn"
//           >
//             Use This Template
//           </button>
//         </div>
//       ))}
//     </div>
//     <div className="mt-8">
//       <label htmlFor="subject" className="label">Subject</label>
//       <input
//         id="subject"
//         type="text"
//         className="email-input"
//         value={subject}
//         onChange={e => setSubject(e.target.value)}
//         placeholder="Email Subject"
//       />
//     </div>
//     <div className="mt-6">
//       <label htmlFor="body" className="label">Email Body</label>
//       <textarea
//         id="body"
//         rows={10}
//         className="email-textarea"
//         value={body}
//         onChange={e => setBody(e.target.value)}
//         placeholder="Edit your email here..."
//       />
//     </div>
//     <button
//       onClick={onSend}
//       className="email-send-btn"
//       type="button"
//     >
//       Send Emails
//     </button>
//     {status && (
//       <div className="status mt-4" role="alert" aria-live="polite">
//         {status}
//       </div>
//     )}
//   </div>
// );

// export default EmailSection;








import React from "react";

const EmailSection = ({
  templates,
  onTemplateSelect,
  body,
  setBody,
  subject,
  setSubject,
  onSend,
  status,
}) => (
  <div className="email-section my-6">
    <h2 className="email-section-title">Choose/Edit Mail Template:</h2>
    <div className="email-templates-list">
      {templates.map((t, i) => (
        <div
          key={i}
          className="email-template-card"
          onClick={() => onTemplateSelect(t)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onTemplateSelect(t);
          }}
          aria-label={`Select template ${i + 1}`}
        >
          <h3 className="email-template-card-title">Template {i + 1}</h3>
          <h4 className="email-template-card-subject">
            {t.subject.replace("{role}", "").replace("{country}", "")}
          </h4>
          <p className="email-template-card-body">
            {t.body.replace("{role}", "").replace("{country}", "")}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTemplateSelect(t);
            }}
            className="email-template-card-btn"
          >
            Use This Template
          </button>
        </div>
      ))}
    </div>
    <div className="mt-10 flex flex-col gap-6 w-full max-w-2xl">
      <div>
        <label htmlFor="subject" className="label mb-2 block font-semibold">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="email-input w-full p-3 rounded border border-indigo-300 focus:ring-2 focus:ring-indigo-400 transition"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email Subject"
        />
      </div>
      <div>
        <label htmlFor="body" className="label mb-2 block font-semibold">
          Email Body
        </label>
        <textarea
          id="body"
          rows={10}
          className="email-textarea w-full p-3 rounded border border-indigo-300 focus:ring-2 focus:ring-indigo-400 transition resize-y"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Edit your email here..."
        />
      </div>
      <button
        onClick={onSend}
        className="email-send-btn btn btn-primary w-full py-3 mt-2"
        type="button"
      >
        Send Emails
      </button>
      {status && (
        <div
          className={`status mt-4 w-full text-center ${status.includes("failed") ? "bg-red-50 border border-red-200 text-red-700" : "bg-green-50 border border-green-200 text-green-700"
            }`}
          role="alert"
          aria-live="polite"
        >
          {status}
        </div>
      )}
    </div>
  </div>
);

export default EmailSection;
