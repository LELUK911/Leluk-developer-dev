import { ReactNode } from "react";
import AppFooter from "../footer/AppFooter"
import AppNavBar from "../navBar/AppNavBar"


interface LayoutProps{
  children: ReactNode;
}


const AppLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <AppNavBar/>
        {children}
    <AppFooter/>
    </>
  )
}

export default AppLayout