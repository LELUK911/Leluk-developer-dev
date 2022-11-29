import { ReactNode } from "react";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { chainID } from "../fixVariable/Constant";


const supportedChainIds=chainID.map(data=>data.id)
const connectors={
  injected:{},
  walletconnect: {},
}





interface LayoutProps {
  children: ReactNode;
}

const LayoutEVM: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
        >
        {children}
        </ThirdwebWeb3Provider>
   
    </>
  );
};

export default LayoutEVM;
