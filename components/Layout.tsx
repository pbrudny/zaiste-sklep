import {ReactNode} from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) =>
  <main className="flex flex-col bg-teal-100 min-h-screen">
    {children}
  </main>
