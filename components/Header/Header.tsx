// components/Header/Header.tsx

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-7 mb-16">
      <div className="flex justify-between ">
        <div className="flex items-center gap-4 ">
          <Image
            src="/Craftwork.png"
            alt="Craftwork Logo"
            width={40}
            height={40}
          />
          <Link className="font-bold text-xl" href="/" aria-label="Home">
            VocabBuilder
          </Link>
        </div>

        <nav className="flex items-center ">
          <ul className="flex gap-7">
            <li>
              <Link href="/dictionary">Dictionary</Link>
            </li>
            <li>
              <Link href="/recommend">Recommend</Link>
            </li>
            <li>
              <Link href="/training">Training</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-1 items-center">
          <p>Name</p>
          <button>Log out</button>
        </div>
      </div>
    </header>
  );
};
