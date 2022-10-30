import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { SideMenu } from "./side-menu";


interface Props {
  children: ReactNode;
  showSideMenu: boolean;
}

export function Page({ children, showSideMenu = true }: Props) {
  return (

    <div className="container h-screen flex">
      {
        showSideMenu
        ? (
          <>
            <div className="w-80 bg-blue-200">
              <SideMenu />
            </div>
            <div className="h-full flex flex-col container">
              <Header />
                <div className="bg-purple-400 flex grow justify-center">
                  {children}
                </div>
              <Footer />
            </div>
          </>
        )
        : (
          <div className="container h-full flex flex-col">
            <Header />
              <div className="grow flex grow justify-center">
                {children}
              </div>
            <Footer />
          </div>
        )
      }
    </div>
  )
}