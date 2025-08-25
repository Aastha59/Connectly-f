// import React from "react";
// const ContactsTable = ({ contacts, type }) => (
//   <div className="my-6">
//     <h2 className="text-xl font-semibold mb-2">Contacts Found:</h2>
//     <table className="table-auto w-full bg-white rounded-xl">
//       <thead>
//         <tr>
//           <th className="text-left p-2">{type === "gmail" ? "Gmail" : "Mobile Number"}</th>
//         </tr>
//       </thead>
//       <tbody>
//         {contacts.map((c, i) => (
//           <tr key={i}><td className="p-2 border-b">{c}</td></tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
// export default ContactsTable;











import React from "react";
const ContactsTable = ({ contacts, type }) => (
  <div className="contact-table my-6">
    <h2 className="contact-table-title">Contacts Found:</h2>
    <table className="contact-table-table w-full">
      <thead>
        <tr>
          <th className="contact-table-header">{type === "gmail" ? "Gmail" : "Mobile Number"}</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c, i) => (
          <tr key={i}>
            <td className="contact-table-cell">{c}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default ContactsTable;
