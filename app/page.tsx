"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-elegant-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`font-display text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-berkeley-blue" : "text-white"
                }`}
              >
                BRREC
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#about"
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-berkeley-gold ${
                  scrolled
                    ? "text-gray-800 hover:text-berkeley-blue"
                    : "text-white/90"
                }`}
              >
                About
              </a>
              <a
                href="#programs"
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-berkeley-gold ${
                  scrolled
                    ? "text-gray-800 hover:text-berkeley-blue"
                    : "text-white/90"
                }`}
              >
                Programs
              </a>
              <a
                href="#events"
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-berkeley-gold ${
                  scrolled
                    ? "text-gray-800 hover:text-berkeley-blue"
                    : "text-white/90"
                }`}
              >
                Events
              </a>
              <a
                href="#join"
                className="px-6 py-2.5 bg-berkeley-gold text-berkeley-blue rounded-lg font-semibold text-sm tracking-wide hover:bg-yellow-400 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg transform hover:scale-105"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-berkeley text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-berkeley-blue/50"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[1.1] text-white">
              Berkeley Residential
              <br />
              <span className="text-berkeley-gold">Real Estate Club</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
              Empowering the next generation of real estate leaders at UC
              Berkeley
            </p>
            <p className="text-lg mb-14 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join a community of ambitious students building careers in
              residential real estate through networking, education, and hands-on
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="#join"
                className="px-10 py-4 bg-berkeley-gold text-berkeley-blue rounded-xl font-bold text-lg tracking-wide hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-elegant-xl hover:shadow-2xl"
              >
                Become a Member
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-berkeley-blue">
                Our Mission
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-berkeley-gold to-transparent mx-auto mb-10"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-7">
                <p className="text-xl text-black leading-relaxed font-light">
                  The Berkeley Residential Real Estate Club (BRREC) is a
                  premier student organization at UC Berkeley dedicated to
                  bridging the gap between academic excellence and real-world
                  real estate expertise.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  We provide a platform for students to explore careers in
                  residential real estate through industry connections,
                  educational workshops, property analysis, and networking
                  opportunities with leading professionals.
                </p>
              </div>
              <div className="bg-gradient-to-br from-berkeley-blue via-blue-800 to-berkeley-blue rounded-3xl p-10 text-white shadow-elegant-xl">
                <h3 className="font-display text-3xl font-bold mb-6">
                  Why Join BRREC?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-4 font-bold text-xl mt-0.5">
                      ✓
                    </span>
                    <span className="text-white/95 leading-relaxed">
                      Access to exclusive industry events and guest speakers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-4 font-bold text-xl mt-0.5">
                      ✓
                    </span>
                    <span className="text-white/95 leading-relaxed">
                      Hands-on experience with real estate analysis and
                      investment strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-4 font-bold text-xl mt-0.5">
                      ✓
                    </span>
                    <span className="text-white/95 leading-relaxed">
                      Network with alumni and professionals in the field
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-4 font-bold text-xl mt-0.5">
                      ✓
                    </span>
                    <span className="text-white/95 leading-relaxed">
                      Build your resume with leadership and project experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-berkeley-blue">
              Our Programs
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-berkeley-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-black max-w-2xl mx-auto font-light">
              Comprehensive programs designed to develop your real estate
              expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-berkeley-blue/30 group">
              <div className="w-16 h-16 bg-gradient-berkeley rounded-2xl flex items-center justify-center mb-8 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-black">
                Industry Networking
              </h3>
              <p className="text-black leading-relaxed text-base">
                Connect with real estate professionals, brokers, investors, and
                developers through exclusive networking events, panel
                discussions, and mentorship programs.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-berkeley-gold/50 group">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-8 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-berkeley-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-black">
                Educational Workshops
              </h3>
              <p className="text-black leading-relaxed text-base">
                Learn from industry experts about market analysis, property
                valuation, investment strategies, real estate law, and emerging
                trends in residential real estate.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-berkeley-blue/30 group">
              <div className="w-16 h-16 bg-gradient-berkeley rounded-2xl flex items-center justify-center mb-8 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-black">
                Real-World Projects
              </h3>
              <p className="text-black leading-relaxed text-base">
                Gain hands-on experience through property analysis projects,
                case studies, investment competitions, and collaborative
                research initiatives with industry partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-berkeley-blue">
                Our Values
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-berkeley-gold to-transparent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-10">
              {[
                {
                  title: "Excellence",
                  description:
                    "Striving for the highest standards in everything we do",
                },
                {
                  title: "Innovation",
                  description:
                    "Embracing new ideas and approaches in real estate",
                },
                {
                  title: "Community",
                  description:
                    "Building strong connections and supporting each other",
                },
                {
                  title: "Integrity",
                  description:
                    "Conducting ourselves with honesty and professionalism",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-berkeley-gold to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                    <span className="text-berkeley-blue font-bold text-2xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">
                    {value.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-berkeley-blue">
              Upcoming Events
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-berkeley-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-black max-w-2xl mx-auto font-light">
              Join us for exciting events and opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Fall 2024 Kickoff",
                date: "September 15, 2024",
                description:
                  "Join us for our inaugural meeting and learn about our plans for the semester.",
              },
              {
                title: "Industry Panel",
                date: "October 5, 2024",
                description:
                  "Hear from leading real estate professionals about career paths and opportunities.",
              },
              {
                title: "Property Tour",
                date: "November 12, 2024",
                description:
                  "Exclusive tour of residential properties with industry experts.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-berkeley-blue/30 transition-all duration-300 hover:scale-105 shadow-elegant-lg hover:shadow-elegant-xl"
              >
                <div className="text-berkeley-gold font-bold text-sm mb-3 tracking-wide uppercase">
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-black">
                  {event.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl mb-6 text-gray-200 font-light">
              Join the Berkeley Residential Real Estate Club and become part of
              a community shaping the future of real estate.
            </p>
            <p className="text-lg mb-14 text-gray-400">
              Open to all UC Berkeley students passionate about residential real
              estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
              <a
                href="#"
                className="px-12 py-5 bg-berkeley-gold text-berkeley-blue rounded-xl font-bold text-lg tracking-wide hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-elegant-xl hover:shadow-2xl"
              >
                Apply for Membership
              </a>
              <a
                href="mailto:contact@brrec.berkeley.edu"
                className="px-12 py-5 border-2 border-white/30 text-white rounded-xl font-semibold text-lg tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-20 pt-16 border-t border-gray-800 grid md:grid-cols-3 gap-12 text-left">
              <div>
                <h4 className="font-bold text-xl mb-5 text-berkeley-gold">
                  Membership Benefits
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Exclusive networking events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Industry workshops & seminars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Access to alumni network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Leadership opportunities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-5 text-berkeley-gold">
                  Get Involved
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Attend our events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Join committees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Volunteer for projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Run for leadership positions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-5 text-berkeley-gold">
                  Stay Connected
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Follow us on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Join our mailing list</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Attend info sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-berkeley-gold mr-3">•</span>
                    <span>Reach out to leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="font-display text-2xl font-bold text-white">
                  BRREC
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Empowering the next generation of real estate leaders at UC
                Berkeley.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-berkeley-gold transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="text-gray-400 hover:text-berkeley-gold transition-colors duration-300"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-gray-400 hover:text-berkeley-gold transition-colors duration-300"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#join"
                    className="text-gray-400 hover:text-berkeley-gold transition-colors duration-300"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">University of California, Berkeley</li>
                <li>
                  <a
                    href="mailto:contact@brrec.berkeley.edu"
                    className="text-gray-400 hover:text-berkeley-gold transition-colors duration-300"
                  >
                    contact@brrec.berkeley.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center text-sm">
            <p className="text-gray-500 mb-2">
              © {new Date().getFullYear()} Berkeley Residential Real Estate
              Club. All rights reserved.
            </p>
            <p className="text-gray-600">
              A registered student organization at UC Berkeley
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
