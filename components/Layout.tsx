import {ReactNode} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import Head from "next/head";
import {NextSeo} from "next-seo";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) =>
  <div className="flex flex-col min-h-screen">
    <NextSeo
      title={"Test sklepu"}
      description={"Jakiś opis"}
    />
    <Header/>
      <div className="flex-grow">
        {children}
      </div>
    <Footer/>
  </div>
