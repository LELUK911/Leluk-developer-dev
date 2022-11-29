import { ReactNode } from "react";
//import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { chainID } from "../fixVariable/Constant";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

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
        <ThirdwebProvider
          supportedChains={supportedChainIds}
          desiredChainId={1}
        >
        {children}
        </ThirdwebProvider>
   
    </>
  );
};

export default LayoutEVM;
