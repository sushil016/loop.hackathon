"use client";

const benefits = [
  {
    id: 1,
    title: "Brand Visibility",
    description: "Your logo featured on all event materials, website, and participant communications.",
  },
  {
    id: 2,
    title: "Talent Access",
    description: "Connect directly with 100+ skilled developers, engineers, and innovators.",
  },
  {
    id: 3,
    title: "Judging Opportunity",
    description: "Participate as judges and interact with participating teams.",
  },
  {
    id: 4,
    title: "Recruitment Pipeline",
    description: "Identify and recruit top talent from participating students.",
  },
  {
    id: 5,
    title: "Product Showcase",
    description: "Present your APIs, tools, or products to tech-savvy participants.",
  },
  {
    id: 6,
    title: "Community Goodwill",
    description: "Support student innovation and build lasting relationships with the tech community.",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Partner with Us
          </h2>
          <p className="text-white/50 max-w-2xl">
            Join us as a sponsor and connect with the next generation of tech innovators
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="border border-white/10 p-6 rounded-lg hover:border-white/20 transition-colors"
            >
              <span className="text-white/30 font-mono text-sm">
                {String(benefit.id).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="border border-white/10 rounded-lg p-8 mb-16">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">400+</p>
              <p className="text-white/40 text-sm mt-1">Participants</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24 hrs</p>
              <p className="text-white/40 text-sm mt-1">Brand Exposure</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">National</p>
              <p className="text-white/40 text-sm mt-1">Reach</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-white/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            Partner with Loop and showcase your brand to 100+ talented developers, 
            engineers, and innovators. Multiple sponsorship tiers available.
          </p>
          <a
            href="mailto:loop.hackathon26@gmail.com?subject=Sponsorship%20Inquiry%20-%20Loop%20Hackathon"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Contact for Sponsorship
          </a>
        </div>
      </div>
    </section>
  );
}