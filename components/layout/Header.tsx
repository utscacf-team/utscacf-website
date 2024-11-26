"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Section from "@/components/layout/Section";
import Text from "@/components/shared/ui/Text";
import { Button } from "../ui/button";

const Header = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleNavBar = () => {
    setNavBarVisible(!navBarVisible);
  };

  useEffect(() => {
    function handleHideHeader() {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setHeaderVisible(true);
        return;
      }

      const isScrollingDown = currentScrollPos > prevScrollPos;
      const scrollDelta = Math.abs(currentScrollPos - prevScrollPos);

      if (scrollDelta > 10) {
        setHeaderVisible(!isScrollingDown);
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleHideHeader);

    return () => window.removeEventListener("scroll", handleHideHeader);
  }, [prevScrollPos]);

  const informationPages = [
    {
      title: "Ministries",
      url: "/ministries",
    },
    {
      title: "Committee",
      url: "/committee",
    },
    // {
    //   title: "Join Us",
    //   url: "/contact",
    // },
  ];

  return (
    <Section
      className={`sticky top-0 z-50 w-full !flex-row flex-wrap items-end !justify-between bg-beige !pb-5 !pt-10 transition-all duration-700 sm:!min-h-0 ${!headerVisible && "translate-y-[-200px]"} `}
    >
      <div>
        <Link href="/" className="flex cursor-pointer flex-row items-end">
          <Image
            className="h-auto max-w-full pb-1"
            src="/acf-logo.svg"
            alt="ACF Logo"
            width="80"
            height="80"
          />
          <p className="mx-3 text-4xl font-bold">ACF</p>
        </Link>
      </div>

      <Button
        variant="ghost"
        className="z-50 self-end py-6 hover:bg-orange-200 md:hidden"
        onClick={toggleNavBar}
      >
        {!navBarVisible ? <FaBars size={40} /> : <FaTimes size={40} />}
      </Button>
      <div className="relative basis-full md:basis-auto">
        <nav
          className={`${
            navBarVisible
              ? "fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-beige/80 text-2xl backdrop-blur"
              : "h-0 w-0 opacity-0"
          } md:static md:flex md:h-auto md:w-auto md:flex-row md:items-end md:bg-beige md:pt-0 md:opacity-100`}
        >
          <ul className="flex flex-col gap-6 md:flex-row">
            {informationPages.map((elm, i) => (
              <li key={i}>
                <Button asChild variant="ghost" className="hover:bg-orange-200">
                  <Link href={elm.url} onClick={() => setNavBarVisible(false)}>
                    <Text variant="p" className="block">
                      {elm.title}
                    </Text>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  );
};

export default Header;
