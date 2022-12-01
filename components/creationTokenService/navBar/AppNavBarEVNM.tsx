import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

const AppNavBarEVNM = () => {
  return (
    <header className="p-3 navbarEVM">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h3>EVM Section</h3>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>

          <div className="text-end">
            <ConnectWallet  className="connect-wallet"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppNavBarEVNM;
