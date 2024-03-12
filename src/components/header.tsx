import { LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex-col items-center bg-[#282828] flex  pt-5">
      <Image
        src="/FPPO.svg"
        alt="Picture of the author"
        width={50}
        height={50}
        className="w-[400px]"
      />
      <nav className=" flex max-w-screen-xl mx-auto items-end align-end">
        {LINKS.map((link) => (
          <div
            className="flex flex-col  max-auto items-center max-w-lg mx-auto"
            key={link.href}
          >
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
