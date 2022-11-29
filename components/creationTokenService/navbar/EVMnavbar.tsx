import React, { useState } from "react";
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks";
import { chainID } from "../../fixVariable/Constant";

const EVMnavbar = () => {
  const { address, connectWallet, disconnectWallet } = useWeb3();
  const { switchNetwork } = useSwitchNetwork();

  const renderConnect = () => {
    return (
      <button
        className="btn btn-outline-primary connect-button"
        onClick={() => {
          connectWallet("injected");
        }}
      >
        Connect
      </button>
    );
  };
  const renderDisconnect = () => {
    return (
      <button
        className="btn btn-outline-primary connect-button"
        onClick={disconnectWallet}
      >
        Disconnect
      </button>
    );
  };
  //1, 5, 137,43114,56,250
  const renderChainSwitch = () => {
    return (
      <div className="btn-group connect-button" role="group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          chain
        </button>
        <ul className="dropdown-menu">
          {chainID.map((chain) => {
            return (
              <li
                key={chain.id}
                className="nav-item"
                onClick={() => {
                  switchNetwork(chain.id);
                }}
              >
                <a
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  {chain.chain}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <nav className="navbar  navbarEVM">
      <div className="container-fluid">
        <h4>EVM section</h4>
        <div>
          {renderChainSwitch()}
          {address && renderDisconnect()}
          {!address && renderConnect()}
        </div>
      </div>
    </nav>
  );
};

export default EVMnavbar;
