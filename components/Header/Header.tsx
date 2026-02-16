// components/Header/Header.tsx

import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/" aria-label="Home">
        VocabBuilder
      </Link>
      <nav>
        <ul>
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
    </header>
  );
};
