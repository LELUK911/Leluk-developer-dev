import React from "react";
import Image from "next/image";
import Link from "next/link";

const AppService: React.FC = () => {
  return (
    <div className="Container Service">
      <div className="row">
        <div className="col cl-1">
          <h1 className="h1-large title-1">Sviluppa la tua Idea</h1>
          <hr />

          <h4>Porta il tuo busines su blockChain</h4>
          <p className="p-large ">
            Sono qui per aiutarti a sbloccare le potenzialità del settore
            emergente della <span> BlockChain </span> per te e la tua azienda.
          </p>
          <h4>Se hai un idea, portala su BlockChain</h4>
          <p className="p-large">
            Se hai un idea di busines decentralizato, posso aiutarti a
            sviluppare la tua app <span>Web3</span>
          </p>
          <Link href={"/preventive"}>
            <button
              type="button"
              className="btn btn-solid-lg btn-border-radius"
            >
              Contattami per un preventivo
            </button>
          </Link>
        </div>
        <div className="col col-image">
          <Image
            src="/images/computer-1343393_1280.jpg"
            alt="computer image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AppService;
