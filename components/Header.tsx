import Link from "next/link";
import Image from "next/image";
import { useRouter} from "next/router";
import {CartBar} from "./Cart/CartBar";

interface NavLinkInterface {
  href: string,
  name: string,
  current: string,
}

const NavLink = ({href, name, current}: NavLinkInterface) => {
  const className = current == href ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium aria-current="page"': "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  )
}

interface NavLinkMobileInterface {
  href: string,
  name: string,
  current: string,
}

const NavLinkMobile = ({href, name, current}: NavLinkMobileInterface) => {
  const className = current == href ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium':
    "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  )
}

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                  width={50}
                  height={50}
                />

              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center ">
                  <NavLink href={"/"} name={"Główna"} current={router?.pathname}/>
                  <NavLink href={"/products/page/1"} name={"Produkty"} current={router?.pathname}/>
                  <NavLink href={"/about"} name={"About"} current={router?.pathname}/>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <CartBar />
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinkMobile href={"/"} name={"Główna"} current={router?.pathname}/>
            <NavLinkMobile href={"/products"} name={"Produkty"} current={router?.pathname}/>
            <NavLinkMobile href={"/about"} name={"About"} current={router?.pathname}/>
          </div>
        </div>
      </nav>

    </header>
)
}
