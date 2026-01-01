"use client";

import { Trophy, Medal, Award, Star, Gift } from "lucide-react";

const prizes = [
  {
    position: "1st",
    amount: "₹40,000",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    label: "Winner",
  },
  {
    position: "2nd",
    amount: "₹25,000",
    icon: Medal,
    color: "from-gray-300 to-gray-400",
    bgColor: "bg-gray-400/10",
    borderColor: "border-gray-400/30",
    label: "1st Runner Up",
  },
  {
    position: "3rd",
    amount: "₹15,000",
    icon: Award,
    color: "from-amber-600 to-amber-700",
    bgColor: "bg-amber-600/10",
    borderColor: "border-amber-600/30",
    label: "2nd Runner Up",
  },
];

const specialPrize = {
  amount: "₹20,000",
  icon: Star,
  label: "Special Prize",
  description: "For exceptional innovation and creativity",
};

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-24 bg-gradient-to-b from-black/30 to-black/50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Prizes</span> & Rewards
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compete for amazing prizes and recognition
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mb-16">
          <div className="inline-block glass-strong p-8 rounded-3xl">
            <p className="text-sm text-gray-400 mb-2">Total Prize Pool</p>
            <p className="text-5xl sm:text-6xl font-bold">
              <span className="gradient-text">₹1,00,000</span>
              <span className="text-2xl text-gray-500">/-</span>
            </p>
          </div>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <div
              key={prize.position}
              className={`relative glass p-8 rounded-3xl border ${prize.borderColor} card-hover text-center ${
                index === 0 ? "md:-mt-4 md:scale-105" : ""
              }`}
            >
              {/* Position Badge */}
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ${prize.color}`}
              >
                <span className="text-sm font-bold text-black">{prize.position} Place</span>
              </div>

              {/* Icon */}
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${prize.bgColor} flex items-center justify-center`}>
                <prize.icon className={`w-12 h-12 bg-gradient-to-br ${prize.color} bg-clip-text`} style={{ 
                  stroke: index === 0 ? '#fbbf24' : index === 1 ? '#9ca3af' : '#d97706'
                }} />
              </div>

              {/* Amount */}
              <p className="text-4xl font-bold mb-2">
                <span className={`bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                  {prize.amount}
                </span>
                <span className="text-lg text-gray-500">/-</span>
              </p>

              {/* Label */}
              <p className="text-gray-400">{prize.label}</p>

              {/* Decorative Elements */}
              {index === 0 && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-sm">👑</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Prize */}
        <div className="max-w-xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-purple-500/30 text-center card-hover">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">{specialPrize.label}</h3>
              <Star className="w-8 h-8 text-purple-400" />
            </div>
            
            <p className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {specialPrize.amount}
              </span>
              <span className="text-lg text-gray-500">/-</span>
            </p>
            
            <p className="text-gray-400">{specialPrize.description}</p>
          </div>
        </div>

        {/* Additional Perks */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl text-center card-hover">
            <Gift className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Swag & Goodies</h4>
            <p className="text-sm text-gray-400">Exclusive merchandise for all participants</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center card-hover">
            <Award className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Certificates</h4>
            <p className="text-sm text-gray-400">Participation & winning certificates</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center card-hover">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Networking</h4>
            <p className="text-sm text-gray-400">Connect with industry mentors & sponsors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
