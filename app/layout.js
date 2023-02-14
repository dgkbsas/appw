"use client";
import { createContext, useContext } from "react";

// styles
import "@/app/globals.css";

// components
import NavigationBar from "./components/NavigationBar";
import TopBarHeader from "./components/TopBarHeader";
import NavMenuMobile from "./components/NavMenuMobile";
import UsarContexto from "./context/UsarContexto";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <UsarContexto>
          <NavMenuMobile />
          <NavigationBar />
          <div className="mainContainer" id="mainContainer">
            <TopBarHeader />
            {children}
          </div>
        </UsarContexto>
      </body>
    </html>
  );
}
