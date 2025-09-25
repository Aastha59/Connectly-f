import React from "react";
import AdBanner from "../components/AdBanner";
import generatedImage from "../generated-image.png";
import I1 from "../I1.png";

// Add your other images similarly

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto mt-12 mb-10 px-8">
      {/* Analytics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-[#c2e7f8] rounded-xl p-7 shadow-lg flex flex-col items-center">
          <span className="text-5xl mb-2" role="img" aria-label="Rocket">🚀</span>
          <span className="font-bold text-lg text-[#28306e] mb-1">Outreach Success</span>
          <span className="text-3xl text-[#3797ad]">87%</span>
          <span className="text-gray-600 mt-2">Email open rate (last 30 days)</span>
        </div>
        <div className="bg-[#ebf1ff] rounded-xl p-7 shadow-lg flex flex-col items-center">
          <span className="text-5xl mb-2" role="img" aria-label="Referral">🏆</span>
          <span className="font-bold text-lg text-[#28306e] mb-1">Referral Leaderboard</span>
          <span className="text-3xl text-[#3797ad]">#1</span>
          <span className="text-gray-600 mt-2">Most new contacts this week</span>
        </div>
        <div className="bg-[#dde6f7] rounded-xl p-7 shadow-lg flex flex-col items-center">
          <span className="text-5xl mb-2" role="img" aria-label="Contacts">🗺️</span>
          <span className="font-bold text-lg text-[#28306e] mb-1">Global Contacts Map</span>
          <img src={I1} alt="Map" className="w-20 h-16 mt-2 object-cover" />
          <span className="text-gray-600 mt-2">Reach in 14 countries!</span>
        </div>
      </section>
      {/* Animation/Comic Banner */}
      <div className="bg-gradient-to-r from-[#ebf1ff] to-[#f8edfa] rounded-2xl p-7 mb-8 shadow flex flex-col md:flex-row items-center">
        <img src={generatedImage} alt="Comic Animation" className="w-44 h-44 rounded-2xl mr-6 mb-4 md:mb-0" />
        <div>
          <h2 className="text-2xl font-black text-[#4452c3] mb-3">Next-Gen AI Outreach</h2>
          <p className="text-[#377ad2] font-medium">
            Witness the power of Connectly AI’s automation, personalized emails, and smart analytics.
            <span className="inline-block ml-2">⚡</span>
          </p>
        </div>
      </div>
      {/* Tips, Quick Actions, Ad Banner, etc. */}
      <AdBanner />
      {/* Add more sections/cards here as you wish! */}
    </div>
  );
}

export default Dashboard;
