// // import React from "react";
// // import connectlyLogo from "../I4.png"; // adjust path if needed

// // function Header() {
// //   return (
// //     <header className="flex items-center justify-between px-8 py-4 bg-[#262947] shadow sticky top-0 z-20 w-full">
// //       <div className="flex items-center">
// //         <img src={connectlyLogo} alt="Connectly AI Logo" className="w-12 h-12 rounded-lg mr-3" />
// //         <span className="text-2xl font-bold text-[#90def9] tracking-wide">Connectly AI</span>
// //       </div>
// //       <nav>
// //         <ul className="flex gap-8 font-medium text-[#ebf1ff]">
// //           <li><a href="#dashboard" className="hover:text-[#3797ad]">About</a></li>
// //           <li><a href="#contacts" className="hover:text-[#3797ad]">Contacts</a></li>
// //           <li><a href="#templates" className="hover:text-[#3797ad]">Home</a></li>
// //           <li><a href="#analytics" className="hover:text-[#3797ad]">Theme</a></li>
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;






// // import React, { useState } from "react";
// // import connectlyLogo from "../I4.png";

// // function Header({
// //   userName = "User",
// //   notificationsCount = 0,
// //   onThemeToggle = () => {},
// //   onLogout = () => {},
// // }) {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setDarkMode(!darkMode);
// //     onThemeToggle(!darkMode);
// //   };

// //   return (
// //     <header
// //       className={`flex items-center justify-between px-8 py-4 sticky top-0 z-20 w-full shadow ${
// //         darkMode ? "bg-gray-900" : "bg-[#262947]"
// //       }`}
// //     >
// //       <div className="flex items-center space-x-4">
// //         <img
// //           src={connectlyLogo}
// //           alt="Connectly AI Logo"
// //           className="w-12 h-12 rounded-lg"
// //         />
// //         <span className="text-2xl font-bold text-[#90def9] tracking-wide">
// //           Connectly
// //         </span>
// //         <span className="text-white font-medium">Hello, {userName}</span>
// //       </div>

// //       <nav className="flex items-center space-x-6 font-medium text-[#ebf1ff]">


// //         {/* Quick Actions Dropdown */}
// //         <div className="relative group">
// //           <button className="px-3 py-1 rounded bg-[#4452c3] hover:bg-[#334080] text-white">
// //             Quick Actions ▼
// //           </button>
// //           <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
// //             <a
// //               href="#new-email"
// //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //             >
// //               About
// //             </a>
// //             <a
// //               href="#add-contact"
// //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //             >
// //               Contact
// //             </a>
// //             <a
// //               href="#view-analytics"
// //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
// //             >
// //               Analytics
// //             </a>
// //           </div>
// //         </div>

// //         {/* Logout Button */}
// //         <button
// //           onClick={onLogout}
// //           className="px-3 py-1 rounded border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
// //         >
// //           Logout
// //         </button>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;







// // import React, { useState } from "react";
// // import connectlyLogo from "../I4.png";

// // function Header({
// //   userName = "User",
// //   notificationsCount = 0,
// //   onThemeToggle = () => {},
// //   onLogout = () => {},
// // }) {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setDarkMode(!darkMode);
// //     onThemeToggle(!darkMode);
// //   };

// //   return (
// //     <header
// //       className={`flex items-center justify-between px-8 py-4 sticky top-0 z-20 w-full shadow-lg transition-colors duration-500 ${
// //         darkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"
// //       }`}
// //     >
// //       <div className="flex items-center space-x-4">
// //         <img
// //           src={connectlyLogo}
// //           alt="Connectly AI Logo"
// //           className="w-12 h-12 rounded-md shadow-md"
// //         />
// //         <span
// //           className={`text-2xl font-extrabold tracking-wide ${
// //             darkMode ? "text-cyan-400" : "text-cyan-200"
// //           }`}
// //         >
// //           Connectly
// //         </span>
// //         <span className={`font-semibold ${darkMode ? "text-white" : "text-cyan-100"}`}>
// //           Hello, {userName}
// //         </span>
// //       </div>

// //       <nav className="flex items-center space-x-6 font-semibold transition-colors duration-300">
// //         <ul className="flex gap-10">
// //           <li>
// //             <a
// //               href="#about"
// //               className={`hover:text-cyan-300 transition-colors ${
// //                 darkMode ? "text-cyan-200" : "text-cyan-100"
// //               }`}
// //             >
// //               About
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#contacts"
// //               className={`hover:text-cyan-300 transition-colors ${
// //                 darkMode ? "text-cyan-200" : "text-cyan-100"
// //               }`}
// //             >
// //               Contacts
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#analytics"
// //               className={`hover:text-cyan-300 transition-colors ${
// //                 darkMode ? "text-cyan-200" : "text-cyan-100"
// //               }`}
// //             >
// //               Analytics
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Quick Actions Dropdown */}
// //         <div className="relative group">
// //           <button
// //             className={`px-4 py-2 rounded-md text-white ${
// //               darkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-700 hover:bg-cyan-800"
// //             } transition-colors duration-300`}
// //           >
// //             Quick Actions ▼
// //           </button>

// //           <div className="absolute right-0 mt-2 w-52 rounded-md bg-white shadow-lg z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
// //             <a
// //               href="#about"
// //               className="block px-5 py-3 text-gray-800 hover:bg-cyan-100 transition-colors"
// //             >
// //               About Connectly
// //             </a>
// //             <a
// //               href="#contacts"
// //               className="block px-5 py-3 text-gray-800 hover:bg-cyan-100 transition-colors"
// //             >
// //               Contact Us
// //             </a>
// //             <a
// //               href="#analytics"
// //               className="block px-5 py-3 text-gray-800 hover:bg-cyan-100 transition-colors"
// //             >
// //               Analytics Dashboard
// //             </a>
// //           </div>
// //         </div>

// //         {/* Logout Button */}
// //         <button
// //           onClick={onLogout}
// //           className={`px-4 py-2 rounded-md border-2 font-semibold transition-colors duration-300 ${
// //             darkMode
// //               ? "border-red-600 text-red-500 hover:bg-red-700 hover:text-white"
// //               : "border-red-500 text-red-600 hover:bg-red-600 hover:text-white"
// //           }`}
// //         >
// //           Logout
// //         </button>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;








// // import React, { useState } from "react";
// // import connectlyLogo from "../I4.png";

// // function Header({
// //   userName = "User",
// //   onThemeToggle = () => {},
// //   onLogout = () => {},
// // }) {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const toggleTheme = () => {
// //     setDarkMode(!darkMode);
// //     onThemeToggle(!darkMode);
// //   };

// //   return (
// //     <header
// //       className={`flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 sticky top-0 z-20 w-full shadow-lg transition-all duration-300 ${
// //         darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-800 text-gray-50"
// //       }`}
// //     >
// //       <div className="flex items-center space-x-4">
// //         <img
// //           src={connectlyLogo}
// //           alt="Connectly AI Logo"
// //           className="w-10 h-10 rounded-full object-cover shadow-md"
// //         />
// //         <span className="text-3xl font-extrabold text-cyan-400 tracking-wider">
// //           Connectly
// //         </span>
// //         <span className="text-sm font-light text-gray-300 hidden sm:block ml-4">
// //           Hello, {userName} 👋
// //         </span>
// //       </div>

// //       <nav className="flex items-center space-x-6 font-medium">
// //         {/* Quick Actions Dropdown */}
// //         <div className="relative group">
// //           <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-sky-600 text-white font-semibold transition-all duration-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800">
// //             <span>Quick Actions</span>
// //             <svg
// //               className="w-4 h-4 transition-transform duration-200 transform group-hover:rotate-180"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M19 9l-7 7-7-7"
// //               ></path>
// //             </svg>
// //           </button>
// //           <div className="absolute right-0 mt-2 w-48 rounded-lg bg-slate-700 shadow-xl overflow-hidden z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
// //             <a
// //               href="#about"
// //               className="block px-4 py-2 text-gray-200 hover:bg-slate-600 transition-colors"
// //             >
// //               About
// //             </a>
// //             <a
// //               href="#contact"
// //               className="block px-4 py-2 text-gray-200 hover:bg-slate-600 transition-colors"
// //             >
// //               Contact
// //             </a>
// //             <a
// //               href="#analytics"
// //               className="block px-4 py-2 text-gray-200 hover:bg-slate-600 transition-colors"
// //             >
// //               Analytics
// //             </a>
// //           </div>
// //         </div>

// //         {/* Logout Button */}
// //         <button
// //           onClick={onLogout}
// //           className="px-4 py-2 rounded-md border border-rose-600 text-rose-600 font-semibold transition-all duration-300 hover:bg-rose-700 hover:text-white"
// //         >
// //           Logout
// //         </button>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;







// // import React, { useState } from "react";
// // import connectlyLogo from "../I4.png";

// // function Header({ userName = "User", onLogout = () => {} }) {
// //   const [activeSection, setActiveSection] = useState(null);

// //   return (
// //     <div className="w-full flex justify-center mt-6">
// //       <div className="w-full max-w-[940px] bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
// //         {/* Header Content */}
// //         <header className="flex items-center justify-between mb-6">
// //           <div className="flex items-center space-x-4">
// //             <img
// //               src={connectlyLogo}
// //               alt="Connectly AI Logo"
// //               className="w-12 h-12 rounded-lg shadow-md object-cover"
// //             />
// //             <span className="text-2xl font-extrabold text-cyan-400 tracking-wider">
// //               Connectly
// //             </span>
// //             <span className="text-sm font-light text-gray-700 hidden sm:block ml-2">
// //               Hello, {userName} 👋
// //             </span>
// //           </div>

// //           <nav className="flex items-center space-x-4 font-medium">
// //             {/* Quick Actions */}
// //             <div className="relative group">
// //               <button className="flex items-center space-x-1 px-4 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-all">
// //                 <span>Quick Actions</span>
// //                 <svg
// //                   className="w-4 h-4 transition-transform duration-200 transform group-hover:rotate-180"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M19 9l-7 7-7-7"
// //                   ></path>
// //                 </svg>
// //               </button>
// //               <div className="absolute right-0 mt-2 w-40 rounded-lg bg-gray-100 shadow-md overflow-hidden z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
// //                 <button
// //                   onClick={() => setActiveSection("about")}
// //                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
// //                 >
// //                   About
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveSection("contact")}
// //                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
// //                 >
// //                   Contact
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveSection("analytics")}
// //                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
// //                 >
// //                   Analytics
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Logout */}
// //             <button
// //               onClick={onLogout}
// //               className="px-4 py-2 rounded-md border border-rose-600 text-rose-600 font-semibold hover:bg-rose-700 hover:text-white transition-all"
// //             >
// //               Logout
// //             </button>
// //           </nav>
// //         </header>

// //         {/* Conditional Section Rendering */}
// //         {activeSection === "about" && (
// //           <section className="py-4 text-gray-800">
// //             <h2 className="text-xl font-bold text-cyan-500 mb-2">
// //               About Connectly AI
// //             </h2>
// //             <p className="text-sm">
// //               Connectly AI simplifies workflows, automates tasks, and delivers
// //               smart insights in real-time for professionals and businesses.
// //             </p>
// //           </section>
// //         )}

// //         {activeSection === "contact" && (
// //           <section className="py-4 text-gray-800">
// //             <h2 className="text-xl font-bold text-sky-600 mb-2">Contact Me</h2>
// //             <form className="space-y-3">
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Your Email"
// //                 className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
// //               />
// //               <textarea
// //                 rows="4"
// //                 placeholder="Your Message"
// //                 className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
// //               ></textarea>
// //               <button className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition">
// //                 Send
// //               </button>
// //             </form>
// //           </section>
// //         )}

// //         {activeSection === "analytics" && (
// //           <section className="py-4 text-gray-800">
// //             <h2 className="text-xl font-bold text-emerald-500 mb-2">
// //               Analytics Overview
// //             </h2>
// //             <div className="grid grid-cols-3 gap-4 text-center">
// //               <div className="p-3 bg-gray-100 rounded-lg shadow">1.2M+ Tasks Automated</div>
// //               <div className="p-3 bg-gray-100 rounded-lg shadow">98% Accuracy</div>
// //               <div className="p-3 bg-gray-100 rounded-lg shadow">75+ Clients</div>
// //             </div>
// //           </section>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;








// import React, { useState, useRef, useEffect } from 'react';
// import { Briefcase, Users, BarChart2, Send, Loader2, Cpu, RefreshCcw, ShieldCheck, Zap, LayoutDashboard } from 'lucide-react';

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [contactStatus, setContactStatus] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('about');
//   const dropdownRef = useRef(null);

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setContactStatus('');

//     // Simulate sending a message
//     setTimeout(() => {
//       setLoading(false);
//       setContactStatus('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     }, 2000);
//   };

//   // Close the dropdown if the user clicks outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [dropdownRef]);

//   // Mock data for Analytics
//   const analyticsData = {
//     users: 54000,
//     messagesProcessed: '1.2M',
//     uptime: '99.9%',
//     satisfaction: '98%',
//     trafficSources: [
//       { source: 'Direct', value: 45 },
//       { source: 'Referral', value: 20 },
//       { source: 'Organic Search', value: 25 },
//       { source: 'Social Media', value: 10 },
//     ],
//   };

//   return (
//     <div className="bg-slate-50 text-slate-800 min-h-screen font-sans antialiased flex flex-col items-center">
//       {/* Header */}
//       <header className="w-full flex justify-center mt-6">
//         <div className="w-full max-w-[940px] bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://placehold.co/48x48/00bcd4/ffffff?text=C-AI"
//                 alt="Connectly AI Logo"
//                 className="w-12 h-12 rounded-lg shadow-md object-cover"
//               />
//               <span className="text-2xl font-extrabold text-cyan-400 tracking-wider">
//                 Connectly
//               </span>
//               <span className="text-sm font-light text-gray-700 hidden sm:block ml-2">
//                 Hello, User 👋
//               </span>
//             </div>

//             <nav className="flex items-center space-x-4 font-medium">
//               {/* Quick Actions Dropdown */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center space-x-1 px-4 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-all"
//                 >
//                   <span>Quick Actions</span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   className={`absolute right-0 mt-2 w-40 rounded-lg bg-gray-100 shadow-md overflow-hidden z-50 transition-opacity duration-300 transform scale-95 ${
//                     isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//                   }`}
//                 >
//                   <a
//                     href="#about"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
//                     onClick={() => { setActiveSection('about'); setIsDropdownOpen(false); }}
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#contact"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
//                     onClick={() => { setActiveSection('contact'); setIsDropdownOpen(false); }}
//                   >
//                     Contact
//                   </a>
//                   <a
//                     href="#analytics"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
//                     onClick={() => { setActiveSection('analytics'); setIsDropdownOpen(false); }}
//                   >
//                     Analytics
//                   </a>
//                 </div>
//               </div>
//               {/* Logout Button */}
//               <button
//                 onClick={() => console.log("Logged out")}
//                 className="px-4 py-2 rounded-md border border-rose-600 text-rose-600 font-semibold transition-all duration-300 hover:bg-rose-700 hover:text-white"
//               >
//                 Logout
//               </button>
//             </nav>
//           </div>

//           {/* Conditional Section Rendering */}
//           <main className="w-full">
//             {activeSection === 'about' && (
//               <section id="about" className="py-4 text-slate-800">
//                 <h2 className="text-2xl font-bold text-sky-600 mb-4 flex items-center">
//                   <Briefcase size={24} className="mr-2" /> About Connectly AI
//                 </h2>
//                 <div className="space-y-4 text-sm leading-relaxed">
//                   <p>
//                     Connectly AI is a next-generation platform designed to streamline and automate digital communication. By leveraging cutting-edge machine learning and natural language processing, we provide businesses with the tools to build smarter, more engaging interactions with their customers. Our goal is to transform conversations into valuable insights and actionable data, all while maintaining a human-like touch.
//                   </p>
//                   <h3 className="text-xl font-semibold text-cyan-500 mt-6 mb-2">How it Works:</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {/* Step 1: Data Ingestion & Analysis */}
//                     <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-lg shadow-inner transform transition-transform hover:scale-105">
//                       <Cpu size={36} className="text-orange-400 mb-2" />
//                       <h4 className="font-bold text-md mb-1">1. Real-time Ingestion</h4>
//                       <p className="text-xs text-slate-500">
//                         We seamlessly integrate with your existing communication channels to ingest conversational data as it happens.
//                       </p>
//                     </div>
//                     {/* Step 2: NLP & Sentiment Analysis */}
//                     <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-lg shadow-inner transform transition-transform hover:scale-105">
//                       <RefreshCcw size={36} className="text-emerald-400 mb-2" />
//                       <h4 className="font-bold text-md mb-1">2. Intelligent Processing</h4>
//                       <p className="text-xs text-slate-500">
//                         Our AI models analyze every message, identifying intent, sentiment, and key topics with high accuracy.
//                       </p>
//                     </div>
//                     {/* Step 3: Automated Actions & Responses */}
//                     <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-lg shadow-inner transform transition-transform hover:scale-105">
//                       <Zap size={36} className="text-violet-400 mb-2" />
//                       <h4 className="font-bold text-md mb-1">3. Smart Automation</h4>
//                       <p className="text-xs text-slate-500">
//                         The system then automates responses, routes conversations, or triggers actions based on the analysis.
//                       </p>
//                     </div>
//                     {/* Step 4: Actionable Insights */}
//                     <div className="flex flex-col items-center text-center p-4 bg-slate-100 rounded-lg shadow-inner transform transition-transform hover:scale-105">
//                       <ShieldCheck size={36} className="text-rose-400 mb-2" />
//                       <h4 className="font-bold text-md mb-1">4. Secure & Scalable</h4>
//                       <p className="text-xs text-slate-500">
//                         The entire process is secure, scalable, and provides you with the data you need to make informed decisions.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             )}

//             {activeSection === 'contact' && (
//               <section id="contact" className="py-4 text-slate-800">
//                 <h2 className="text-2xl font-bold text-sky-600 mb-4 flex items-center">
//                   <Users size={24} className="mr-2" /> Contact Me
//                 </h2>
//                 <p className="text-sm text-slate-600 mb-4">
//                   Have a question or a message for me? Fill out the form below and I'll get back to you.
//                 </p>
//                 <form onSubmit={handleFormSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleFormChange}
//                       required
//                       className="w-full px-4 py-2 rounded-lg bg-gray-100 text-slate-800 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                       required
//                       className="w-full px-4 py-2 rounded-lg bg-gray-100 text-slate-800 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
//                     />
//                   </div>
//                   <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleFormChange}
//                     required
//                     className="w-full px-4 py-2 rounded-lg bg-gray-100 text-slate-800 placeholder-slate-400 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors resize-none"
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                     disabled={loading}
//                   >
//                     {loading ? (
//                       <Loader2 className="animate-spin mr-2" size={18} />
//                     ) : (
//                       <Send className="mr-2" size={18} />
//                     )}
//                     {loading ? 'Sending...' : 'Send Message'}
//                   </button>
//                   {contactStatus && (
//                     <p className="mt-2 text-center text-sm font-semibold text-emerald-500">
//                       {contactStatus}
//                     </p>
//                   )}
//                 </form>
//               </section>
//             )}

//             {activeSection === 'analytics' && (
//               <section id="analytics" className="py-4 text-slate-800">
//                 <h2 className="text-2xl font-bold text-sky-600 mb-4 flex items-center">
//                   <BarChart2 size={24} className="mr-2" /> Analytics Overview
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
//                   <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
//                     <p className="text-3xl font-extrabold text-sky-600">{analyticsData.users}+</p>
//                     <p className="text-sm text-slate-500">Active Users</p>
//                   </div>
//                   <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
//                     <p className="text-3xl font-extrabold text-sky-600">{analyticsData.messagesProcessed}</p>
//                     <p className="text-sm text-slate-500">Messages Processed</p>
//                   </div>
//                   <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
//                     <p className="text-3xl font-extrabold text-sky-600">{analyticsData.uptime}</p>
//                     <p className="text-sm text-slate-500">Platform Uptime</p>
//                   </div>
//                   <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
//                     <p className="text-3xl font-extrabold text-sky-600">{analyticsData.satisfaction}</p>
//                     <p className="text-sm text-slate-500">User Satisfaction</p>
//                   </div>
//                 </div>
//                 {/* Graph Placeholder */}
//                 <div className="mt-8 p-6 bg-slate-100 rounded-lg shadow-sm text-center">
//                   <h3 className="text-lg font-semibold text-slate-700 mb-2">Traffic Source Distribution</h3>
//                   <div className="w-full h-40 flex items-center justify-center bg-white rounded-md text-slate-400 border border-dashed border-slate-300">
//                     <p></p>
//                   </div>
//                 </div>
//               </section>
//             )}
//           </main>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
