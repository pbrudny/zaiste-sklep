import Link from "next/link";

export const Header = () =>
  <header className="max-w-md mx-auto w-full">
    <nav className="bg-gray-700 px-4 py-2 text-white">
      <Link href="/">
        <a>Główna</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </header>
