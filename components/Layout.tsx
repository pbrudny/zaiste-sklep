import {ReactNode} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) =>
  <div className="flex flex-col bg-teal-100 min-h-screen">
    <Header/>
      <div className="flex-grow">
        {children}
      </div>
    <Footer/>
  </div>
