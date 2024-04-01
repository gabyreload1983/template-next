"use client";

import Link from "next/link";
import { FaTerminal } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const links = [{ name: "GALLERY", href: "/gallery", target: "" }];

  return (
    <nav className="sticky top-0 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-5 gap-3 justify-center items-center">
        <Link href="/" className="text-white">
          <div className="flex justify-center items-center">
            <FaTerminal size="2em" />
            <h1 className="ms-3 text-xl">Template</h1>
          </div>
        </Link>
        <div className="flex justify-center gap-5 text-white">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.target}
                className={clsx("hover:text-primary", {
                  "text-primary": pathname === link.href,
                })}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
