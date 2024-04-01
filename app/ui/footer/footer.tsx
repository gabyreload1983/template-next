import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

const links = [
  {
    name: "FaWhatsapp",
    icon: FaWhatsapp,
    href: "https://web.whatsapp.com/send?l=es&phone=+5493476123456",
    target: "_blank",
  },

  {
    name: "FaInstagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    name: "IoMailOutline",
    icon: IoMailOutline,
    href: "mailto:mail@mail.com",
    target: "",
  },
];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 right-1/2 left-1/2 py-5">
      <div className="flex justify-center gap-5">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link key={link.name} href={link.href} target={link.target}>
              <LinkIcon className="hover:text-primary text-3xl md:text-6xl" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
