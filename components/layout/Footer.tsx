import React from "react";
import Section from "@/components/layout/Section";
import { LuDot } from "react-icons/lu";
import SocialIcon from "@/components/shared/buttons/SocialIcon";

import Text from "@/components/shared/ui/Text";

const Footer = () => {
  const socials = [
    {
      provider: "instagram",
      href: "https://www.instagram.com/acf.utsc/",
    },
    {
      provider: "facebook",
      href: "https://www.facebook.com/acfutsc",
    },
    {
      provider: "discord",
      href: "https://discord.gg/ECaymHuDRn",
    },
    {
      provider: "email",
      href: "mailto:acf.utsc@gmail.com",
    },
    {
      provider: "linktree",
      href: "https://linktr.ee/acf.utsc",
    },
  ];

  return (
    <Section className="bg-black py-20 text-white sm:!min-h-0">
      <div className="mb-10 flex w-full flex-col items-start justify-around self-center border-b pb-10 text-2xl sm:flex-row sm:items-center sm:gap-2 sm:text-2xl md:text-4xl">
        <p>Faith</p>
        <LuDot className="hidden sm:block" />
        <p>Community</p>
        <LuDot className="hidden sm:block" />
        <p>Transformation</p>
      </div>
      <nav className="mt-2 flex gap-4">
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            provider={social.provider}
            href={social.href}
            variant="ghost"
          />
        ))}
      </nav>
    </Section>
  );
};

export default Footer;
