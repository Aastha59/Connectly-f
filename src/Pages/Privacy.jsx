// import React from 'react'
// import './Privacy.css'

// function Privacy() {
//   return (
//     <div>
//       <header>
//     <h1>Privacy Policy</h1>
//     <p>Your privacy matters at Connectly</p>
//   </header>

//   <main>
//     <h2>Introduction</h2>
//     <p>At Connectly, we are committed to safeguarding your personal information and ensuring transparency in how we handle your data.</p>

//     <h2>Information We Collect</h2>
//     <p>We may collect basic information such as your name, email address, and usage data to improve our services.</p>

//     <h2>How We Use Information</h2>
//     <p>Your information helps us enhance user experience, personalize features, and maintain platform security.</p>

//     <h2>Data Security</h2>
//     <p>We employ industry-standard practices to protect your information against unauthorized access or misuse.</p>

//     <h2>Contact Us</h2>
//     <p>If you have questions, email us at <a href="mailto:support@connectly.com">connectly.grow@gmail.com</a>.</p>
//   </main>

//   <footer>
//     &copy; 2025 Connectly. All rights reserved.
//   </footer>
//     </div>
//   )
// }

// export default Privacy

import React from "react";

function Privacy() {
  return (
    <div className="privacy-page">
      <style>{`
        .privacy-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f0f4f8, #ffffff);
          color: #333;
          line-height: 1.7;
          padding: 40px 20px;
          max-width: 900px;
          margin: auto;
        }

        header {
          text-align: center;
          margin-bottom: 20px;
          margin-top:20px
        }

        header h1 {
          font-size: 2.2rem;
          color: #2a7fff;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        header p {
          font-size: 1rem;
          color: #555;
        }

        main h2 {
          color: #2a7fff;
          font-size: 1.1rem;
          margin-top: 30px;
          margin-bottom: 10px;
          border-left: 4px solid #2a7fff;
          padding-left: 10px;
        }

        main p {
          font-size: 0.8rem;
          color: #444;
          margin-bottom: 20px;
        }

        a {
          color: #2a7fff;
          font-weight: 400;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        footer {
          margin-top: 40px;
          text-align: center;
          font-size: 0.9rem;
          color: white;
          border-top: 1px solid #ddd;
          padding-top: 15px;
        }
      `}</style>

      <header>
        <h1>Privacy Policy</h1>
        <p>Your privacy matters at Connectly</p>
      </header>

      <main>
        <h2>Introduction</h2>
        <p>
          Connectly does not sell, transfer, or share Google user data with any
          third parties except as necessary to provide or improve app
          functionality. We only share data with service providers who help us
          operate Connectly, and these providers are contractually obligated
          to protect user data and act solely on our behalf.
        </p>

        <h2>No Third-Party Transfers For Other Reasons</h2>
        <p>
          We do not transfer Google user data to third parties for any purpose
          other than enabling or improving app functionality. User data is never
          used for advertising, marketing, or analytics unrelated to your direct
          use of Connectly
        </p>

        <h2>Data Retention and Deletion</h2>
        <p>
          We retain Google user data only as long as necessary to deliver
          services. At any time, users may request deletion of their data via
          our support mail and data will be permanently deleted within 30 days.
          We also periodically delete unnecessary data from our systems. Upon
          account disconnection, all associated Google user data is removed from
          Connectly
        </p>

        <h2>Data Security</h2>
        <p>
          Connectly accesses your Google email address and sends emails on your
          behalf using the Gmail API, strictly with your consent. We do not
          sell, transfer, or disclose Google user data to third parties except
          as required to operate or improve Connectly services. Data is
          retained only for the duration necessary to deliver outreach features.
          You may request deletion of your data at any time. No Google user data
          is used for advertising, analytics, or shared beyond what is needed
          for core app functions.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions, email us at{" "}
          <a href="mailto:support@connectly.com">connectly.grow@gmail.com</a>.
        </p>
      </main>

      <footer>&copy; 2025 Connectly. All rights reserved.</footer>
    </div>
  );
}

export default Privacy;
