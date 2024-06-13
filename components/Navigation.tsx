import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import ArrowDown from "./icons/ArrowDown";
import SearchIcon from "./icons/SearchIcon";
import HamburgerMenu from "./HamburgerMenu";

type LinkProps = {
    to: string;
    text: string;
}[];

export default function Navigation() {
    const links: LinkProps = [
        { to: "/over-ons", text: "Over ons" },
        { to: "/cases", text: "Cases" },
        { to: "/kennis", text: "Kennis" },
        { to: "/vacatures", text: "Vacatures" },
        { to: "/contact", text: "Contact" },
    ];

    return (
        <section className="fixed z-20 w-full px-5 -translate-x-1/2 max-w-7xl left-1/2 top-4">
            <div className="flex justify-end gap-6 mb-4 text-sm text-white">
                <a href="mailto:Info@deindruk.nl">Info@deindruk.nl</a>
                <a href="tel:0318512131">0318 51 21 31</a>
            </div>

            <nav className="flex items-center justify-between py-5 bg-white px-7 rounded-xl">
                <Link href="/">
                    <Logo />
                </Link>

                <div className="flex items-center gap-8">
                    <HamburgerMenu />

                    <ul className="items-center hidden gap-10 lg:flex">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.to}
                                    className="flex items-center gap-4"
                                >
                                    {link.text} <ArrowDown />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="p-2 pl-6 border-l border-gray-light">
                        <SearchIcon />
                    </div>
                </div>
            </nav>
        </section>
    );
}
