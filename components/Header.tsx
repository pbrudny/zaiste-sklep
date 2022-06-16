import Link from "next/link";
import { useRouter} from "next/router";
export const Header = () => {
  const router = useRouter();

  return (
  <header className="max-w-md mx-auto w-full">
    <nav className="bg-gray-700 px-4 py-2 text-white">
      <Link href="/">
        <a className={router.pathname == "/" ? "selected" : ""}>Główna</a>
      </Link>
      <Link href="/users/ja">
        <a className={router.pathname == "/users/ja" ? "selected" : ""}>Ja</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == "/about" ? "selected" : ""}>About</a>
      </Link>
    </nav>
  </header>
  )
}
