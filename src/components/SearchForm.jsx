// import React, { useState } from "react";

// const SearchForm = ({ onSearch }) => {
//   const [role, setRole] = useState("");
//   const [country, setCountry] = useState("");
//   const [profile, setProfile] = useState("linkedin");
//   const [contactType, setContactType] = useState("gmail");

//   return (
//     <form className="space-y-4">
//       <input type="text" placeholder="Role/Position" className="input input-bordered w-full"
//              value={role} onChange={e => setRole(e.target.value)} required />
//       <input type="text" placeholder="Country" className="input input-bordered w-full"
//              value={country} onChange={e => setCountry(e.target.value)} required />
//       <select className="select select-bordered w-full"
//               value={profile} onChange={e => setProfile(e.target.value)}>
//         <option value="linkedin">LinkedIn</option>
//         <option value="instagram">Instagram</option>
//         <option value="youtube">YouTube</option>
//       </select>
//       <select className="select select-bordered w-full"
//               value={contactType} onChange={e => setContactType(e.target.value)}>
//         <option value="gmail">Gmail</option>
//         <option value="mobile">Mobile</option>
//       </select>
//       <button className="btn btn-primary w-full" type="button"
//               onClick={() => onSearch(role, country, profile, contactType)}>
//         Find Contacts
//       </button>
//     </form>
//   );
// };
// export default SearchForm;











// import React, { useState } from "react";

// const SearchForm = ({ onSearch }) => {
//   const [role, setRole] = useState("");
//   const [country, setCountry] = useState("");
//   const [profile, setProfile] = useState("linkedin");
//   const [contactType, setContactType] = useState("gmail");

//   return (
//     <form className="search-form space-y-4">
//       <input
//         type="text"
//         placeholder="Role/Position"
//         className="search-input"
//         value={role}
//         onChange={e => setRole(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Country"
//         className="search-input"
//         value={country}
//         onChange={e => setCountry(e.target.value)}
//         required
//       />
//       <select
//         className="search-select"
//         value={profile}
//         onChange={e => setProfile(e.target.value)}
//       >
//         <option value="linkedin">LinkedIn</option>
//         <option value="instagram">Instagram</option>
//         <option value="youtube">YouTube</option>
//       </select>
//       <select
//         className="search-select"
//         value={contactType}
//         onChange={e => setContactType(e.target.value)}
//       >
//         <option value="gmail">Gmail</option>
//         <option value="mobile">Mobile</option>
//       </select>
//       <button
//         className="btn btn-primary search-btn w-full"
//         type="button"
//         onClick={() => onSearch(role, country, profile, contactType)}
//       >
//         Find Contacts
//       </button>
//     </form>
//   );
// };
// export default SearchForm;







import React, { useState } from "react";
const SearchForm = ({ onSearch, loading, error }) => {
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState("linkedin");
  const [contactType, setContactType] = useState("gmail");

  return (
    <form className="search-form space-y-4">
      <input
        type="text"
        placeholder="Role/Position"
        className="search-input"
        value={role}
        onChange={e => setRole(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Country"
        className="search-input"
        value={country}
        onChange={e => setCountry(e.target.value)}
        required
      />
      <select
        className="search-select"
        value={profile}
        onChange={e => setProfile(e.target.value)}
      >
        <option value="linkedin">LinkedIn</option>
        <option value="instagram">Instagram</option>
        <option value="youtube">YouTube</option>
      </select>
      <select
        className="search-select"
        value={contactType}
        onChange={e => setContactType(e.target.value)}
      >
        <option value="gmail">Gmail</option>
        <option value="mobile">Mobile</option>
      </select>
      <button
        className="btn btn-primary search-btn w-full"
        type="button"
        onClick={() => onSearch(role, country, profile, contactType)}
        disabled={loading} // disable while searching
      >
        {/* {loading ? "Searching..." : "Find Contacts"} */}
        {loading ? (error === "network" ? "Wait for some time" : "Searching...") : "Find Contacts"}
      </button>
    </form>
  );
};
export default SearchForm;