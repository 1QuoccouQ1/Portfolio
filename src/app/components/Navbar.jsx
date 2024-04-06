"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ScrollToTop from '../ScrollToTop';


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact Me",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img  className="w-20 h-20" src="https://lh3.googleusercontent.com/pw/AP1GczMcETN17ryAcE76V5y-_chUs2O4aSU7EGmJi666pF45fMj8eYa3of3SC-RQAdwx1AsfNevIYeRQ4B-kepzryTjWqIV3D4HSrUlC95vKo-beGmqhXt1kR8m63Nq7JjwXks4hK3SjGAIWnHsyaAoUDFSG2l_kf74inomMatAbKqxantNmayiuQZBPooPCocDpEwJqVvJLKb9zIuJcRKForZoZx7xHXQU5Bh0ALQOTW89XWLpP0lLKycgGDvPilBB8BJU8vvR6T1S8MR8m9v9z9Qcxb3oPA2BbmR4N2T7iOezeOdrvt4yzm59rHjHQ8aJoPzJF3o44mq3jsnC90PP4JguSpRUuWzjkheqwg3fA0fsZ7klfaY9NvE2FV9BF0AKpZ6_z_crq3CkjyFrOe9cYKnunidmg9uJ03siXLCBCA1hMzGitnPOCJCxgWk2-zGDSaV2WnVpFK83KLToeovFI14AlKUxsLjBLhu6Bw700ZZhPOY1hT_Lb7Wr7pG4mRkAMCRTy_oGSXZR5ijNXQ3UOAVV74BeIx6nO0IqJrifDjHguXA1iwiLCLA_Is_1LJaUflQJMjo-h0ICpG4BbM8QBIZP9SxNctLV7e2l-6vVagU51SjK7uZgIQK480O_gjqphoDrXcO3n6Nq6cNh-qf3RJwS0FeRDaZ_vTSnGSlIqz8_Yip-pr3kUN4oMP3T4KeF_9TcF1cvwmBA4TVE6tmB0kv8smasruVqaqznJRD7cZ8FkUjfCaoYhkkEHoQaDWh0qMv6xJFpatAXFT__66LUJ2z7MKIgYyYPjIrhHqPTm08z8LQGTRBIOgIpoUlFPiIRrOGuM7DiX0C7m1mBJwGlRAIZZU94O2Oqgp_C0LDagRdWbSDBwqAFy9fY7AiuC614AXNUdlq65bIvT44mVzQXfKpo_KGgsryV5qqyHSmawFdgw1X7xzUxK-25LgucT-CA=w500-h500-s-no?authuser=1"></img>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
