"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText, CreditCard } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Cover } from "@/components/ui/cover";
import { Highlight } from "@/components/ui/hero-highlight";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-2xl">
              LOOP
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <PointerHighlight
              rectangleClassName="border-2 border-blue-500"
              pointerClassName="text-blue-500"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Policies
              </span>
            </PointerHighlight>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Please read our <Highlight className="text-white font-semibold">terms</Highlight> and{" "}
            <Highlight className="text-white font-semibold">policies</Highlight> carefully before registering.
          </p>
        </div>

        {/* Terms & Conditions Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
              <FileText className="w-7 h-7 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Terms & <Cover>Conditions</Cover>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
              <p className="text-white/70 leading-relaxed">
                By registering for Loop Hackathon, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not register for the event.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Eligibility</h3>
              <p className="text-white/70 leading-relaxed">
                Loop Hackathon is open to all undergraduate students pursuing a Bachelor's degree in any field. 
                Participants must be currently enrolled in an accredited educational institution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. Team Formation</h3>
              <p className="text-white/70 leading-relaxed">
                Teams must consist of <Highlight className="text-white font-semibold">3 to 6 members</Highlight>. 
                Inter-college team formation is allowed. Each participant can only be part of one team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Code of Conduct</h3>
              <p className="text-white/70 leading-relaxed mb-3">
                All participants are expected to maintain professional behavior throughout the event. 
                Harassment, discrimination, or any form of misconduct will result in immediate disqualification.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Respect all participants, organizers, and mentors</li>
                <li>No plagiarism or use of pre-existing code</li>
                <li>Follow all instructions from event organizers</li>
                <li>Maintain venue cleanliness and equipment safety</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h3>
              <p className="text-white/70 leading-relaxed">
                Participants retain ownership of their projects. However, by participating, you grant Loop Hackathon 
                the right to showcase, photograph, and promote your project for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">6. Liability Waiver</h3>
              <p className="text-white/70 leading-relaxed">
                The organizers are not responsible for any loss, damage, or injury to persons or property during the event. 
                Participants attend at their own risk.
              </p>
            </div>
          </div>
        </section>

        {/* Registration & Refund Policy Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-white/10">
              <CreditCard className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Registration & <Cover>Refund Policy</Cover>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Online Registration</h3>
              <p className="text-white/70 leading-relaxed">
                Online registration through <Highlight className="text-white font-semibold">Unstop is completely FREE</Highlight>. 
                This allows you to submit your project idea and compete in the online evaluation round.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Grand Finale Registration Fee</h3>
              <p className="text-white/70 leading-relaxed mb-3">
                Selected teams for the Grand Finale (offline 24-hour hackathon) must pay a registration fee of{" "}
                <Highlight className="text-yellow-400 font-bold">₹400/- per team</Highlight>.
              </p>
              <p className="text-white/70 leading-relaxed">
                This fee covers:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mt-2">
                <li>Food and beverages throughout the 24-hour event</li>
                <li>Access to mentorship and resources</li>
                <li>Participation certificate</li>
                <li>Event kit and merchandise</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    ⚠️ No Refund Policy
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-3">
                    <Highlight className="text-white font-semibold">Once the registration fee for the Grand Finale is paid, it is NON-REFUNDABLE</Highlight> under any circumstances, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li>Team withdrawal after payment</li>
                    <li>Unable to attend due to personal reasons</li>
                    <li>Change in team composition</li>
                    <li>Event postponement or cancellation (full refund only in this case)</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed mt-4">
                    Please ensure your team's commitment before making the payment. We recommend confirming availability 
                    of all team members for the event dates <Cover>(20th February 2026)</Cover> before proceeding with registration.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Payment Process</h3>
              <p className="text-white/70 leading-relaxed">
                Payment instructions will be sent to the team leader via email after selection for the Grand Finale. 
                Accepted payment methods include UPI, Net Banking, and Credit/Debit Cards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Registration Confirmation</h3>
              <p className="text-white/70 leading-relaxed">
                Your registration for the Grand Finale will be confirmed only after successful payment. 
                You will receive a confirmation email with event details and instructions.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
              <Shield className="w-7 h-7 text-purple-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Privacy <Cover>Policy</Cover>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Information We Collect</h3>
              <p className="text-white/70 leading-relaxed">
                We collect personal information including name, email, phone number, college name, and team details 
                for registration and communication purposes only.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Use of Information</h3>
              <p className="text-white/70 leading-relaxed">
                Your information will be used solely for event management, communication, and certificate generation. 
                We will not sell or share your data with third parties without consent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Data Security</h3>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="border-t border-white/10 pt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Questions About Our <Cover>Policies</Cover>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact us at <a href="mailto:loop.hackathon26@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold">loop.hackathon26@gmail.com</a>
            </p>
            <Link href="/">
              <button className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Loop Hackathon · <Cover>Innovation & Robotics Lab</Cover>
          </p>
        </div>
      </footer>
    </div>
  );
}
