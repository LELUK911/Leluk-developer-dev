import { ReactNode } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutEVM: React.FC<LayoutProps> = ({ children }) => {
  //const desiredChain = ChainId.Localhost;
  const desiredChain = ChainId.Goerli;
  
  return (
    <ThirdwebProvider desiredChainId={desiredChain} >
     
      {children}
    </ThirdwebProvider>
  );
};

export default LayoutEVM;
