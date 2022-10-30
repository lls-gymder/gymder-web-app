import { ReactNode } from "react";
import { Header } from "./header";
import { SideMenu } from "./side-menu";


interface Props {
  children: ReactNode;
  showSideMenu?: boolean;
}

export function Page({ children, showSideMenu = true }: Props) {
  return (

    <div className="w-screen bg-purple-400 h-screen flex">
      {
        showSideMenu
        ? (
          <>
            <div className="w-80 bg-blue-200">
              <SideMenu />
            </div>
            <div className="w-full h-full flex flex-col">
              <Header />
                <div className="bg-purple-400 flex grow justify-center">
                  {children}
                </div>
              {/* <Footer /> */}
            </div>
          </>
        )
        : (
          <div className="w-full h-full flex flex-col">
            <Header />
              <div className="flex grow justify-center">
                {children}
              </div>
            {/* <Footer /> */}
          </div>
        )
      }
    </div>
  )
}