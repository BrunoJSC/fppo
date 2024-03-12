import { LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#282828] flex  pt-5">
      <nav className=" flex max-w-screen-xl mx-auto items-end align-end">
        {LINKS.map((link) => (
          <div
            className="flex flex-col  max-auto items-center max-w-lg mx-auto"
            key={link.href}
          >
            <h2 className="text-5xl font-bold text-white">{link.word}</h2>
            <div>
              <Link
                href={link.href}
                className="w-[100px] inline-block"
                style={{ padding: "0.5rem 1rem", backgroundColor: link.color }}
              >
                {link.label}
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
