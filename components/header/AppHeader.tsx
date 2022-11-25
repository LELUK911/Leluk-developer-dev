import React from "react";
import Image from "next/image";
import Link from "next/link";

const AppHeader: React.FC = () => {
  return (
    <div className="container">
      <div className="row AppHeader">
        <div className="col header-txt1 overlay">
          <h1 className="h1-large">
            Sviluppa tutte le tue idee con la <span>BlockChain</span>
          </h1>
          <p className="p-large">
            Ciao sono Leluk e sono uno sviluppatore BlockChain, Aiuto aziende a
            sviluppare soluzioni su BlockChain per il loro business, formo ed
            aiuto i privati a creare le loro idee nel settore web3.
          </p>
          <div className="row align-self-start">
            <Link href='/contacts' passHref >
              <button type="button" className="btn btn-solid-lg btn-border-radius" >
                Contattami
              </button>          
            </Link>
          </div>
        </div>
        <div className="col header-img1 order-last">
          <Image
          className=""
            src="/images/header_image1.png"
            alt="BlockChain Image"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;


