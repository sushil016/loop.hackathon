"use client";

import { Trophy, Medal, Award, Star, Gift } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ConfettiButton } from "@/components/ui/confetti";

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

        {/* Total Prize Pool with ShineBorder */}
        <div className="text-center mb-16 flex justify-center">
          <ShineBorder
            borderWidth={2}
            duration={8}
            shineColor={["#fbbf24", "#f59e0b", "#d97706"]}
            className="glass-strong p-8 rounded-3xl"
          >
            <AnimatedGradientText className="text-sm text-gray-400 mb-4">
              🏆 Total Prize Pool 🏆
            </AnimatedGradientText>
            <div className="text-5xl sm:text-6xl font-bold mb-2 text-yellow-400">
              ₹1,00,000
            </div>
            <ConfettiButton
              options={{
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#fbbf24", "#f59e0b", "#d97706", "#fcd34d"]
              }}
              className="mt-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
            >
              🎉 Celebrate Prize Pool
            </ConfettiButton>
          </ShineBorder>
        </div>

        {/* Main Prizes with ShineBorder */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* First Place */}
          <ShineBorder
            borderWidth={2}
            duration={6}
            shineColor={["#fbbf24", "#fcd34d", "#fbbf24"]}
            className={`relative glass p-8 rounded-3xl text-center md:-mt-4 md:scale-105`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500">
              <span className="text-sm font-bold text-black">1st Place</span>
            </div>
            
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Trophy className="w-12 h-12" style={{ stroke: '#fbbf24' }} />
            </div>

            <div className="text-4xl font-bold mb-2 text-yellow-400">
              ₹40,000
            </div>
            <span className="text-lg text-gray-500">/-</span>

            <p className="text-gray-400 mt-2">Winner</p>

            <div className="absolute -top-2 -right-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-sm">👑</span>
              </div>
            </div>
          </ShineBorder>

          {/* Second Place */}
          <ShineBorder
            borderWidth={2}
            duration={7}
            shineColor={["#9ca3af", "#d1d5db", "#9ca3af"]}
            className="relative glass p-8 rounded-3xl text-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-400">
              <span className="text-sm font-bold text-black">2nd Place</span>
            </div>
            
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-400/10 flex items-center justify-center">
              <Medal className="w-12 h-12" style={{ stroke: '#9ca3af' }} />
            </div>

            <div className="text-4xl font-bold mb-2 text-gray-300">
              ₹25,000
            </div>
            <span className="text-lg text-gray-500">/-</span>

            <p className="text-gray-400 mt-2">1st Runner Up</p>
          </ShineBorder>

          {/* Third Place */}
          <ShineBorder
            borderWidth={2}
            duration={7}
            shineColor={["#d97706", "#f59e0b", "#d97706"]}
            className="relative glass p-8 rounded-3xl text-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700">
              <span className="text-sm font-bold text-white">3rd Place</span>
            </div>
            
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-600/10 flex items-center justify-center">
              <Award className="w-12 h-12" style={{ stroke: '#d97706' }} />
            </div>

            <div className="text-4xl font-bold mb-2 text-amber-500">
              ₹15,000
            </div>
            <span className="text-lg text-gray-500">/-</span>

            <p className="text-gray-400 mt-2">2nd Runner Up</p>
          </ShineBorder>
        </div>

        {/* Special Prize */}
        <div className="max-w-xl mx-auto mb-16">
          <ShineBorder
            borderWidth={2}
            duration={8}
            shineColor={["#a855f7", "#ec4899", "#a855f7"]}
            className="glass p-8 rounded-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">Special Prize</h3>
              <Star className="w-8 h-8 text-purple-400" />
            </div>
            
            <div className="text-4xl font-bold mb-4 text-purple-400">
              ₹20,000
            </div>
            
            <p className="text-gray-400 mb-4">For exceptional innovation and creativity</p>

            <ConfettiButton
              options={{
                particleCount: 80,
                spread: 60,
                origin: { y: 0.6 },
                colors: ["#a855f7", "#ec4899", "#f0abfc"]
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              ✨ Celebrate Innovation
            </ConfettiButton>
          </ShineBorder>
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
