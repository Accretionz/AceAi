"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Youtube, Slack } from "lucide-react";

interface FloatingCardProps {
  delay: string;
  colorClass: string;
  initialRotation: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  delay,
  colorClass,
  initialRotation,
}) => (
  <div
    className={`absolute w-24 h-24 rounded-lg shadow-xl transform opacity-80 backdrop-blur-sm ${colorClass}`}
    style={{
      animation: `floating ${20 + Math.random() * 10}s infinite linear`,
      animationDelay: delay,
      transform: `translate(-50%, -50%) rotate(${initialRotation}deg) translateX(200px)`,
    }}
  >
    <div className="text-zinc-600 text-sm font-mono p-2">"LABEL"</div>
  </div>
);

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-[32px] w-[400px] h-[280px] flex flex-col gap-4 items-center text-center justify-center border border-zinc-700/50 [box-shadow:inset_0_0_1px_1px_rgba(255,255,255,0.1)]">
    <h3 className="text-5xl font-medium bg-gradient-to-b from-white via-white/90 to-zinc-400 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-lg bg-gradient-to-b from-white via-white/90 to-zinc-400 bg-clip-text text-transparent max-w-[280px]">
      {description}
    </p>
  </div>
);

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-zinc-100 text-sm font-medium">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-400 text-sm hover:text-zinc-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HomePage = () => {
  const cards = [
    {
      delay: "0s",
      color: "bg-gradient-to-br from-blue-500/40 to-purple-500/40",
      initialRotation: 0,
    },
    {
      delay: "-2.5s",
      color: "bg-gradient-to-br from-purple-500/40 to-pink-500/40",
      initialRotation: 45,
    },
    {
      delay: "-5s",
      color: "bg-gradient-to-br from-pink-500/40 to-red-500/40",
      initialRotation: 90,
    },
    {
      delay: "-7.5s",
      color: "bg-gradient-to-br from-indigo-500/40 to-cyan-500/40",
      initialRotation: 135,
    },
    {
      delay: "-10s",
      color: "bg-gradient-to-br from-cyan-500/40 to-blue-500/40",
      initialRotation: 180,
    },
    {
      delay: "-12.5s",
      color: "bg-gradient-to-br from-green-500/40 to-emerald-500/40",
      initialRotation: 225,
    },
    {
      delay: "-15s",
      color: "bg-gradient-to-br from-yellow-500/40 to-orange-500/40",
      initialRotation: 270,
    },
    {
      delay: "-17.5s",
      color: "bg-gradient-to-br from-red-500/40 to-rose-500/40",
      initialRotation: 315,
    },
  ];

  return (
    <div className="relative bg-black">
      {/* First section with floating cards */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Floating cards container */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {cards.map((card, index) => (
              <div key={index} className="absolute top-1/2 left-1/2">
                <FloatingCard
                  delay={card.delay}
                  colorClass={card.color}
                  initialRotation={card.initialRotation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex items-center justify-center text-center flex-col gap-8 px-4 py-20 min-h-screen">
          <h3 className="text-zinc-400 text-sm tracking-wide">
            Backed by{" "}
            <span className="font-semibold bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
              PLUGANDPLAY
            </span>
          </h3>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mx-auto max-w-6xl bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent leading-[1.3] pb-3">
              Digital Transformation
            </h1>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mx-auto max-w-6xl bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent leading-[1.3] pb-3">
              for Modern Enterprises
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg max-w-2xl mx-auto bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
              Tens of thousands of companies use Ace to build products better.
            </h2>
            <h2 className="text-lg max-w-2xl mx-auto bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
              From next-gen startups to established enterprises.
            </h2>
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-base">
              Get started
            </Button>
            <Button className="bg-zinc-800 text-white px-8 py-6 text-base hover:bg-zinc-800">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(200px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(200px)
              rotate(-360deg);
          }
        }
      `}</style>

      {/* Second section with spotlight effect */}
      <section className="relative min-h-screen flex items-center justify-center flex-col gap-8 px-4 py-20">
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

        <div className="relative flex flex-col items-center gap-12 max-w-7xl mx-auto">
          <span className="text-sky-400 text-sm font-semibold tracking-wider">
            MEET ACE
          </span>

          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
              One platform for
            </h2>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
              your enterprise AI
            </h2>
            <div className="mt-6 space-y-2">
              <p className="bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
                Tens of thousands of companies use Ace to build products better.
              </p>
              <p className="bg-gradient-to-b from-white via-white/90 to-zinc-500 bg-clip-text text-transparent">
                From next-gen startups to established enterprises.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-8 place-items-center">
            <FeatureCard
              title="Data"
              description="Build, maintain, and deploy models"
            />
            <FeatureCard
              title="Models"
              description="Build, maintain, and deploy models"
            />
            <FeatureCard
              title="Compute"
              description="Build, maintain, and deploy models"
            />
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] flex items-center justify-between px-16 py-20 bg-gradient-to-b from-zinc-900 via-black to-black">
        {/* Text on the left with additional margin */}
        <div className="max-w-xl ml-20 relative">
          {/* Set relative to align buttons */}
          <h1 className="text-4xl md:text-5xl font-medium bg-gradient-to-b from-white via-white/90 to-zinc-400 bg-clip-text text-transparent leading-[1.25] mb-6 pb-1">
            Plan the present.
          </h1>
          <h1 className="text-4xl md:text-5xl font-medium bg-gradient-to-b from-white via-white/90 to-zinc-400 bg-clip-text text-transparent leading-[1.25]">
            Build the future.
          </h1>
          {/* Buttons aligned with the bottom of the text block */}
          <div className="absolute bottom-0 right-[-240%] flex gap-4">
            <Button className="bg-white text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-200">
              Get started
            </Button>
            <Button className="bg-gray-800 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-gray-700">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-16">
          <div className="flex flex-col gap-12 py-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 justify-between">
              <div className="max-w-xl">
                <div className="flex flex-col gap-6 ml-20">
                  <Link href="/" className="w-fit">
                    <Image
                      src="/logo-white.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-zinc-400 text-sm">
                      Artificial Expertise
                    </h3>
                    <h3 className="text-zinc-400 text-sm">
                      Trained by Real Humans
                    </h3>
                  </div>
                </div>
              </div>

              {/* Navigation links section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                <FooterLinkGroup
                  title="Product"
                  links={[
                    { label: "Features", href: "#" },
                    { label: "Integrations", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Company"
                  links={[
                    { label: "About us", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Customers", href: "#" },
                    { label: "Brand", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Resources"
                  links={[
                    { label: "Startup Program", href: "#" },
                    { label: "Community", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "DPA", href: "#" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of service", href: "#" },
                    { label: "Report a vulnerability", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Pricing"
                  links={[
                    { label: "Changelog", href: "#" },
                    { label: "Docs", href: "#" },
                    { label: "Linear Method", href: "#" },
                    { label: "Download", href: "#" },
                  ]}
                />
              </div>
            </div>

            {/* Bottom section with social icons*/}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-6">
              <div className="max-w-xl w-full">
                <div className="flex gap-4 ml-20">
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Github size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Slack size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Youtube size={20} />
                  </Link>
                </div>
              </div>
              {/* Location */}
              <div className="text-zinc-400 text-sm">Made in Palo Alto</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
