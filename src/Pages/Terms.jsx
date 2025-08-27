import React from 'react'

function Terms() {
  return (
    <div className="terms-page">
      <style>{`
        .terms-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #ffffff, #f8faff);
          color: #333;
          line-height: 1.7;
          padding: 40px 20px;
          max-width: 900px;
          margin: auto;
        }

        header {
          text-align: center;
          margin-bottom: 30px;
        }

        header h1 {
          font-size: 2rem;
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

        footer {
          margin-top: 40px;
          text-align: center;
          font-size: 0.8rem;
          color: #777;
          border-top: 1px solid #ddd;
          padding-top: 15px;
        }
      `}</style>

      <header>
        <h1>Terms & Conditions</h1>
        <p>Understand your rights and responsibilities at Connectly</p>
      </header>

      <main>
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using Connectly, you agree to be bound by these terms and conditions.</p>

        <h2>User Responsibilities</h2>
        <p>You agree to use our services lawfully and avoid actions that could disrupt or harm the platform.</p>

        <h2>Intellectual Property</h2>
        <p>All content, logos, and trademarks belong to Connectly and may not be used without permission.</p>

        <h2>Limitations of Liability</h2>
        <p>Connectly is not liable for indirect damages arising from the use of our platform.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these terms at any time, and continued use of Connectly implies acceptance of the changes.</p>
      </main>

      <footer>
        &copy; 2025 Connectly. All rights reserved.
      </footer>
    </div>
  )
}

export default Terms
