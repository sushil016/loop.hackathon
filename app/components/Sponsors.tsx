"use client";

import { Handshake, ExternalLink } from "lucide-react";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    description: "Premier partnership opportunity",
    sponsors: [
      { name: "Your Company Here", logo: null },
    ],
    size: "lg",
  },
  {
    tier: "Platinum Sponsors",
    description: "Featured partnership",
    sponsors: [
      { name: "Company 1", logo: null },
      { name: "Company 2", logo: null },
    ],
    size: "md",
  },
  {
    tier: "Gold Sponsors",
    description: "Strategic partners",
    sponsors: [
      { name: "Company 3", logo: null },
      { name: "Company 4", logo: null },
      { name: "Company 5", logo: null },
    ],
    size: "sm",
  },
  {
    tier: "Silver Sponsors",
    description: "Supporting partners",
    sponsors: [
      { name: "Company 6", logo: null },
      { name: "Company 7", logo: null },
      { name: "Company 8", logo: null },
      { name: "Company 9", logo: null },
    ],
    size: "xs",
  },
];

const getSponsorCardSize = (size: string) => {
  switch (size) {
    case "lg": return "w-64 h-32";
    case "md": return "w-48 h-24";
    case "sm": return "w-40 h-20";
    case "xs": return "w-32 h-16";
    default: return "w-40 h-20";
  }
};

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Title Sponsor": return "from-yellow-400 to-amber-500";
    case "Platinum Sponsors": return "from-gray-200 to-gray-400";
    case "Gold Sponsors": return "from-yellow-500 to-amber-600";
    case "Silver Sponsors": return "from-gray-400 to-gray-500";
    default: return "from-blue-500 to-cyan-500";
  }
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 bg-gradient-to-b from-black/50 to-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Partnering with industry leaders to bring you an exceptional hackathon experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tierData) => (
            <div key={tierData.tier} className="text-center">
              {/* Tier Title */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className={`h-px w-12 bg-gradient-to-r ${getTierColor(tierData.tier)}`} />
                <h3 className={`text-xl font-bold bg-gradient-to-r ${getTierColor(tierData.tier)} bg-clip-text text-transparent`}>
                  {tierData.tier}
                </h3>
                <div className={`h-px w-12 bg-gradient-to-l ${getTierColor(tierData.tier)}`} />
              </div>

              {/* Sponsor Cards */}
              <div className="flex flex-wrap justify-center gap-6">
                {tierData.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`${getSponsorCardSize(tierData.size)} glass rounded-2xl flex items-center justify-center card-hover border border-white/5 hover:border-blue-500/30 transition-colors`}
                  >
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} className="max-w-[80%] max-h-[80%] object-contain" />
                    ) : (
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">{sponsor.name}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-20">
          <div className="glass-strong p-8 md:p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <Handshake className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Partner with Loop and connect with 100+ talented developers, engineers, 
              and innovators. Showcase your brand to the next generation of tech leaders.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-2xl font-bold gradient-text">100+</p>
                <p className="text-sm text-gray-400">Participants</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-2xl font-bold gradient-text">24hrs</p>
                <p className="text-sm text-gray-400">Exposure</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-2xl font-bold gradient-text">National</p>
                <p className="text-sm text-gray-400">Reach</p>
              </div>
            </div>

            <a
              href="mailto:loop.hackathon26@gmail.com?subject=Sponsorship%20Inquiry%20-%20Loop%20Hackathon"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full text-white font-semibold"
            >
              <Handshake className="w-5 h-5" />
              Become a Sponsor
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
