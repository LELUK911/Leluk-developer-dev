import { ReactNode } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutEVM: React.FC<LayoutProps> = ({ children }) => {
  const desiredChain = ChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={desiredChain}>
     
      {children}
    </ThirdwebProvider>
  );
};

export default LayoutEVM;
