import { ReactNode, FC } from "react";
import "./globals.css";
import Header from "./components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body>{children}</body>
    </html>
  );
};

export default Layout;
