import React from "react";
import SolidityLogo from "./SolidityLogo";
import NextJsLogo from "./NextJsLogo";

export const AppTechnologies: React.FC = () => {
  return (
    <>
      <div className="row solidity">
        <div className="row language">
          <h1 className="h1-large">Linguaggi e librerie</h1>
        </div>
        <div className="col-2  col-logo">
          <SolidityLogo />
        </div>
        <div className="col  col-txt">
          <h2 className="h2-large Title">Solidity</h2>
          <p className="p-large">
            <span>Solidity </span>è un linguaggio di programmazione ad oggetti
            tratto da Javascrip. Esso permette la creazione di contratti
            intelligenti
            <span> SmartContract</span> che danno vita a token, nft, dapp sulla
            BlokChain
          </p>
        </div>
        <div className="row nextJs">
          <div className="col  col-txt">
            <h2 className="h2-large Title">Next.js</h2>
            <p className="p-large">
              <span>Next.js</span> è un framework <span>JavaScript</span>{" "}
              back-end per applicazioni <span>React</span>, Con il quale si
              possono sviluppare applicazioni web, app mobile, desktop e web app
              progressive.
            </p>
          </div>
          <div className="col col-logo">
            <NextJsLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTechnologies;
