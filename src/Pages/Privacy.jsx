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











import React from 'react'

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
        <p>At Connectly, we are committed to safeguarding your personal information and ensuring transparency in how we handle your data.</p>

        <h2>Information We Collect</h2>
        <p>We may collect basic information such as your name, email address, and usage data to improve our services.</p>

        <h2>How We Use Information</h2>
        <p>Your information helps us enhance user experience, personalize features, and maintain platform security.</p>

        <h2>Data Security</h2>
        <p>We employ industry-standard practices to protect your information against unauthorized access or misuse.</p>

        <h2>Contact Us</h2>
        <p>If you have questions, email us at <a href="mailto:support@connectly.com">connectly.grow@gmail.com</a>.</p>
      </main>

      <footer>
        &copy; 2025 Connectly. All rights reserved.
      </footer>
    </div>
  )
}

export default Privacy
