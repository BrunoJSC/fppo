import { LINKS } from "@/constants/links";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-[#282828]">
      <nav className="max-w-md mx-auto flex items-end align-end">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-black inline-block w-[190px] text-center`}
            style={{ padding: "0.5rem 1rem", backgroundColor: link.color }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
